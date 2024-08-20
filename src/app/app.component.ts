import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommunicationService } from './shared/services/communication.service';
import { MaterialModule } from './shared/modules/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private communicationService: CommunicationService) {}

  sendMessage() {
    this.communicationService.changeMessage('Hello from Main App!');
  }

  resetAllMessages() {
    this.communicationService.resetAllMessages();
  }
}
