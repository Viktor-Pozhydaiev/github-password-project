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
  form = this.fb.group({
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

  passwordValid(event: boolean) {
    this.passwordIsValid = event;
  }
}
