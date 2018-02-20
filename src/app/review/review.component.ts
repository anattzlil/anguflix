import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
@Input() review: any[];
  constructor() { }

  ngOnInit() {
    console.log(this.review)
  }

}
