import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'accountGeneral',
        component: AccountPageComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
