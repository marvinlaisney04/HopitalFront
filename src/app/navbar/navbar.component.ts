import { Component, OnInit } from '@angular/core';

const logo = new URL('../../assets/images/logo.svg', import.meta.url);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo = logo;
  constructor() { }

  ngOnInit(): void {
  }

}
