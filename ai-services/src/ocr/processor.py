"""
Business Card OCR Processor
Extracts contact information from business card images using AI
"""

import os
import re
import json
from typing import Dict, Optional
from openai import OpenAI

class BusinessCardOCR:
    def __init__(self):
        """Initialize the OCR processor with OpenAI client"""
        self.client = OpenAI()
    
    def extract_contact_info(self, image_base64: str) -> Dict[str, Optional[str]]:
        """
        Extract contact information from a business card image
        
        Args:
            image_base64: Base64 encoded image data
            
        Returns:
            Dictionary containing extracted contact information
        """
        try:
            # Use GPT-4 Vision to analyze the business card
            response = self.client.chat.completions.create(
                model="gpt-4.1-mini",
                messages=[
                    {
                        "role": "system",
                        "content": "You are an expert at extracting contact information from business cards. Extract all available information and return it as a JSON object."
                    },
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": "Extract the following information from this business card: name, title, company, email, phone, address, website. Return as JSON."
                            },
                            {
                                "type": "image_url",
                                "image_url": {
                                    "url": f"data:image/jpeg;base64,{image_base64}"
                                }
                            }
                        ]
                    }
                ],
                max_tokens=500
            )
            
            # Parse the response
            content = response.choices[0].message.content
            
            # Try to extract JSON from the response
            contact_info = self._parse_contact_info(content)
            
            # Enrich with company analysis
            if contact_info.get('company'):
                contact_info['company_analysis'] = self._analyze_company(contact_info['company'])
            
            return contact_info
            
        except Exception as e:
            print(f"Error processing business card: {e}")
            return {
                "error": str(e),
                "name": None,
                "title": None,
                "company": None,
                "email": None,
                "phone": None,
                "address": None,
                "website": None
            }
    
    def _parse_contact_info(self, content: str) -> Dict[str, Optional[str]]:
        """Parse contact information from AI response"""
        try:
            # Try to extract JSON
            json_match = re.search(r'\{.*\}', content, re.DOTALL)
            if json_match:
                return json.loads(json_match.group())
            
            # Fallback: parse manually
            return {
                "name": self._extract_field(content, "name"),
                "title": self._extract_field(content, "title"),
                "company": self._extract_field(content, "company"),
                "email": self._extract_field(content, "email"),
                "phone": self._extract_field(content, "phone"),
                "address": self._extract_field(content, "address"),
                "website": self._extract_field(content, "website")
            }
        except:
            return {}
    
    def _extract_field(self, text: str, field: str) -> Optional[str]:
        """Extract a specific field from text"""
        pattern = rf'"{field}":\s*"([^"]*)"'
        match = re.search(pattern, text, re.IGNORECASE)
        return match.group(1) if match else None
    
    def _analyze_company(self, company_name: str) -> Dict[str, str]:
        """
        Analyze company to provide context about business type
        
        Args:
            company_name: Name of the company
            
        Returns:
            Dictionary with company analysis
        """
        try:
            response = self.client.chat.completions.create(
                model="gpt-4.1-mini",
                messages=[
                    {
                        "role": "system",
                        "content": "You are a business analyst. Provide brief insights about companies."
                    },
                    {
                        "role": "user",
                        "content": f"Provide a brief analysis of {company_name}: What industry are they in? What do they do? Keep it under 100 words."
                    }
                ],
                max_tokens=150
            )
            
            return {
                "analysis": response.choices[0].message.content,
                "industry": self._extract_industry(response.choices[0].message.content)
            }
        except:
            return {
                "analysis": "Unable to analyze company",
                "industry": "Unknown"
            }
    
    def _extract_industry(self, analysis: str) -> str:
        """Extract industry from company analysis"""
        # Simple keyword matching for industry detection
        industries = {
            "technology": ["tech", "software", "IT", "digital", "AI"],
            "finance": ["bank", "finance", "investment", "capital"],
            "healthcare": ["health", "medical", "pharma", "hospital"],
            "retail": ["retail", "store", "shop", "commerce"],
            "manufacturing": ["manufacturing", "production", "factory"],
            "consulting": ["consulting", "advisory", "services"]
        }
        
        analysis_lower = analysis.lower()
        for industry, keywords in industries.items():
            if any(keyword.lower() in analysis_lower for keyword in keywords):
                return industry
        
        return "General Business"

# Example usage
if __name__ == "__main__":
    processor = BusinessCardOCR()
    
    # Example: Process a business card
    # image_data = "base64_encoded_image_here"
    # result = processor.extract_contact_info(image_data)
    # print(json.dumps(result, indent=2))
    
    print("Business Card OCR Processor initialized")
