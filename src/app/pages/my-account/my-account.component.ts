import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  isDataAvailable:boolean = false;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('client'));
    if(!localStorage.getItem('client')){
      this.apiService.get('https://lg3u65n3fj.execute-api.us-east-2.amazonaws.com/dev/getclientes').then(resp => {
        console.log('Entro');
        localStorage.setItem('client', JSON.stringify(resp));
        this.isDataAvailable = true;
      });
    } else {
      this.isDataAvailable = true;
    }

  }

}
