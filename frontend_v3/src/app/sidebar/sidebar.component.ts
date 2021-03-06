import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
    
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/saas/projects',
        title: 'Meus Projetos',
        type: 'sub',
        icontype: 'dashboard',
        collapse: 'projects',
        children: [
            {
                path: 'index', 
                title: 'Projetos', 
                ab:'B'
            }, {
                path: 'all', 
                title: 'Marketplace', 
                ab:'B'
            }
        ]
    }, {
        path: '/dashboard',
        title: 'Painel',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/saas/contracts',
        title: 'Meus contratos',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/saas/estimate',
        title: 'Cronograma',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/saas/budgets',
        title: 'Orçamentos',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/saas/custodaobra',
        title: 'Custo da Obra',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/saas/empreiteiras',
        title: 'Construtoras',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/saas/fornecedores',
        title: 'Fornecedores',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/saas/reports',
        title: 'Relatórios',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/saas/photos',
        title: 'Fotos da Obra',
        type: 'link',
        icontype: 'dashboard'
    },  
    // {
    //     path: '/components',
    //     title: 'Components',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'components',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // }
    // {
    //     path: '/saas',
    //     title: 'Projetos',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'projects',
    //     children: [
    //         { path: 'projects', title: 'Listar', ab: 'LP' },
    //         // { path: 'adicionar', title: 'Adicionar', ab: 'AP' },
    //         // {path: '52', title: 'Gerenciar', ab:'GP' },
    //         // {path: 'grid', title: 'Grid System', ab:'GS'},
    //         // {path: 'panels', title: 'Panels', ab:'P'},
    //         // {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         // {path: 'notifications', title: 'Notifications', ab:'N'},
    //         // {path: 'icons', title: 'Icons', ab:'I'},
    //         // {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/cronograma',
    //     title: 'Cronogramas',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'cronograma',
    //     children: [
    //         { path: '52', title: 'Gerenciar', ab: 'CL' },
    //         // { path: 'grid', title: 'Grid System', ab: 'GS' },
    //         // {path: 'panels', title: 'Panels', ab:'P'},
    //         // {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         // {path: 'notifications', title: 'Notifications', ab:'N'},
    //         // {path: 'icons', title: 'Icons', ab:'I'},
    //         // {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/components',
    //     title: 'Custos da Obra',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'custosdaobra',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/components',
    //     title: 'Orçamentos',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'orcamentos',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/components',
    //     title: 'Empreiteiras',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'empreiteiras',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/components',
    //     title: 'Fornecedores',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'fornecedores',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/components',
    //     title: 'Meus contratos',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'meuscontratos',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/components',
    //     title: 'Relatórios',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'relatorios',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/components',
    //     title: 'Fotos da Obra',
    //     type: 'sub',
    //     icontype: 'apps',
    //     collapse: 'fotosdaobra',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },
    // {
    //     path: '/tables',
    //     title: 'Financeiro',
    //     type: 'sub',
    //     icontype: 'grid_on',
    //     collapse: 'financeiro',
    //     children: [
    //         {path: 'datatables.net', title: 'Datatables.net', ab:'DT'},
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // }  
    // ,{
    //     path: '/forms',
    //     title: 'Forms',
    //     type: 'sub',
    //     icontype: 'content_paste',
    //     collapse: 'forms',
    //     children: [
    //         {path: 'regular', title: 'Regular Forms', ab:'RF'},
    //         {path: 'extended', title: 'Extended Forms', ab:'EF'},
    //         {path: 'validation', title: 'Validation Forms', ab:'VF'},
    //         {path: 'wizard', title: 'Wizard', ab:'W'}
    //     ]
    // },{
    //     path: '/tables',
    //     title: 'Tables',
    //     type: 'sub',
    //     icontype: 'grid_on',
    //     collapse: 'tables',
    //     children: [
    //         {path: 'regular', title: 'Regular Tables', ab:'RT'},
    //         {path: 'extended', title: 'Extended Tables', ab:'ET'},
    //         {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
    //     ]
    // },{
    //     path: '/maps',
    //     title: 'Maps',
    //     type: 'sub',
    //     icontype: 'place',
    //     collapse: 'maps',
    //     children: [
    //         {path: 'google', title: 'Google Maps', ab:'GM'},
    //         {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
    //         {path: 'vector', title: 'Vector Map', ab:'VM'}
    //     ]
    // },{
    //     path: '/widgets',
    //     title: 'Widgets',
    //     type: 'link',
    //     icontype: 'widgets'

    // },{
    //     path: '/charts',
    //     title: 'Charts',
    //     type: 'link',
    //     icontype: 'timeline'

    // },{
    //     path: '/calendar',
    //     title: 'Calendar',
    //     type: 'link',
    //     icontype: 'date_range'
    // },{
    //     path: '/pages',
    //     title: 'Pages',
    //     type: 'sub',
    //     icontype: 'image',
    //     collapse: 'pages',
    //     children: [
    //         {path: 'pricing', title: 'Pricing', ab:'P'},
    //         {path: 'timeline', title: 'Timeline Page', ab:'TP'},
    //         {path: 'login', title: 'Login Page', ab:'LP'},
    //         {path: 'register', title: 'Register Page', ab:'RP'},
    //         {path: 'lock', title: 'Lock Screen Page', ab:'LSP'},
    //         {path: 'user', title: 'User Page', ab:'UP'}
    //     ]
    // }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
