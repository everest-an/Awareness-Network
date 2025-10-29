# OCR and QR Code Scanning Feature Documentation

## Overview

The Awareness Network includes a comprehensive contact scanning system that combines **AI-powered OCR** for business cards and **QR code detection** for instant contact sharing. This feature enables users to quickly digitize and organize their professional network.

## Supported Formats

### 1. Business Cards (OCR)

The system uses GPT-4 Vision API to extract contact information from business card images with high accuracy.

**Extracted Fields:**
- Name
- Job Title
- Company Name
- Email Address
- Phone Number
- Physical Address
- Website URL

**Additional Features:**
- **Company Analysis**: Automatically analyzes the company to provide industry insights and business context
- **Smart Field Detection**: Handles various business card layouts and designs
- **Multi-language Support**: Works with business cards in different languages

### 2. QR Codes

The system supports multiple QR code formats commonly used for contact sharing:

#### WeChat QR Codes
- Detects WeChat contact QR codes
- Extracts WeChat ID when available
- Provides instructions to add contact in WeChat app

#### WhatsApp QR Codes
- Extracts phone number from `wa.me` links
- Captures pre-filled messages if present
- Enables direct WhatsApp chat initiation

#### Telegram QR Codes
- Extracts Telegram username from `t.me` links
- Provides direct link to start conversation

#### vCard Format
- Standard digital business card format
- Extracts all standard vCard fields:
  - Full Name (FN)
  - Organization (ORG)
  - Title (TITLE)
  - Phone (TEL)
  - Email (EMAIL)
  - URL (URL)
  - Address (ADR)

#### Other Formats
- **Email Links** (`mailto:`)
- **Phone Links** (`tel:`)
- **Plain Text** with contact information
- **URLs** containing contact details

## API Endpoints

### Base URL
```
http://localhost:5000
```

### 1. Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "healthy",
  "service": "OCR Service",
  "version": "1.0.0"
}
```

### 2. Auto-Detect Scan
```http
POST /scan
Content-Type: application/json

{
  "image": "base64_encoded_image_data",
  "scan_type": "auto"  // optional: "auto", "qr", "business_card"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "John Doe",
    "company": "Acme Corporation",
    "title": "Senior Engineer",
    "email": "john.doe@acme.com",
    "phone": "+1-555-123-4567",
    "address": "123 Main St, San Francisco, CA",
    "website": "https://www.acme.com",
    "notes": "Added via business card scan\nIndustry: Technology\nCompany Info: Acme Corporation is a leading technology company...",
    "source": "business_card",
    "platform_info": {
      "wechat_id": null,
      "telegram_link": null,
      "whatsapp_link": null,
      "platform": null
    }
  },
  "metadata": {
    "scan_type": "auto",
    "qr_detected": false,
    "business_card_detected": true,
    "company_analysis": {
      "analysis": "Acme Corporation is a leading technology company...",
      "industry": "Technology"
    }
  }
}
```

### 3. QR Code Only Scan
```http
POST /scan/qr
Content-Type: application/json

{
  "image": "base64_encoded_image_data"
}
```

### 4. Business Card Only Scan
```http
POST /scan/business-card
Content-Type: application/json

