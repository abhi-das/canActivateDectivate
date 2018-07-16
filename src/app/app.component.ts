import { Component } from '@angular/core';
import { ActivateGuard } from './guard/activate.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  activeCheck: boolean;

  constructor(private _actv: ActivateGuard) {}


  activateFn() {
    this.activeCheck = true;
    this._actv.setCanActivate(this.activeCheck);
  }
}
