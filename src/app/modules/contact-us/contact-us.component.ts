import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUSComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  
  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  createContactForm(){
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]], 
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      mobileno: ['', [Validators.required]],
      message: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    console.log('Your form data : ', this.contactForm.value );
    // emailjs.send('service_6ji0048', 'template_er6c1si', this.contactForm.value, 'user_PXF3H4e2PM6sdvC7RUuvr')
    // .then((res:EmailJSResponseStatus) => {
    //    console.log('success', res);
    // }, (err) => {
    //   console.log(err);
    // })
  }

}
