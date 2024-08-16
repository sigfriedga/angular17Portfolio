import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {
  constructor(private router: Router) { }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

}
