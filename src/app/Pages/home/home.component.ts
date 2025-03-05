import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  videoUrl: string = 'https://youtu.be/_Xd3ptwuuO4?si=8-wYpLuCt_UprGm8';
  images = [

    {
      heading: '',
      path: 'assets/Carousel/home_b1.JPG',
      para: '',
      alt: 'img home.',
    },
    {
      heading: '',
      path: 'assets/Carousel/home_b2.JPG',
      para: '',
      alt: 'img home.',
    },
    {
      heading: '',
      path: 'assets/Carousel/home_b3.JPG',
      para: '',
      alt: 'img home.',
    },
    
  ];

  enquiry_form: any

  constructor(private fb:FormBuilder){
    this.enquiry_form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]],
      message: ['', [Validators.required]]
    }) as FormGroup

  }

  get firstName(){
    return this.enquiry_form.get('firstName');
  }

  get lastName() {
    return this.enquiry_form.get('lastName');
  }

  get email() {
    return this.enquiry_form.get('email');
  }

  get phone() {
    return this.enquiry_form.get('phone');
  }

  get message() {
    return this.enquiry_form.get('message');
  }

  onSubmit() {
    if (this.enquiry_form.valid) {
      const body = {
        firstName: this.firstName.value,  // Access the value of the form control
        lastName: this.lastName.value,
        email: this.email.value,
        phone: this.phone.value
      }
      console.log('Form Submitted!', body);
      
    } else {
      this.enquiry_form.markAllAsTouched(); // Marks all fields to show validation errors
    }
  }
}


