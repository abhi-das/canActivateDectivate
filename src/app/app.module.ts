import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';


import { LoginService } from './services/login.service';
import { AppRoutingModule, appRoutingProviders } from './app.routers';

import { ActivateGuard } from './guard/activate.guard';
import { CanDeactiveAccount } from './guard/can.deactive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ 
    LoginService,
    appRoutingProviders,
    ActivateGuard,
    CanDeactiveAccount
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
