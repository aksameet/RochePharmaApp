import { Component } from '@angular/core';
import { CommunicationService } from '../../shared/services/communication.service';
import { Router, RouterLink, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material.module';

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.scss',
})
export class Feature1Component {
  message: string = '';

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.communicationService.currentMessage.subscribe((message) => {
      this.message = message;
    });

    const newRoutes: Routes = [
      {
        path: 'feature1/extra1',
        loadComponent: () =>
          import('../extra1/extra1.component').then((m) => m.Extra1Component),
      },
      {
        path: 'feature1/extra2',
        loadComponent: () =>
          import('../extra2/extra2.component').then((m) => m.Extra2Component),
      },
    ];

    this.router.config.unshift(...newRoutes);
  }
}
