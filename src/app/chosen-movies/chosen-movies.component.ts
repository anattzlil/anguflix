import { Component, OnInit} from '@angular/core';
import { MovieService } from '../movie.service';
import { UsersService } from '../users.service';
import { Movie } from '../movie';
import { User } from '../user';

@Component({
  selector: 'app-chosen-movies',
  templateUrl: './chosen-movies.component.html',
  styleUrls: ['./chosen-movies.component.css']
})
export class ChosenMoviesComponent implements OnInit {
  user: User = new User;
  movies: any[];
  title: string;
  constructor(private movieService: MovieService, private usersService: UsersService) { }

  ngOnInit() {
    this.title = 'My Collection';
    this.movies = this.usersService.getUserMovies();
    this.user = this.usersService.getUser();
  }

  deleteMovie(movie){
    this.usersService.deleteUserMovies(movie);
  }

}
