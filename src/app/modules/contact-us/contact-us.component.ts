import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUSComponent implements OnInit {
  contactForm!: FormGroup;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 27.697506332163815;
  lng = 85.30919518227252;

  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  
  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      from_name: [''],  
      to_name: [''],
      message: [''],
      // from_email: [''],
      to_email: ['']
    });
  }

  onSubmit() {
      console.log('Your form data : ', this.contactForm.value );
      emailjs.send('service_6ji0048', 'template_er6c1si', this.contactForm.value, 'user_PXF3H4e2PM6sdvC7RUuvr')
      .then((res:EmailJSResponseStatus) => {
         console.log('success', res);
      }, (err) => {
        console.log(err);
      })
  }

}
