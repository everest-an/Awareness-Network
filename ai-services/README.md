# Awareness Network AI Services

Python-based AI processing services for OCR, video generation, and knowledge graph construction.

## Features

- **Business Card OCR**: Extract contact information from business card images
- **Video Montage Generation**: Create AI-powered video memories from photos
- **Knowledge Graph**: Build connections between memories, contacts, and events

## Technology Stack

- **Python 3.11+**
- **OpenCV**: Image processing
- **Tesseract/Cloud OCR**: Text extraction
- **spaCy**: Natural language processing
- **Shotstack API**: Video generation

## Installation

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

## Services

### OCR Service

Processes business cards and documents to extract structured information.

```bash
python src/ocr/processor.py
```

### Video Service

Generates video montages from photo collections.

```bash
python src/video/generator.py
```

### Knowledge Service

Analyzes memories to build knowledge graphs and connections.

```bash
python src/knowledge/analyzer.py
```

## Configuration

Create a `.env` file:

```
OPENAI_API_KEY=your_api_key
SHOTSTACK_API_KEY=your_api_key
DATABASE_URL=postgresql://user:pass@localhost/awareness_network
```

## License

Copyright © 2025 Awareness Network. All rights reserved.
