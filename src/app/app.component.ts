import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommunicationService } from './shared/communication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private communicationService: CommunicationService) {}

  sendMessage() {
    this.communicationService.changeMessage('Hello from Main App!');
  }
}
