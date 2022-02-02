import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUSComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.createContactForm();
  }

  get f() { return this.contactForm.controls; }

  createContactForm(){
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]], 
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      mobileno: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],
      message: ['', [Validators.maxLength(300)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('Your form data : ', this.contactForm.value );
    if (this.contactForm.invalid) {
      return;
    }
    // emailjs.send('service_6ji0048', 'template_er6c1si', this.contactForm.value, 'user_PXF3H4e2PM6sdvC7RUuvr')
    // .then((res:EmailJSResponseStatus) => {
    //    console.log('success', res);
    // this.submitted = false;
    // this.contactForm.reset();
    // }, (err) => {
    //   console.log(err);
    // })
    this.contactForm.reset();
    this.submitted = false;
  }

}
