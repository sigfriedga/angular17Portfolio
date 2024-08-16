import { Component } from '@angular/core';
import { MeComponent } from "../me/me.component";
import { CategoriesComponent } from "../categories/categories.component";
import { CareerComponent } from "../career/career.component";
import { LenguagesComponent } from "../lenguages/lenguages.component";
import { LearningComponent } from "../learning/learning.component";
import { EducationComponent } from "../education/education.component";
import { ProjectComponent } from "../project/project.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MeComponent, CategoriesComponent, CareerComponent, LenguagesComponent, LearningComponent, EducationComponent, ProjectComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {



}
