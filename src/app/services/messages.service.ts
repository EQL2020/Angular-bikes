import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

private messages : string[] = [];
private nbMessages : number = 0;

constructor() { }

addMessage(message : string) {
  this.nbMessages++;
  this.messages.push(message);
}

getMessages() : string[] {
  return this.messages;
}

getMessagesCount() : Observable<number> {
  return of(this.nbMessages);
}

clear()
{
  this.nbMessages = 0;
  this.messages.splice(0, this.messages.length);
}

}


