import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUSComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  
  ngOnInit(): void {
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: ['']
    });
  }

  onSubmit() {
    // console.log(e, e.target as HTMLFormElement);
    
      // e.preventDefault();
      console.log('Your form data : ', this.contactForm.value );
      emailjs.send('service_6ji0048', 'template_er6c1si', this.contactForm.value, 'user_PXF3H4e2PM6sdvC7RUuvr')
      .then((res:EmailJSResponseStatus) => {
         console.log('success', res);
      }, (err) => {
        console.log(err);
      })
  }

}
