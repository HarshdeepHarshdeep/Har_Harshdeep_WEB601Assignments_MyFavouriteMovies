import { Component, OnInit } from '@angular/core';
import { Content } from "../helper-files/content-interface";
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] =[];
  defaultImage: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png';
  titleSearch:string = '';
  titleMatched: boolean | null = null;

  logIdTitle(card: any){
    console.log(`${card.id}, ${card.title}`);
  }
  SearchTitle(){
    console.log(this.titleSearch);
    this.titleMatched = this.contents.some(content => content.title === this.titleSearch);
  }

    constructor(private MovieService: MoviesService){
        
    }

    ngOnInit(){
      this.MovieService.getContent().subscribe(content => this.contents = content);
    }

    addContent(newMovie: Content){
      this.MovieService.addContent(newMovie).subscribe(newMovieFromServer => {
        this.contents.push(newMovieFromServer);
        this.contents = [...this.contents];
      })
    }

}
