"""
Integrated OCR Scanner
Combines business card OCR and QR code scanning into a single service
"""

import json
from typing import Dict, Optional
from .processor import BusinessCardOCR
from .qr_scanner import QRCodeScanner

class IntegratedScanner:
    def __init__(self):
        """Initialize both OCR and QR code scanners"""
        self.business_card_ocr = BusinessCardOCR()
        self.qr_scanner = QRCodeScanner()
    
    def scan_image(self, image_base64: str, scan_type: str = "auto") -> Dict[str, any]:
        """
        Scan an image for contact information
        Automatically detects QR codes and business cards
        
        Args:
            image_base64: Base64 encoded image data
            scan_type: Type of scan - "auto", "qr", "business_card"
            
        Returns:
            Dictionary containing all extracted contact information
        """
        result = {
            "scan_type": scan_type,
            "qr_detected": False,
            "business_card_detected": False,
            "contact_info": {},
            "raw_data": {}
        }
        
        try:
            # First, try to detect QR code
            if scan_type in ["auto", "qr"]:
                qr_result = self.qr_scanner.scan_from_base64(image_base64)
                
                if qr_result.get("success"):
                    result["qr_detected"] = True
                    result["contact_info"].update(qr_result.get("contact_info", {}))
                    result["raw_data"]["qr"] = qr_result
                    
                    # If QR code found and scan_type is not auto, return immediately
                    if scan_type == "qr":
                        return result
            
            # If no QR code or scan_type is auto/business_card, try OCR
            if scan_type in ["auto", "business_card"]:
                ocr_result = self.business_card_ocr.extract_contact_info(image_base64)
                
                if ocr_result and not ocr_result.get("error"):
                    result["business_card_detected"] = True
                    
                    # Merge OCR results with QR results (OCR takes precedence for overlapping fields)
                    for key, value in ocr_result.items():
                        if value and key != "company_analysis":
                            result["contact_info"][key] = value
                    
                    # Add company analysis separately
                    if "company_analysis" in ocr_result:
                        result["contact_info"]["company_analysis"] = ocr_result["company_analysis"]
                    
                    result["raw_data"]["ocr"] = ocr_result
            
            # Consolidate contact information
            result["contact_info"] = self._consolidate_contact_info(result["contact_info"])
            
            # Determine success
            result["success"] = result["qr_detected"] or result["business_card_detected"]
            
            if not result["success"]:
                result["error"] = "No QR code or business card detected in image"
            
            return result
            
        except Exception as e:
            return {
                "success": False,
                "error": f"Scanning failed: {str(e)}",
                "scan_type": scan_type,
                "qr_detected": False,
                "business_card_detected": False,
                "contact_info": {},
                "raw_data": {}
            }
    
    def _consolidate_contact_info(self, contact_info: Dict) -> Dict:
        """
        Consolidate and clean up contact information
        Remove None values and organize data
        """
        consolidated = {}
        
        # Standard fields
        standard_fields = [
            "name", "title", "company", "email", "phone", 
            "address", "website", "wechat_id", "telegram_link",
            "whatsapp_link", "platform", "type"
        ]
        
        for field in standard_fields:
            if field in contact_info and contact_info[field]:
                consolidated[field] = contact_info[field]
        
        # Add company analysis if available
        if "company_analysis" in contact_info:
            consolidated["company_analysis"] = contact_info["company_analysis"]
        
        # Add any platform-specific data
        if "action" in contact_info:
            consolidated["suggested_action"] = contact_info["action"]
        
        if "instructions" in contact_info:
            consolidated["instructions"] = contact_info["instructions"]
        
        return consolidated
    
    def create_contact_from_scan(self, scan_result: Dict) -> Dict:
        """
        Create a standardized contact object from scan result
        Ready to be saved to the database
        
        Args:
            scan_result: Result from scan_image()
            
        Returns:
            Standardized contact object
        """
        if not scan_result.get("success"):
            return {
                "success": False,
                "error": scan_result.get("error", "Scan failed")
            }
        
        contact_info = scan_result.get("contact_info", {})
        
        contact = {
            "success": True,
            "data": {
                "name": contact_info.get("name", "Unknown Contact"),
                "company": contact_info.get("company"),
                "title": contact_info.get("title"),
                "email": contact_info.get("email"),
                "phone": contact_info.get("phone"),
                "address": contact_info.get("address"),
                "website": contact_info.get("website"),
                "notes": self._generate_notes(contact_info, scan_result),
                "source": "qr_code" if scan_result.get("qr_detected") else "business_card",
                "platform_info": {
                    "wechat_id": contact_info.get("wechat_id"),
                    "telegram_link": contact_info.get("telegram_link"),
                    "whatsapp_link": contact_info.get("whatsapp_link"),
                    "platform": contact_info.get("platform")
                }
            },
            "metadata": {
                "scan_type": scan_result.get("scan_type"),
                "qr_detected": scan_result.get("qr_detected"),
                "business_card_detected": scan_result.get("business_card_detected"),
                "company_analysis": contact_info.get("company_analysis")
            }
        }
        
        return contact
    
    def _generate_notes(self, contact_info: Dict, scan_result: Dict) -> str:
        """Generate notes for the contact based on scan results"""
        notes = []
        
        # Add scan source
        if scan_result.get("qr_detected"):
            notes.append("Added via QR code scan")
            if contact_info.get("platform"):
                notes.append(f"Platform: {contact_info['platform']}")
        
        if scan_result.get("business_card_detected"):
            notes.append("Added via business card scan")
        
        # Add company analysis if available
        if contact_info.get("company_analysis"):
            analysis = contact_info["company_analysis"]
            if isinstance(analysis, dict):
                if analysis.get("industry"):
                    notes.append(f"Industry: {analysis['industry']}")
                if analysis.get("analysis"):
                    notes.append(f"Company Info: {analysis['analysis']}")
        
        # Add suggested action if available
        if contact_info.get("instructions"):
            notes.append(contact_info["instructions"])
        
        return "\n".join(notes)

# Example usage
if __name__ == "__main__":
    scanner = IntegratedScanner()
    
    # Example: Scan an image (would need actual base64 image data)
    # result = scanner.scan_image(image_base64_data)
    # contact = scanner.create_contact_from_scan(result)
    # print(json.dumps(contact, indent=2))
    
    print("Integrated Scanner initialized")
    print("Supports: Business Cards, QR Codes (WeChat, WhatsApp, Telegram, vCard)")
