import { Component, OnInit } from '@angular/core';
import { MoviesService } from './Services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Har_Harshdeep_MyFavoriteMovies';
  defaultImage: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png';
  firstContent: any = {}

  logIdTitle(card: any){
    console.log(`${card.id}, ${card.title}`);
  }

  constructor(private MovieService: MoviesService){}

  ngOnInit(){
    this.MovieService.getContentById(3).subscribe(content => this.firstContent = content);
  }
}
