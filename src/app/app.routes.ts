import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'imprint',
        component: ImprintComponent
    },
    {
        path: 'acp',
        redirectTo: 'acp/login',
        pathMatch: 'full'
    },
    {
        path: 'acp/login',
        component: LoginComponent
    },
    {
        path: 'acp/dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
