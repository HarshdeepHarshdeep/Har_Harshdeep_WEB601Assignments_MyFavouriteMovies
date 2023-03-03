import { Component } from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[];
  defaultImage: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png';
  titleSearch:string = '';
  titleMatched: boolean | null = null;
  failedMessage: string = '';

  logIdTitle(card: any){
    console.log(`${card.id}, ${card.title}`);
  }
  SearchTitle(){
    console.log(this.titleSearch);
    this.titleMatched = this.contents.some(content => content.title === this.titleSearch);
  }

  addContent(newInfo: any){
    const promise = new Promise((resolve, reject) => {
      this.contents.push(newInfo);
      this.contents = [...this.contents]
      resolve(newInfo.title);
    });

    promise.then(title => {
      console.log(`Information added successfully, ${title}`);
      this.failedMessage = '';
    }).catch(error => {
      this.failedMessage = "Information not added";
    });
  }

    constructor(){
        this.contents = [
          {
            id: 1,
            title: "The Avengers",
            description: "Marvel's The Avengers or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
            creator: "Marvel",
            type: "Action",
            tags: ['avenger', 'marvel'],
            color:"red",
            publisher:"as"

          },

          {id: 2,
            title: "Avengers: Age of Ultron",
            description: "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers.",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
            tags: ['avenger', 'ultron'],
            color:"blue",
            publisher:"as"
          },

          {id: 3,
            title: "Avengers: Infinity War",
            description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers.",
            creator: "Marvel",
            type: "Action",
            tags: ['war', 'all'],
            color:"green",
            publisher:"sd"

          },

          {id: 4,
            title: "Thor",
            description: "hor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the fourth film in the Marvel Cinematic Universe (MCU).",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg",
            type: "Drama",
            tags: ['thunder', 'thor'],
            color:"black",
            publisher:"sf"

          },

          {id: 5,
            title: "Iron Man",
            description: "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby.",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/220px-Iron_Man_%28circa_2018%29.png",
            type: "Drama",
            tags: ['iron', 'man'],
            color:"red",
            publisher:"df"
          },

          {id: 6,
            title: "Spider-Man",
            description: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.",
            creator: "Marvel",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
            type: "Drama",
            tags: ['man', 'spider'],
            color:"white",
            publisher:"dsg"

          }
        ];
    }

}
