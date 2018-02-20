import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { Review } from '../review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  @Output() submitReview: EventEmitter<Review> = new EventEmitter;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = "Reviews"
  }

  addReview(review){
    this.submitReview.emit(review);
    // this.movieService.addReview(review, this.movie._id);
  }

}
