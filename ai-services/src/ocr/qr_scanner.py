"""
QR Code Scanner for Contact Information
Scans QR codes from business cards and extracts contact details
Supports WeChat, WhatsApp, and vCard formats
"""

import cv2
import numpy as np
import json
import re
from typing import Dict, Optional, List
from PIL import Image
import base64
from io import BytesIO

class QRCodeScanner:
    def __init__(self):
        """Initialize QR code scanner with OpenCV"""
        self.qr_detector = cv2.QRCodeDetector()
    
    def scan_from_base64(self, image_base64: str) -> Dict[str, any]:
        """
        Scan QR code from base64 encoded image
        
        Args:
            image_base64: Base64 encoded image data
            
        Returns:
            Dictionary containing QR code data and parsed contact info
        """
        try:
            # Decode base64 to image
            image_data = base64.b64decode(image_base64)
            image = Image.open(BytesIO(image_data))
            
            # Convert to OpenCV format
            opencv_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
            
            return self.scan_from_image(opencv_image)
            
        except Exception as e:
            return {
                "success": False,
                "error": f"Failed to decode image: {str(e)}",
                "qr_data": None,
                "contact_info": None
            }
    
    def scan_from_image(self, image: np.ndarray) -> Dict[str, any]:
        """
        Scan QR code from OpenCV image
        
        Args:
            image: OpenCV image (numpy array)
            
        Returns:
            Dictionary containing QR code data and parsed contact info
        """
        try:
            # Detect and decode QR code
            data, bbox, _ = self.qr_detector.detectAndDecode(image)
            
            if not data:
                return {
                    "success": False,
                    "error": "No QR code detected in image",
                    "qr_data": None,
                    "contact_info": None
                }
            
            # Parse the QR code data
            contact_info = self._parse_qr_data(data)
            
            return {
                "success": True,
                "qr_data": data,
                "contact_info": contact_info,
                "qr_type": contact_info.get("type", "unknown")
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": f"QR code scanning failed: {str(e)}",
                "qr_data": None,
                "contact_info": None
            }
    
    def _parse_qr_data(self, data: str) -> Dict[str, Optional[str]]:
        """
        Parse QR code data to extract contact information
        Supports multiple formats: WeChat, WhatsApp, vCard, URL
        
        Args:
            data: Raw QR code data string
            
        Returns:
            Parsed contact information
        """
        # Detect QR code type and parse accordingly
        
        # WeChat QR code
        if "weixin://" in data.lower() or "wxid" in data.lower():
            return self._parse_wechat_qr(data)
        
        # WhatsApp QR code
        elif "wa.me" in data.lower() or "whatsapp" in data.lower():
            return self._parse_whatsapp_qr(data)
        
        # Telegram QR code
        elif "t.me" in data.lower() or "telegram" in data.lower():
            return self._parse_telegram_qr(data)
        
        # vCard format (standard contact card)
        elif data.startswith("BEGIN:VCARD"):
            return self._parse_vcard(data)
        
        # Email
        elif data.startswith("mailto:"):
            return self._parse_mailto(data)
        
        # Phone number
        elif data.startswith("tel:"):
            return self._parse_tel(data)
        
        # URL (might contain contact info)
        elif data.startswith("http://") or data.startswith("https://"):
            return self._parse_url(data)
        
        # Plain text (try to extract any contact info)
        else:
            return self._parse_plain_text(data)
    
    def _parse_wechat_qr(self, data: str) -> Dict[str, Optional[str]]:
        """Parse WeChat QR code"""
        contact = {
            "type": "wechat",
            "platform": "WeChat",
            "raw_data": data
        }
        
        # Extract WeChat ID if present
        wechat_id_match = re.search(r'wxid[_=]([a-zA-Z0-9_-]+)', data)
        if wechat_id_match:
            contact["wechat_id"] = wechat_id_match.group(1)
        
        # WeChat QR codes typically need to be scanned in the app
        contact["action"] = "scan_in_wechat_app"
        contact["instructions"] = "Open WeChat and scan this QR code to add contact"
        
        return contact
    
    def _parse_whatsapp_qr(self, data: str) -> Dict[str, Optional[str]]:
        """Parse WhatsApp QR code"""
        contact = {
            "type": "whatsapp",
            "platform": "WhatsApp",
            "raw_data": data
        }
        
        # Extract phone number from wa.me link
        phone_match = re.search(r'wa\.me/(\+?\d+)', data)
        if phone_match:
            contact["phone"] = phone_match.group(1)
        
        # Extract message if present
        message_match = re.search(r'text=([^&]+)', data)
        if message_match:
            contact["message"] = message_match.group(1)
        
        contact["action"] = "open_whatsapp_chat"
        
        return contact
    
    def _parse_telegram_qr(self, data: str) -> Dict[str, Optional[str]]:
        """Parse Telegram QR code"""
        contact = {
            "type": "telegram",
            "platform": "Telegram",
            "raw_data": data
        }
        
        # Extract username from t.me link
        username_match = re.search(r't\.me/([a-zA-Z0-9_]+)', data)
        if username_match:
            contact["username"] = username_match.group(1)
            contact["telegram_link"] = data
        
        contact["action"] = "open_telegram_chat"
        
        return contact
    
    def _parse_vcard(self, data: str) -> Dict[str, Optional[str]]:
        """Parse vCard format (standard contact card)"""
        contact = {
            "type": "vcard",
            "platform": "Standard vCard",
            "raw_data": data
        }
        
        # Extract name
        name_match = re.search(r'FN:(.+)', data)
        if name_match:
            contact["name"] = name_match.group(1).strip()
        
        # Extract organization
        org_match = re.search(r'ORG:(.+)', data)
        if org_match:
            contact["company"] = org_match.group(1).strip()
        
        # Extract title
        title_match = re.search(r'TITLE:(.+)', data)
        if title_match:
            contact["title"] = title_match.group(1).strip()
        
        # Extract phone
        phone_match = re.search(r'TEL[^:]*:(.+)', data)
        if phone_match:
            contact["phone"] = phone_match.group(1).strip()
        
        # Extract email
        email_match = re.search(r'EMAIL[^:]*:(.+)', data)
        if email_match:
            contact["email"] = email_match.group(1).strip()
        
        # Extract URL
        url_match = re.search(r'URL:(.+)', data)
        if url_match:
            contact["website"] = url_match.group(1).strip()
        
        # Extract address
        adr_match = re.search(r'ADR[^:]*:(.+)', data)
        if adr_match:
            contact["address"] = adr_match.group(1).strip()
        
        return contact
    
    def _parse_mailto(self, data: str) -> Dict[str, Optional[str]]:
        """Parse mailto: link"""
        contact = {
            "type": "email",
            "platform": "Email",
            "raw_data": data
        }
        
        email_match = re.search(r'mailto:([^?]+)', data)
        if email_match:
            contact["email"] = email_match.group(1)
        
        return contact
    
    def _parse_tel(self, data: str) -> Dict[str, Optional[str]]:
        """Parse tel: link"""
        contact = {
            "type": "phone",
            "platform": "Phone",
            "raw_data": data
        }
        
        phone_match = re.search(r'tel:(.+)', data)
        if phone_match:
            contact["phone"] = phone_match.group(1)
        
        return contact
    
    def _parse_url(self, data: str) -> Dict[str, Optional[str]]:
        """Parse URL (might contain contact info)"""
        contact = {
            "type": "url",
            "platform": "Web Link",
            "raw_data": data,
            "url": data
        }
        
        # Try to extract any contact info from URL
        email_match = re.search(r'([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})', data)
        if email_match:
            contact["email"] = email_match.group(1)
        
        return contact
    
    def _parse_plain_text(self, data: str) -> Dict[str, Optional[str]]:
        """Parse plain text QR code, try to extract contact info"""
        contact = {
            "type": "text",
            "platform": "Plain Text",
            "raw_data": data
        }
        
        # Try to extract email
        email_match = re.search(r'([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})', data)
        if email_match:
            contact["email"] = email_match.group(1)
        
        # Try to extract phone
        phone_match = re.search(r'(\+?\d[\d\s\-\(\)]{8,})', data)
        if phone_match:
            contact["phone"] = phone_match.group(1).strip()
        
        # Try to extract URL
        url_match = re.search(r'(https?://[^\s]+)', data)
        if url_match:
            contact["url"] = url_match.group(1)
        
        return contact

# Example usage
if __name__ == "__main__":
    scanner = QRCodeScanner()
    
    # Test with sample vCard
    sample_vcard = """BEGIN:VCARD
VERSION:3.0
FN:John Doe
ORG:Acme Corporation
TITLE:Senior Engineer
TEL:+1-555-123-4567
EMAIL:john.doe@acme.com
URL:https://www.acme.com
END:VCARD"""
    
    result = scanner._parse_qr_data(sample_vcard)
    print(json.dumps(result, indent=2))
