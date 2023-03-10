import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private messageService: MessageService) { }

  getContent(): Observable<Content[]>{
    this.messageService.add("Content array loaded!");
    return of(contents);
  }

  getContentById(id: number): Observable<any> {
    const content = contents.find(c => c.id === id);
    this.messageService.add(`Content item at id: ${id}`);
    return of(content);
  }
}
