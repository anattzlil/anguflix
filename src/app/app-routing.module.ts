import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { ExtendedMovieComponent } from './extended-movie/extended-movie.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {path:'', component:HomeComponentComponent},
  {path:'movies/:id', component:ExtendedMovieComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
