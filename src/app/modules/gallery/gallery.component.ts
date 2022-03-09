import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {
  @Input() filterBy?: any = 'all'
	visibleImages: any[] = [];
  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
