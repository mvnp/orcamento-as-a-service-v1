import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './example/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './example/layouts/auth/auth-layout.component';
import { DashboardComponent } from './example/dashboard/dashboard.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./example/dashboard/dashboard.module').then(m => m.DashboardModule)
            }, {
                path: 'components',
                loadChildren: () => import('./example/components/components.module').then(m => m.ComponentsModule)
            }, {
                path: 'forms',
                loadChildren: () => import('./example/forms/forms.module').then(m => m.Forms)
            }, {
                path: 'tables',
                loadChildren: () => import('./example/tables/tables.module').then(m => m.TablesModule)
            }, {
                path: 'maps',
                loadChildren: () => import('./example/maps/maps.module').then(m => m.MapsModule)
            }, {
                path: 'widgets',
                loadChildren: () => import('./example/widgets/widgets.module').then(m => m.WidgetsModule)
            }, {
                path: 'charts',
                loadChildren: () => import('./example/charts/charts.module').then(m => m.ChartsModule)
            }, {
                path: 'calendar',
                loadChildren: () => import('./example/calendar/calendar.module').then(m => m.CalendarModule)
            }, {
                path: '',
                loadChildren: () => import('./example/timeline/timeline.module').then(m => m.TimelineModule)
            }, {
                path: '',
                loadChildren: () => import('./example/userpage/user.module').then(m => m.UserModule)
            }, {
                path: 'cronograma',
                loadChildren: () => import('./painel/cronograma/cronograma.module').then(m => m.CronogramaModule)
            }, {
                path: 'project',
                loadChildren: () => import('./painel/project/project.module').then(m => m.ProjectModule)
            }, {
                path: 'saas',
                loadChildren: () => import('./saas/saas.module').then(m => m.SaasModule)
            },
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: () => import('./example/pages/pages.module').then(m => m.PagesModule)
        }]
    },
    { 
        path: '**',   
        component: DashboardComponent
    }
];
