import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MeComponent } from './me/me.component';
import { CareerComponent } from './career/career.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainComponent } from './main/main.component';

  export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'main', component: MainComponent },
    { path: 'career', component: CareerComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'me', component: MeComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' } // Redirige al componente Welcome por defecto
  ];
