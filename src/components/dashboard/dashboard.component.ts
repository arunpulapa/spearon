import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule,
    MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { label: 'Total Agents', value: 50, percentage: 100 },
    { label: 'Today Login', value: 39, percentage: 78 },
    { label: 'Current Login', value: 33, percentage: 66 },
    { label: 'On Call', value: 2, percentage: 4 },
    { label: 'Wrap Up', value: 0, percentage: 0 },
    { label: 'Idle', value: 31, percentage: 62 },
    { label: 'Logout', value: 7, percentage: 14 },
    { label: 'Not Login', value: 11, percentage: 22 }
  ];
}
