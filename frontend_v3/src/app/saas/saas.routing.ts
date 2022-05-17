import { Routes } from '@angular/router';

import { BudgetsComponent } from './budgets/budgets.component';
import { CustomersComponent } from './customers/customers.component';
import { ContractsComponent } from './contracts/contracts.component';
import { EstimateComponent } from './estimate/estimate.component';
import { PartnersComponent } from './partners/partners.component';
import { ProjectsComponent } from './projects/projects.component';

import { CardProjectsComponent } from './projects/card-projects/card-projects.component';
import { LandingPageComponent } from './projects/landing-page/landing-page.component';

export const SaasRoutes: Routes = [
    { 
        path: 'projects',
        component: ProjectsComponent
    },
    { 
        path: 'projects/all',
        component: CardProjectsComponent
    },
    { 
        path: 'projects/lp',
        component: LandingPageComponent
    },
    { path: 'customers', component: CustomersComponent },
    { path: 'partners', component: PartnersComponent },
    { path: 'estimate', component: EstimateComponent },
    { path: 'contracts', component: ContractsComponent },
    { path: 'budgets', component: BudgetsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]
