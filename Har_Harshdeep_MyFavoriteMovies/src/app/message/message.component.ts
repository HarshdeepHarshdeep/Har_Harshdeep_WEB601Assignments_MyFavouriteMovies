import { Component } from '@angular/core';
import { MessageService } from '../Services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  constructor(public MessageService: MessageService){}
}