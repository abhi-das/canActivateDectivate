import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isDeActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  changeDeActive() {
    this.isDeActive = true;
  }

  checkDeActive(): boolean {
    return this.isDeActive;
  }
}
