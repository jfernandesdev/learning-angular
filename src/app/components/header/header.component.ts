import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  menuOptions = ["Home", "About", "Products", "Contact"];

  userData: User = {
    name: "Jeferson Fernandes",
    username: "jfernandesdev",
    email: "jfernandes.dev@gmail.com",
    image: "https://github.com/jfernandesdev.png",
  }
}
