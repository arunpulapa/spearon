import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-create-auto-dailer',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatRadioModule, MatIconModule, MatTableModule],
  templateUrl: './create-auto-dailer.component.html',
  styleUrl: './create-auto-dailer.component.css'
})
export class CreateAutoDailerComponent {
  displayedColumns: string[] = ['id', 'name', 'callDirection', 'status'];
  dataSource = [
    { id: 1, name: 'G SWATHI-1006924', callDirection: 'BOTH', status: 'ACTIVE' }
  ];
  autoDialerForm: FormGroup;
  selectedAgentDetails: any = null;
  selectedFile: File | null = null;

  triggerFileInput() {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  }
  agents = [
    { id: 1, name: 'John Doe', phone: '9876543210', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', phone: '9123456789', email: 'jane@example.com' }
  ];


onFileSelect(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    console.log("Uploaded file:", this.selectedFile);
  }
}


  constructor(private fb: FormBuilder) {
    this.autoDialerForm = this.fb.group({
      agentType: ['individual'],
      agentName: [''],
      groupName: [''],
      reconnects: [0],
      appMode: ['general'],
      campaignName: [''],
      surveyCount: [''],
      process: [''],
      disposition: [''],
      dndAllowed: ['Yes'],
      remarks: [''],
      customerNumbers: ['']
    });
  }

  onAgentChange(event: any) {
    const selectedAgent = this.agents.find(agent => agent.name === event.value);
    this.selectedAgentDetails = selectedAgent ? selectedAgent : null;
  
    if (this.selectedAgentDetails) {
      this.dataSource = [
        {
          id: this.selectedAgentDetails.id,
          name: `${this.selectedAgentDetails.name}-${this.selectedAgentDetails.id}`,
          callDirection: 'BOTH',
          status: 'ACTIVE'
        }
      ];
    }
  }
  
}
