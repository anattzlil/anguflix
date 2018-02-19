import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';

@Injectable()
export class UsersService {
  user: User = new User;
  userMovies: Movie[]= new Array<Movie>();

  constructor() { }
  getUser(){
    return this.user;
  }
  
  getUserMovies(){
    return this.userMovies;
  }
  
  addMovie(chosenMovie){
    if (this.userMovies.find((movie)=>movie._id == chosenMovie._id)){
      alert('the movie has already been chosen!');
    }else{
    this.userMovies.push(chosenMovie);
    this.user.budget -= chosenMovie.price;
    }
  }

deleteUserMovies(movie){
  this.userMovies.splice(this.userMovies.indexOf(movie), 1);
  this.user.budget +=movie.price;
}
}
