import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommunicationService } from '../../shared/services/communication.service';
import { Extra2Component } from '../extra2/extra2.component';
import { MaterialModule } from '../../shared/modules/material.module';

@Component({
  selector: 'app-extra1',
  standalone: true,
  imports: [RouterLink, Extra2Component, MaterialModule],
  templateUrl: './extra1.component.html',
  styleUrl: './extra1.component.scss',
})
export class Extra1Component {
  messageToExtra2: string = '';

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {}

  sendMessageToExtra2() {
    this.communicationService.changeExtra1Message('Message from Extra 1');
    this.router.navigate(['/feature1/extra2']);
  }
}
