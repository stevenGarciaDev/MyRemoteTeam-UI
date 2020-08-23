import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  isMenuClosed(): boolean {
    return this.isOpen === false;
  }

}
