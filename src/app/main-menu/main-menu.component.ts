import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  notification: boolean;

  constructor(private router: Router) {
    // Indica que existen notificaciones activas
    this.notification = true;
  }

  ngOnInit(): void {
  }

  // Detecta la sección activa y cambia el ícono del menú
  setActive(path) {
    if (this.router.url.includes(path)) {
      return true
    }
  }
}
