import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit(): void {
  }

  hidde(e: Event) {
    e.preventDefault();
    this.show = false;
  }

}
