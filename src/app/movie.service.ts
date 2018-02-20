import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Review } from './review';


// const MOVIES = [
//   {id:0,img:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg",title:"Tarzan", price:3, year:1999, descrShort:"The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan."},
//   {id:1,img:"http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg",title:"The Lion King", year:1994,price:2, descrShort:"A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days."},
//   {id:2,img:"http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200",price:3,title:"Beauty and the Beast", year:1991, descrShort:"A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love."},
//   {id:3,img:"http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg",title:"The Sword in the Stone",price:6, year:1963, descrShort:"Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom."},
//   {id:4,img:"http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg",title: "Beauty and the Beast", year: 2016,price:3, descrShort:"Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad."},
//   {id:5,img:"https://i0.wp.com/images6.fanpop.com/image/photos/33000000/ARIEL-the-little-mermaid-33081334-1920-1200.jpg",title: "The Little Mermaid", year: 1989,price:3, descrShort:"A mermaid princess makes a Faustian bargain with an unscrupulous sea-witch in order to meet a human prince on land."}
// ];

@Injectable()
export class MovieService {

  // The movies available for purchase
user: User = new User;
  // The movies in the user's personal collection
userMovies: Movie[]= new Array<Movie>();
  // The budget
  constructor(private http: HttpClient) { }

getMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies');
}

searchMovie(movieTitle): Observable<Movie[]>{
  const params = new HttpParams()
    .set('title', movieTitle)
  return this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies', {params});
}

searchMovieById(id){
  return this.http.get<Movie>('https://anguflix-api.herokuapp.com/api/movies/' + id );
}

addReview(review, id):Observable<Review>{
  return this.http.post<Review>('https://anguflix-api.herokuapp.com/api/movies/'+id+'/reviews', review)
}

}
