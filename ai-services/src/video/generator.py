"""
AI-Powered Video Montage Generator
Creates video memories from a collection of photos using the Shotstack API
"""

import os
import requests
import json
from typing import List, Dict, Optional

SHOTSTACK_API_KEY = os.environ.get("SHOTSTACK_API_KEY")
SHOTSTACK_API_URL = "https://api.shotstack.io/v1"

class VideoGenerator:
    def __init__(self):
        """Initialize the video generator with Shotstack API key"""
        if not SHOTSTACK_API_KEY:
            raise ValueError("SHOTSTACK_API_KEY environment variable not set")
        
        self.headers = {
            "Content-Type": "application/json",
            "x-api-key": SHOTSTACK_API_KEY
        }
    
    def create_video_montage(self, image_urls: List[str], title: str, audio_url: Optional[str] = None) -> Dict[str, any]:
        """
        Create a video montage from a list of image URLs
        
        Args:
            image_urls: List of public URLs for the images
            title: Title for the video
            audio_url: Optional URL for background music
            
        Returns:
            Dictionary with the render ID and status URL
        """
        try:
            # Create timeline and tracks
            timeline = self._create_timeline(image_urls, title, audio_url)
            
            # Create the edit payload
            edit = {
                "timeline": timeline,
                "output": {
                    "format": "mp4",
                    "resolution": "hd"
                }
            }
            
            # Send the request to Shotstack API
            response = requests.post(f"{SHOTSTACK_API_URL}/render", headers=self.headers, data=json.dumps(edit))
            response.raise_for_status()
            
            render_data = response.json()
            
            return {
                "success": True,
                "render_id": render_data["response"]["id"],
                "status_url": f"{SHOTSTACK_API_URL}/render/{render_data['response']['id']}",
                "message": "Video rendering started successfully"
            }
            
        except requests.exceptions.RequestException as e:
            return {
                "success": False,
                "error": f"Shotstack API error: {e.response.text if e.response else str(e)}"
            }
        except Exception as e:
            return {
                "success": False,
                "error": f"An unexpected error occurred: {str(e)}"
            }
    
    def _create_timeline(self, image_urls: List[str], title: str, audio_url: Optional[str]) -> Dict:
        """Create the Shotstack timeline object"""
        # Create clips from image URLs
        clips = []
        start_time = 1.0  # Start after title
        clip_duration = 2.5
        
        for i, url in enumerate(image_urls):
            clips.append({
                "asset": {
                    "type": "image",
                    "src": url
                },
                "start": start_time,
                "length": clip_duration,
                "effect": "zoomIn" if i % 2 == 0 else "zoomOut"
            })
            start_time += clip_duration
        
        # Create title clip
        title_clip = {
            "asset": {
                "type": "title",
                "text": title,
                "style": "minimal"
            },
            "start": 0,
            "length": 2.0,
            "effect": "fadeIn"
        }
        
        # Create tracks
        video_track = {
            "clips": [title_clip] + clips
        }
        
        tracks = [video_track]
        
        # Add audio track if provided
        soundtrack = None
        if audio_url:
            soundtrack = {
                "asset": {
                    "type": "audio",
                    "src": audio_url
                },
                "effect": "fadeInFadeOut",
                "volume": 0.7
            }
        
        # Create timeline
        timeline = {
            "background": "#000000",
            "tracks": tracks
        }
        
        if soundtrack:
            timeline["soundtrack"] = soundtrack
        
        return timeline
    
    def get_render_status(self, render_id: str) -> Dict[str, any]:
        """
        Get the status of a video render job
        
        Args:
            render_id: The ID of the render job
            
        Returns:
            Dictionary with render status and video URL if completed
        """
        try:
            url = f"{SHOTSTACK_API_URL}/render/{render_id}"
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            
            status_data = response.json()["response"]
            
            result = {
                "success": True,
                "render_id": status_data["id"],
                "status": status_data["status"]
            }
            
            if status_data["status"] == "done":
                result["video_url"] = status_data["url"]
                result["message"] = "Video rendering completed"
            elif status_data["status"] == "failed":
                result["success"] = False,
                result["error"] = status_data["error"]
            else:
                result["message"] = "Video is still rendering"
            
            return result
            
        except requests.exceptions.RequestException as e:
            return {
                "success": False,
                "error": f"Shotstack API error: {e.response.text if e.response else str(e)}"
            }

# Example usage
if __name__ == "__main__":
    generator = VideoGenerator()
    
    # Example: Create a video
    # image_urls = [
    #     "https://example.com/image1.jpg",
    #     "https://example.com/image2.jpg",
    #     "https://example.com/image3.jpg"
    # ]
    # result = generator.create_video_montage(image_urls, "My Awesome Trip")
    # print(json.dumps(result, indent=2))
    
    # Example: Check render status
    # if result["success"]:
    #     render_id = result["render_id"]
    #     status = generator.get_render_status(render_id)
    #     print(json.dumps(status, indent=2))
    
    print("Video Generator initialized")
    print("Requires SHOTSTACK_API_KEY to be set")
