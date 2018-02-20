import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title: string;
  @Input() chosen: boolean = false;
  @Input() movie: Movie = new Movie();
  @Output() movieAdded: EventEmitter<Movie> = new EventEmitter();
  @Output() movieDeleted: EventEmitter<Movie> = new EventEmitter();
  @Output() moreInfo: EventEmitter<Movie> = new EventEmitter();
  
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title="All Movies"
  }

  onPurchase(){
    this.movieAdded.emit(this.movie);
  }

  onDelete(){
    this.movieDeleted.emit(this.movie);
  }

  onClickMore(){
    this.moreInfo.emit(this.movie);
  }

}

