import { Component } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  defaultImage: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png';
  firstContent: any = {}
  id: number = 0;

  logIdTitle(card: any){
    console.log(`${card.id}, ${card.title}`);
  }

  constructor(private route:ActivatedRoute,private MovieService: MoviesService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);
      this.MovieService.getContentById(this.id).subscribe(content => this.firstContent = content);
    });
  }
}
