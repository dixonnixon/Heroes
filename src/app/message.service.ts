import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  choose(id: number, message: string) {
    this.messages[id] = message;
  }

  clear() {
    this.messages = [];
  }

  getMessages() {
    return this.messages;
  }

  constructor() { }

}
