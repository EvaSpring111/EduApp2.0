import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ListOfCoursesComponent } from './list-of-courses/list-of-courses.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  // ,  loadChildren: () => import('./list-of-courses/courses.module').then(m => m.CoursesModule)
  { path: 'courses', component: ListOfCoursesComponent
},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
