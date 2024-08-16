import { Component, inject } from '@angular/core';
import { AccessService } from '../../services/access.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../interfaces/Login';
//Material
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private accessService = inject(AccessService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder);

  public formLogin: FormGroup = this.formBuild.group({
    email: ['', [
      Validators.required,
      /*Validators.email, 
      Validators.minLength(3)*/
    ]],
    password: ['', [
      Validators.required, 
      /*Validators.minLength(6),
      Validators.pattern(/[A-Z]/), // al menos una letra mayúscula
      Validators.pattern(/[a-z]/), // al menos una letra minúscula
      Validators.pattern(/[0-9]/), // al menos un número
      Validators.pattern(/[@$!%*?&#]/) // al menos un carácter especial*/
    ]]
  });

  logIn() {
    if(this.formLogin.invalid) {
      return;
    }

    const object:Login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password,
    }

    this.accessService.login(object).subscribe({
      next:(data)=> {
        if(data.isSuccess) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['home']);
        } else {
          alert('Credenciales son Incorrectas');
        }
      },
      error:(error)=> {
        console.log(error.message);
      }
    })
  }

  singIn() {
    this.router.navigate(['register']);
  }
}
