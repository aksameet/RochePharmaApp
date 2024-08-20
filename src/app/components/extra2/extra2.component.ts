import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommunicationService } from '../../shared/services/communication.service';
import { MaterialModule } from '../../shared/modules/material.module';

@Component({
  selector: 'app-extra2',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './extra2.component.html',
  styleUrl: './extra2.component.scss',
})
export class Extra2Component {
  extra1Message: string = '';

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.communicationService.currentExtra1Message.subscribe(
      (message) => (this.extra1Message = message)
    );
  }

  sendMessageToFeature2() {
    this.communicationService.changeFeature2Message('Message from Extra 2');
    this.router.navigate(['/feature2']);
  }
}
