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
  moviesLoaded: boolean = true;
  constructor(
    private movieService: MovieService,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.title="All Movies";
    this.fetchMovies();
    this.moviesLoaded = false;
  }

  fetchMovies(){
    this.movieService.getMovies().subscribe(
      movies => {
        this.movies = movies;
        this.moviesLoaded = true;
      },
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
    this.movieService.searchMovie(movieTitle).subscribe(
      movies =>{
        this.movies = movies;
        console.log(this.movies);
      },
      error=>{
        console.log(error);
      }
    )
  }

  onMoreInfo(movie){
    this.movieService.searchMovieById(movie._id);
    console.log(movie._id);
  }

}
