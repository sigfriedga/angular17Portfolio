import { Component, inject } from '@angular/core';
//Material
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
//Imports
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccessService } from '../../services/access.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private accessService = inject(AccessService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder);

  public formSingUp: FormGroup = this.formBuild.group({
    name: ['', [Validators.required,]],
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

  singUp() {
    if(this.formSingUp.invalid) {
      return;
    } 

    const object: User = {
      name: this.formSingUp.value.name,
      email: this.formSingUp.value.name,
      password: this.formSingUp.value.name
    }

    this.accessService.register(object).subscribe({
      next:(data) => {
        if(data.isSuccess) {
          this.router.navigate(['home']);
        } else {
          alert('No se pudo registrar');
        }
      },
      error:(error)=> {
        console.log(error.message);
      }
    })
  }

  comeBack() {
    this.router.navigate([''])
  }
}
