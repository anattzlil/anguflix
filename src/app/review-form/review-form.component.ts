import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from '../review'

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  review: Review = new Review;
  @Output() submitReview: EventEmitter<Review> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  onClick(){
    console.log(this.review);
    this.submitReview.emit(this.review);
    this.review = new Review;

  }
}
