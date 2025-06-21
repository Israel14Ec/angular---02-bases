import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, //Es una directiva
    RouterLinkActive,
  ],
  templateUrl: './navbar.html',
})
export class Navbar {

}
