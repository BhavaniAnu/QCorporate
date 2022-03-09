import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
	visibleImages:any = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}
	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id)
	}
}

const IMAGES =[
	{"id": 1, "category":"boats", "caption": "Purple Sunset", "url": "assets/construction-1.jpg"},
	{"id": 2, "category": "boats", "caption": "On the way", "url": "assets/construction-1.jpg"},
	{"id": 3, "category": "boats", "caption": "View from a above", "url": "assets/construction-1.jpg"},
	{"id": 4, "category": "boats", "caption": "Pirate Style", "url": "assets/construction-1.jpg"},
	{"id": 5, "category": "boats", "caption": "Perfect Parking Spot", "url": "assets/construction-1.jpg"},
	{"id": 6, "category": "camping", "caption": "Night Sky", "url": "assets/construction-1.jpg"},
	{"id": 7, "category": "camping", "caption": "View from inside the tent", "url": "assets/construction-1.jpg"},
	{"id": 8, "category": "camping", "caption": "Starting the fire", "url": "assets/construction-1.jpg"},
	{"id": 9, "category": "camping", "caption": "In the woods", "url": "assets/construction-1.jpg"},
	{"id": 10, "category": "camping", "caption": "Mountains", "url": "assets/construction-1.jpg"},
	{"id": 11, "category": "camping", "caption": "Camping is sharing", "url": "assets/construction-1.jpg"},
	{"id": 12, "category": "camping", "caption": "Camping with Style", "url": "assets/construction-1.jpg"},
	{"id": 13, "category": "library", "caption": "My Kind of Wall", "url": "assets/construction-1.jpg"},
	{"id": 14, "category": "library", "caption": "Open Book", "url": "assets/construction-1.jpg"},
	{"id": 15, "category": "library", "caption": "My favorite pillow", "url": "assets/construction-1.jpg"},
	{"id": 16, "category": "library", "caption": "Books all over", "url": "assets/construction-1.jpg"},
	{"id": 17, "category": "library", "caption": "Books all over", "url": "assets/construction-1.jpg"},
]