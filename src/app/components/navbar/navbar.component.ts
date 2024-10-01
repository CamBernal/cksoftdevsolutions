import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  // Función para alternar el menú de navegación
  toggleMenu() {
    const menu = document.querySelector('.menu') as HTMLElement;
    const toggleIcon = document.querySelector('.menu-toggle') as HTMLElement;

    if (menu && toggleIcon) {
      menu.classList.toggle('show');
      toggleIcon.classList.toggle('active');
    }
  }
}
