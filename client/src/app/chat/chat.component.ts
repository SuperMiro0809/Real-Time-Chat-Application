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
  }

  submitFormHandler(data) {
    
  }

}
