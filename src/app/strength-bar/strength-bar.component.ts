import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.css'],
})
export class StrengthBarComponent {
  constructor(private fb: FormBuilder) {}
  passwordIsValid = false;
  form2 = this.fb.group({
    fullname: [
      null,
      [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/),
        Validators.minLength(3),
      ],
    ],
    email: [
      null,
      [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ],
    ],
    password: [null, [Validators.required]],
  });

  onSubmit() {
    if (this.form2.valid) {
      console.log('Form Submitted');
    } else {
      console.error('Form values are invalid.');
    }
  }

  passwordValid(event: boolean) {
    this.passwordIsValid = event;
  }
}
