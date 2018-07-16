import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { Observable } from 'rxjs';


// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
//  }

@Injectable()
export class CanDeactiveAccount implements CanDeactivate<AccountComponent> {

  canDeactivate(component: AccountComponent) {

    let canDeactive = component.checkDeActive();

    if(!canDeactive) {
      alert('Deactivation: Could not move out from current page until make deactive false  !!');
      return false;
    }

    return true;
  }

}
