import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.scss'
})
export class CreateProfileComponent {
  createProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createProfileForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.createProfileForm.invalid) {
      return;
    }

    // Aquí puedes añadir lógica para crear el perfil
    console.log('Perfil creado', this.createProfileForm.value);
  }

}
