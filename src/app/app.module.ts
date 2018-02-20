import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { UsersService } from './users.service';
import { FilterPipe} from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { ChosenMoviesComponent } from './chosen-movies/chosen-movies.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExtendedMovieComponent } from './extended-movie/extended-movie.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    ChosenMoviesComponent,
    SearchComponent,
    FilterPipe,
    ExtendedMovieComponent,
    HomeComponentComponent,
    ReviewListComponent,
    ReviewComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MovieService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
