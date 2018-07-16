import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ActivateGuard } from './guard/activate.guard';
import { CanDeactiveAccount } from './guard/can.deactive';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'account',
        component: AccountComponent,
        canActivate: [ActivateGuard],
        canDeactivate: [CanDeactiveAccount]
    }
    
];

// export const appRoutingProviders: any[] = [];

// @NgModule({
//     imports: [ RouterModule.forRoot(routes) ],
//     exports: [ RouterModule ],
//     providers: [
//         CanDeactiveAccount,
//         SomeRouteGuard
//     ]
// })
// export class AppRoutingModule {}

export const appRoutingProviders: any[] = [];

export const AppRoutingModule = RouterModule.forRoot(routes);