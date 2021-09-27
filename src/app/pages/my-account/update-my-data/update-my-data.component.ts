import { Component, OnInit } from '@angular/core';
import {​​​​​​​​ FormBuilder, FormGroup, Validators }​​​​​​​​ from'@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-update-my-data',
  templateUrl: './update-my-data.component.html',
  styleUrls: ['./update-my-data.component.scss']
})
export class UpdateMyDataComponent implements OnInit {

  form: FormGroup;
  show: boolean;
  client: any;
  phone: string;
  error: boolean;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) {
    this.client = JSON.parse(localStorage.getItem('client')).data[0];
    this.buildForm();
    this.show = false;
    this.error = false;
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.phone = this.client.telefono_1.toString().substr(0,2) + '-' + this.client.telefono_1.toString().substr(2,4) + '-' + this.client.telefono_1.toString().substr(6,4);
    this.form = this.formBuilder.group(
      {
        telefono: [this.phone, [Validators.minLength(12), Validators.maxLength(12), Validators.required]],
        email: [this.client.correo_1, [Validators.email, Validators.required]]
      }
    );
  }

  /* Se utilizan los prefijos "async" y "await" para poder generar un proceso sincrónico de la llamada y/o ejecución de
  los servicios de actualización y obtención de la información del cliente*/
  async save(event: Event) {
    event.preventDefault();
    this.form.markAllAsTouched();

    if(this.form.valid) {
      // console.log(this.form.value);
      /* Se verifica que el valor obtenido en formulario y el valor que tenemos en nuestra variable Client
      (información del cliente obtenida después de realizar el login) sean identicos o diferentes, en caso de ser iguales
      arrojará un error */
      if (this.form.value.telefono.replace(/\D/g, '') === this.client.telefono_1 && this.form.value.email === this.client.correo_1) {
        this.error = true;
        this.errorMessage = 'Si deseas conservar tus datos da clic en Conservar'
      } else {
        /* Verificamos que el valor del teléfono sea dirente al de nuestra variable client, y en caso de que se cumpla la
        condición se ejecuta el servicio que llama a la modificación del teléfono del cliente en la base de datos, en caso
        contrario arroja un error */
        if (this.form.value.telefono.replace(/\D/g, '') != this.client.telefono_1) {
          await this.apiService.put(
            'https://428kc21p6l.execute-api.us-east-1.amazonaws.com/prod/clientes-put-telefono',
            {
              clienteId: 1,
              telefono_1: this.form.value.telefono.replace(/\D/g, '')
            }
          ).then((resp: any) => {
            // console.log(resp)
            if (resp.message != 'Telefono actualizado'){
              this.error = true;
              this.errorMessage = 'Algo salio mal, intentelo nuevamente';
            }
          })
        }
        /* Verificamos que el valor del correo electrónico  sea dirente al de nuestra variable client, y en caso de que se
        cumpla la condición se ejecuta el servicio que llama a la modificación del correo electrónico del cliente en la
        base de datos, en caso contrario arroja un error */
        if (this.form.value.email != this.client.correo_1) {
          await this.apiService.put(
            'https://lg3u65n3fj.execute-api.us-east-2.amazonaws.com/dev/putcorreo',
            {
              clienteId: 1,
              correo_1: this.form.value.email
            }
          ).then((resp: any) => {
            // console.log(resp)
            if (resp.message != 'Correo actualizado') {
              this.error = true;
              this.errorMessage = 'Algo salio mal, intentelo nuevamente';
            }
          })
        }
        /* Verifica que no haya ningún error y ejecuta el servicio de obtención de la información del cliente, y posteriormente
        la guarda en la variable cliente y así tener actualizada la información en la vista, en caso de que ocuura un error nos
        lo arroja */
        if(!this.error) {
          await this.apiService.get('https://lg3u65n3fj.execute-api.us-east-2.amazonaws.com/dev/getclientes').then(resp => {
            localStorage.setItem('client', JSON.stringify(resp));
            this.showModal();
          }).catch(err => {
            this.error = true;
            this.errorMessage = 'Ocurrio un error al momento de actualizar la información, intentelo nuevamente.'
          })
        }
        this.showModal();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  showModal() {
    this.show = true;
  }

  hide() {
    this.show = false;
    this.error = false;
  }

  format(event: Event) {
    let element = event.target as HTMLInputElement; // Se convierte al elemento target en un elemento HTML de tipo Input
    // Se eliminan todos aquellos caracteres que no sean digital numericos del valor del input
    let value = element.value.replace(/\D/g, "").replace(/-/g, '');
    // Se genera el formato del input "telefono"
    element.value = value.substr(0,2) + '-' + value.substr(2,4) + '-' + value.substr(6,4);
  }
}
