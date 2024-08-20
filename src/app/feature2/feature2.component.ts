import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommunicationService } from '../shared/communication.service';

@Component({
  selector: 'app-feature2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feature2.component.html',
  styleUrl: './feature2.component.scss',
})
export class Feature2Component {
  feature2Message: string = '';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.currentFeature2Message.subscribe(
      (message) => (this.feature2Message = message)
    );
  }
}
