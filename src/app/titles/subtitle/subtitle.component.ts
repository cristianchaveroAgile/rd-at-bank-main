import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {

  pagSubtitle: string = '';  // Texto del subtítulo.
  isHome: boolean;           // Define si la navegación está en Mi cuenta (home).
  showSubtitle: boolean;     // Determinará si se va a agregar la clase css "hidden", para mostrar o no el subtítulo.

  constructor(private router: Router) {
    this.isHome = true;
    this.showSubtitle = true;
  }

  ngOnInit(): void {
    // Si se está en Mi cuenta...
    if(this.router.url === "/dashboard/my-account") {
      this.isHome = true;
      const data = JSON.parse(localStorage.getItem('client')).data[0]; // Trae el nombre del cliente del local storage.
      this.pagSubtitle = data.nombre_cliente; // El texto del subtítulo llevará el nombre del cliente si el usuario está en Mi cuenta (home).
    } else {
      this.isHome = false;
      this.showSubtitle = false;  // Determina que se debe agregar la clase css "hidden", para que el mediaquery sepa que no debe mostrarla si está en tamaño de móviles.
    }

  }

}
