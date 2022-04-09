import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUSComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createContactForm();
  }

  get f() {
    return this.contactForm.controls;
  }

  createContactForm() {
    const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    this.contactForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      mobileno: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(8),
        ],
      ],
      message: ['', [Validators.maxLength(300)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    emailjs
      .send(
        'service_9j761pl',
        'template_7zezfgf',
        this.contactForm.value,
        '7tJdX03Eeib6byJ6E'
      )
      .then(
        (res: EmailJSResponseStatus) => {
          this.submitted = false;
          this.contactForm.reset();
        },
        (err) => {
          console.log(err);
        }
      );
    this.contactForm.reset();
    this.submitted = false;
  }
}
