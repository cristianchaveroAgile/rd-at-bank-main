import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {

  show: boolean;
  client: any;
  phone: string;
  mail: string;

  constructor() {
    this.show = false
    this.client = JSON.parse(localStorage.getItem('client')).data[0]; // Obtiene el objeto de los datos del usuario, guardado localmente.
  }

  ngOnInit(): void {
    // Enmascara los datos del usuario.
    console.log(this.client.telefono_1.toString());
    this.phone = '**-****-' + this.client.telefono_1.toString().substr(6,4);
    this.mail = this.client.correo_1.substr(0,1) + '*******@' + this.client.correo_1.split('@')[1];
  }

  // Mostrar la caja modal definida en el html.
  showModal() {
    this.show = true;
  }

  // Ocultar la caja modal definida en el html.
  hideModal() {
    this.show = false;
  }

}
