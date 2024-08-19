import { Component, inject } from '@angular/core';
//Material
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {


}
