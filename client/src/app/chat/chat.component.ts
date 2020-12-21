import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from '../../environments/environment';

const SOCKET_ENDPOINT = 'localhost:3000';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  socket;

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if(data) {
        const element = document.createElement('li');
        element.textContent = data;
        element.classList.add('received-message');
        document.getElementById('inbox').appendChild(element);
      }
    });
  }

  submitFormHandler(data, messageInput) {
    const message = data.message;
    this.socket.emit('message', message);
    const element = document.createElement('li');
    element.textContent = message;
    element.className = 'send-message';
    document.getElementById('inbox').appendChild(element);
    messageInput.value = '';
  }

}
