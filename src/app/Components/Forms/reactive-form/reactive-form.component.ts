import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userRegister: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userRegister = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]],
    });
  }
  getName() {
    return this.userRegister.get('name');
  }
  Submit() {
    console.log(this.userRegister.value);
  }
}
