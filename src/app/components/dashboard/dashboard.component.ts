import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonToggleModule, MatTableModule, MatListModule, MatChipsModule, DatePipe, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  displayedColumns: string[] = ['originator', 'client', 'type', 'status', 'created', 'actions'];
  statusItems = [
    { status: 'New' },
    { status: 'Pending' },
    { status: 'Completed' }
  ];

  workQueue = {
    assignedToMe: 12,
    pendingReview: 8,
    referrals: 3,
    tasks: [
      { originator: 'Sam Masters', client: 'NAMEX Tech Solutions', type: 'Referral', status: 'New', created: '04/16/2025' },
      { originator: 'Annalise Willis', client: 'Maritime Logistics Corp', type: 'Referral', status: 'New', created: '04/20/2025' },
      { originator: 'Patrick Devenport', client: 'GreenField Energy Ltd', type: 'Loss Control Request', status: 'New', created: '04/16/2025' },
      { originator: 'Ana Killian', client: 'NorthStar Financial Group', type: 'Underwriter Referal', status: 'Pending Review', created: '04/22/2025' },
      { originator: 'Ana Killian', client: 'Alliance Healthcare Systems', type: 'Email', status: 'Completed', created: '04/28/2025' },
      { originator: 'Me', client: 'QuantumTech Industries', type: 'Email', status: 'Completed', created: '04/20/2025' },
    ]
  };

  portfolioGoals = {
    lossRatio: '48% (4.8% GOOD)',
    retention: '88% (ON TARGET)',
    newBusiness: '$8.1M ($12M)',
    annualGWP: '$28.4M ($42M)'
  };

  quickActions = ['New Submission', 'Quote Builder', 'Risk Models', 'Document Upload'];

  marketInsights = [
    'Cyber market rate hardening',
    'New capacity in Marine market',
    'Environmental regulations in CA'
  ];

  openTaskDetails(task: any) {
    console.log('Task clicked!');
  }

}
