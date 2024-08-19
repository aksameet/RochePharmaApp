import { Component } from '@angular/core';
import { CommunicationService } from '../shared/services/communication.service';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [],
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.scss',
})
export class LazyComponent {
  message: string = '';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.currentMessage.subscribe(
      (message: string) => (this.message = message)
    );
  }
}
