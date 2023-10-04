import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { RouterModule, Routes } from '@angular/router';
import { LeftComponent } from './questions/left/left.component';
import { RightComponent } from './questions/right/right.component';
import { UiModule } from '../ui/ui.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'questions', component: QuestionsComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    QuestionsComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
    
  ]
})
export class PagesModule { }
