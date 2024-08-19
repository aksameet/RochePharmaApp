import { Component } from '@angular/core';
import { CommunicationService } from './shared/services/communication.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  message: string = '';

  constructor(private communicationService: CommunicationService) {}

  sendMessage() {
    this.communicationService.changeMessage('Hello from Main Component');
  }
}
