import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularSeventeenPortfolio';

  constructor(private router: Router) { }

  ngOnInit(): void {
    /*if (!localStorage.getItem('welcome')) {
      localStorage.setItem('welcome', 'true');
      this.router.navigate(['/main']);
    } else {
      this.router.navigate(['/welcome']);
    }*/
  }

}
