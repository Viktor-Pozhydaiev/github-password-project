import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pattern-validate',
  templateUrl: './pattern-validate.component.html',
  styleUrls: ['./pattern-validate.component.css'],
})
export class PatternValidateComponent {
  constructor(private fb: FormBuilder) {}

  form1 = this.fb.group({
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
    password: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ],
    ],
  });

  onSubmit() {
    if (this.form1.valid) {
      console.log('Form Submitted');
    } else {
      console.error('Form values are invalid.');
    }
  }
}
