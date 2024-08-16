import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MeComponent } from './me/me.component';
import { CareerComponent } from './career/career.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainComponent } from './main/main.component';
import { EducationComponent } from './education/education.component';
import { LearningComponent } from './learning/learning.component';
import { LenguagesComponent } from './lenguages/lenguages.component';
import { ProjectComponent } from './project/project.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

  export const routes: Routes = [
    /*{ path: '', component: WelcomeComponent },*/
    { path: '', component: LoginComponent},
    { path: 'home', component: MainComponent },
    { path: 'register', component: RegisterComponent },

    /*{ path: 'main', component: MainComponent },
    { path: 'me', component: MeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'career', component: CareerComponent },
    { path: 'education', component: EducationComponent },
    { path: 'learning', component: LearningComponent },
    { path: 'lenguages', component: LenguagesComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create-profile', component: CreateProfileComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Redirige al componente Welcome por defecto
    { path: '**', redirectTo: '/main' } // Ruta para manejo de errores*/
  ];
