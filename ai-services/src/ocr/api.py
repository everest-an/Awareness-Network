"""
OCR Service API
Flask API for business card and QR code scanning
"""

from flask import Flask, request, jsonify
import os
import sys

# Add parent directory to path for imports
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from ocr.integrated_scanner import IntegratedScanner

app = Flask(__name__)
scanner = IntegratedScanner()

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "service": "OCR Service",
        "version": "1.0.0"
    })

@app.route('/scan', methods=['POST'])
def scan_image():
    """
    Scan an image for contact information
    
    Request body:
    {
        "image": "base64_encoded_image",
        "scan_type": "auto|qr|business_card"  // optional, defaults to "auto"
    }
    
    Response:
    {
        "success": true,
        "contact_info": {...},
        "metadata": {...}
    }
    """
    try:
        data = request.get_json()
        
        if not data or 'image' not in data:
            return jsonify({
                "success": False,
                "error": "Missing 'image' field in request body"
            }), 400
        
        image_base64 = data['image']
        scan_type = data.get('scan_type', 'auto')
        
        # Validate scan_type
        if scan_type not in ['auto', 'qr', 'business_card']:
            return jsonify({
                "success": False,
                "error": "Invalid scan_type. Must be 'auto', 'qr', or 'business_card'"
            }), 400
        
        # Perform scan
        result = scanner.scan_image(image_base64, scan_type)
        
        # Create contact object
        contact = scanner.create_contact_from_scan(result)
        
        return jsonify(contact)
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"Internal server error: {str(e)}"
        }), 500

@app.route('/scan/qr', methods=['POST'])
def scan_qr_only():
    """
    Scan QR code only
    
    Request body:
    {
        "image": "base64_encoded_image"
    }
    """
    try:
        data = request.get_json()
        
        if not data or 'image' not in data:
            return jsonify({
                "success": False,
                "error": "Missing 'image' field in request body"
            }), 400
        
        result = scanner.scan_image(data['image'], scan_type='qr')
        contact = scanner.create_contact_from_scan(result)
        
        return jsonify(contact)
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"Internal server error: {str(e)}"
        }), 500

@app.route('/scan/business-card', methods=['POST'])
def scan_business_card_only():
    """
    Scan business card only (OCR)
    
    Request body:
    {
        "image": "base64_encoded_image"
    }
    """
    try:
        data = request.get_json()
        
        if not data or 'image' not in data:
            return jsonify({
                "success": False,
                "error": "Missing 'image' field in request body"
            }), 400
        
        result = scanner.scan_image(data['image'], scan_type='business_card')
        contact = scanner.create_contact_from_scan(result)
        
        return jsonify(contact)
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"Internal server error: {str(e)}"
        }), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
