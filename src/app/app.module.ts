import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListOfCoursesComponent } from './list-of-courses/list-of-courses.component';

import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { SearchFilter } from './pipe/searchFilter.pipe';
import { CategoryFilterPipe } from './pipe/topicFilter.pipe';
import { LevelFilterPipe } from './pipe/levelsFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    FooterAppComponent,
    HomePageComponent,
    ListOfCoursesComponent,
    SearchFilter,
    CategoryFilterPipe,
    LevelFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    // CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
