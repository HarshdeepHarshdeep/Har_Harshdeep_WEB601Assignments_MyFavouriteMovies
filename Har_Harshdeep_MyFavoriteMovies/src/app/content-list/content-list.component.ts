import { Component } from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[];
  titleSearch:string = '';
  titleMatched: boolean | null = null;

  logIdTitle(card: any){
    console.log(`${card.id}, ${card.title}`);
  }
  SearchTitle(){
    console.log(this.titleSearch);
    this.titleMatched = this.contents.some(content => content.title === this.titleSearch);
  }

    constructor(){
        this.contents = [
          {
            id: 1,
            title: "The Avengers",
            description: "Marvel's The Avengers or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
            type: "Action",
            color:"red",
            publisher:"as"

          },

          {id: 2,
            title: "Avengers: Age of Ultron",
            description: "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers.",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
            type: "Action",
            color:"blue",
            publisher:"as"
          },

          {id: 3,
            title: "Avengers: Infinity War",
            description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers.",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
            type: "Action",
            color:"green",
            publisher:"sd"

          },

          {id: 4,
            title: "Thor",
            description: "hor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the fourth film in the Marvel Cinematic Universe (MCU).",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg",
            type: "Drama",
            color:"black",
            publisher:"sf"

          },

          {id: 5,
            title: "Iron Man",
            description: "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby.",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/220px-Iron_Man_%28circa_2018%29.png",
            color:"red",
            publisher:"df"
          },

          {id: 6,
            title: "Spider-Man",
            description: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
            type: "Drama",
            color:"white",
            publisher:"dsg"

          }
        ];
    }

}
