import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({id: 1,
      title: "The Avengers",
      description: "Marvel's The Avengers or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
      creator: "Marvel",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      type: "Action"
    });
    this.contentList.add({id: 2,
      title: "Avengers: Age of Ultron",
      description: "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers.",
      creator: "Marvel",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
      type: "Action"
    });
    this.contentList.add({id: 3,
      title: "Avengers: Infinity War",
      description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers.",
      creator: "Marvel",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
      type: "Action"
    });
  }
}
