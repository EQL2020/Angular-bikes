import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

private messages : string[] = [];

constructor() { }

addMessage(message : string) {
  this.messages.push(message);
}

getMessages() : string[] {
  return this.messages;
}

clear()
{
  this.messages.splice(0, this.messages.length);
}

}


