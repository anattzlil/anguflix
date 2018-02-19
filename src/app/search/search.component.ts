import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() titleChanged : EventEmitter<string> = new EventEmitter();
movieTitle: string = "";
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onInput(){
    this.titleChanged.emit(this.movieTitle);
  }
}
