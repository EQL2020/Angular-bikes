import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages : string[];

  constructor(private msgSvc : MessagesService) { }

  ngOnInit() {
    this.messages = this.msgSvc.getMessages();
  }

  clearMessages()
  {
    this.msgSvc.clear();
  }

}
