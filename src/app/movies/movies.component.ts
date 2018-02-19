import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title: string;
  movies: any[];
  movieTitle: string = "";
  searchText: string; 
  constructor(
    private movieService: MovieService,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.title="All Movies";
    this.fetchMovies();
  }

  fetchMovies(){
    this.movieService.getMovies().subscribe(
      movies => this.movies = movies,
      error => {
        console.log(error);
  });
}

  addMovie(movie){
    console.log('clicked');
    console.log(movie);
    this.usersService.addMovie(movie);
  }

  findMovie(movieTitle){
    this.searchText = movieTitle;
  }

}
