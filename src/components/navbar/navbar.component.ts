import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  dropdowns: { [key: string]: boolean } = {
    ccReports: false,
    manageUsers: false,
    dialer: false
  };

  toggleDropdown(menu: string, isOpen: boolean) {
    this.dropdowns[menu] = isOpen;
  }
}
