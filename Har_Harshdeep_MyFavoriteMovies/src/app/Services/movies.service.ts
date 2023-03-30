import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContent(): Observable<Content[]>{
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>('/api/movies');
  }

  getContentById(id: number): Observable<any> {
    const content = contents.find(c => c.id === id);
    this.messageService.add(`Content item at id: ${id}`);
    return of(content);
  }
}