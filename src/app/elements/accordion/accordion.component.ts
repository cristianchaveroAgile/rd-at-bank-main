import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRequests(tab) {
    localStorage.setItem('tab', tab);
    this.router.navigateByUrl('dashboard/my-requests');
  }
}
