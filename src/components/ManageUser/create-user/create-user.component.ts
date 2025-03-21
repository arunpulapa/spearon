import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userTypes = ['Admin', 'Editor', 'Viewer'];
  userRoles = ['Manager', 'Employee', 'Intern'];
  hierarchyUsers = ['User A', 'User B', 'User C'];

  constructor() {}
}
