import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-call-comple-report',
  imports: [CommonModule],
  templateUrl: './call-comple-report.component.html',
  styleUrl: './call-comple-report.component.css'
})
export class CallCompleReportComponent {
  headers: string[] = [
    '#', 'Sales Executive', 'Caller Name', 'Caller Number', 'Call Status', 
    'Download', 'File', 'Duration (Sec)', 'Call Type', 'Status', 
    'Sub Call Status', 'Disposition Duration', 'Notes'
  ];

  callRecords = [
    { salesExecutive: 'SANA BEGUM', callerName: 'Araveti Suryanarayana', callerNumber: '9381436863', callStatus: 'UNANSWERED', file: '--', duration: 38, callType: 'OUT (Dialer)', status: 'Not answered', subCallStatus: '', dispositionDuration: 1, notes: '' },
    { salesExecutive: 'CH SATHVIKA', callerName: 'Sreenivas', callerNumber: '9703702425', callStatus: 'UNANSWERED', file: '--', duration: 17, callType: 'OUT (Dialer)', status: 'Invalid number', subCallStatus: '', dispositionDuration: 11, notes: '' },
    { salesExecutive: 'SINDHUJA YADAN', callerName: 'Vimala G', callerNumber: '9177457371', callStatus: 'UNANSWERED', file: '--', duration: 0, callType: 'OUT (Dialer)', status: 'Not reachable', subCallStatus: '', dispositionDuration: 1, notes: 'Not interested' }
  ];

  filteredRecords = [...this.callRecords];

  filterValues: any = {};

  applyFilter(column: string, event: any) {
    const value = event.target.value.toLowerCase();
    this.filterValues[column] = value;

    this.filteredRecords = this.callRecords.filter(record => {
      return Object.keys(this.filterValues).every(key => {
        const typedKey = key as keyof typeof record;
        if (!this.filterValues[key]) return true;
        return record[typedKey]?.toString().toLowerCase().includes(this.filterValues[key]);
      });
    });
  }
}
