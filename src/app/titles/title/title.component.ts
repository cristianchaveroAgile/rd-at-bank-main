import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  pagTitle: string = ''; // Texto que tendrá el título.

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Se define el texto que tendrá el título, dependiendo del link en donde se encuentre el usuario.
    if(this.router.url.includes("/my-account")) {
      this.pagTitle = "Mi cuenta";
    } else if(this.router.url.includes("/my-requests")) {
      this.pagTitle = "Mis solicitudes";
    } else if(this.router.url.includes("/notifications")) {
      this.pagTitle = "Notificaciones";
    }
  }

}