{
  "image": "base64_encoded_image_data"
}
```

## Mobile App Integration

### iOS/Android Implementation

The mobile app integrates the scanning feature through the following flow:

1. **Capture Image**
   ```typescript
   // User takes photo or selects from gallery
   const result = await ImagePicker.launchCameraAsync({
     mediaTypes: ['images'],
     quality: 0.8,
   });
   ```

2. **Convert to Base64**
   ```typescript
   const base64 = await FileSystem.readAsStringAsync(uri, {
     encoding: FileSystem.EncodingType.Base64,
   });
   ```

3. **Send to OCR Service**
   ```typescript
   const response = await fetch('http://api.awareness-network.com/ocr/scan', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${userToken}`,
     },
     body: JSON.stringify({
       image: base64,
       scan_type: 'auto',
     }),
   });
   ```

4. **Process Result**
   ```typescript
   const scanResult = await response.json();
   
   if (scanResult.success) {
     // Encrypt contact data before saving
     const encryptedData = encryptData(
       scanResult.data,
       userPublicKey
     );
     
     // Save to backend
     await apiService.createContact({
       encryptedData,
       sourceMemoryId: memoryId,
     });
   }
   ```

## User Experience Flow

### Scanning a Business Card

1. User taps "Scan Business Card" button
2. Camera opens with viewfinder
3. User takes photo of business card
4. Image is processed locally and sent to OCR service
5. Contact information is extracted and displayed for review
6. User can edit fields before saving
7. Contact is encrypted and saved to cloud
8. Company analysis provides additional context

### Scanning a QR Code

1. User taps "Scan QR Code" button
2. Camera opens with QR code detection overlay
3. QR code is automatically detected and scanned
4. Contact information is extracted based on QR type
5. For platform-specific QR codes (WeChat, WhatsApp):
   - Platform is identified
   - Relevant action buttons are shown
   - Instructions are provided
6. Contact is saved with platform information

## Privacy and Security

### End-to-End Encryption

All contact data is encrypted before being stored:

1. **Client-Side Encryption**: Contact information is encrypted on the device using the user's public key
2. **Encrypted Storage**: Only encrypted data is sent to and stored on the server
3. **Zero-Knowledge**: The server never has access to unencrypted contact information

### Data Flow

```
[Camera] → [Local Processing] → [OCR/QR Service] → [Encryption] → [Cloud Storage]
                                                         ↓
                                                  [User's Private Key]
                                                         ↓
                                                  [Decryption on Device]
```

## Advanced Features

### Company Intelligence

When a business card is scanned, the system automatically:

1. Identifies the company name
2. Analyzes the company using AI
3. Determines the industry sector
4. Provides business context
5. Stores this information with the contact

**Example Analysis:**
```json
{
  "company_analysis": {
    "analysis": "Acme Corporation is a leading technology company specializing in cloud infrastructure and enterprise software solutions. They serve Fortune 500 companies and have a strong presence in the SaaS market.",
    "industry": "Technology"
  }
}
```

### Smart Contact Merging

If a contact is scanned multiple times:

1. System detects duplicate based on email/phone
2. Prompts user to merge or keep separate
3. Combines information from multiple sources
4. Maintains history of all scans

### Context Preservation

Each scanned contact includes:

- **Scan Date**: When the contact was added
- **Scan Location**: Where the scan occurred (if permission granted)
- **Source Image**: Original business card or QR code image (encrypted)
- **Meeting Context**: Optional notes about where you met

## Testing

### Test with Sample Data

```python
# Test business card OCR
from ocr.integrated_scanner import IntegratedScanner

scanner = IntegratedScanner()

# Sample vCard QR code
vcard_data = """BEGIN:VCARD
VERSION:3.0
FN:Jane Smith
ORG:Tech Innovations Inc
TITLE:CTO
TEL:+1-555-987-6543
EMAIL:jane.smith@techinnovations.com
URL:https://www.techinnovations.com
END:VCARD"""

result = scanner._parse_qr_data(vcard_data)
print(result)
```

## Deployment

### Running the OCR Service

```bash
# Install dependencies
cd ai-services
pip install -r requirements.txt

# Set environment variables
export OPENAI_API_KEY=your_api_key
export PORT=5000

# Run the service
python src/ocr/api.py
```

### Docker Deployment

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY src/ ./src/

EXPOSE 5000

CMD ["python", "src/ocr/api.py"]
```

## Future Enhancements

1. **Offline OCR**: Add on-device OCR for offline functionality
2. **Batch Scanning**: Scan multiple business cards at once
3. **AR Preview**: Augmented reality overlay showing extracted information
4. **Smart Suggestions**: AI-powered suggestions for follow-up actions
5. **LinkedIn Integration**: Automatically find and link LinkedIn profiles
6. **Business Card Design**: Generate digital business cards from contact info

## Troubleshooting

### Common Issues

**QR Code Not Detected**
- Ensure good lighting
- Hold camera steady
- Make sure QR code is in focus
- Try different angles

**OCR Accuracy Issues**
- Use high-resolution images
- Ensure business card is flat and well-lit
- Avoid glare and shadows
- Clean the camera lens

**API Errors**
- Check OPENAI_API_KEY is set correctly
- Verify network connectivity
- Ensure image is properly base64 encoded
- Check API rate limits

## License

Copyright © 2025 Awareness Network. All rights reserved.
