import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-extended-movie',
  templateUrl: './extended-movie.component.html',
  styleUrls: ['./extended-movie.component.css']
})
export class ExtendedMovieComponent implements OnInit {
movie: Movie = new Movie();
chosen: boolean = false;
  constructor(private movieService: MovieService, private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.movieService.searchMovieById(params.id).subscribe(
       (movie)=>{
       console.log(movie);
       this.movie = movie;
       }
     );
    });
  }

onPurchase(){
  this.usersService.addMovie(this.movie);
  this.chosen = true;
}

onDelete(){
  this.usersService.deleteUserMovies(this.movie)
  this.chosen = false;
}

addReview(review){
  console.log(this.movie._id);
  this.movieService.addReview(review, this.movie._id).subscribe(
    data=>this.movie = data,
    error=> console.log(error)
  );
};

}
