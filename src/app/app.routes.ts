import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountPageComponent } from './components/account-page/account-page.component';

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
