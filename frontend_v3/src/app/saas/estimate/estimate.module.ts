import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MdModule } from './../../example/md/md.module';
import { MaterialModule } from 'src/app/app.module';

import { EstimateComponent } from './estimate.component';
import { EstimateProjectComponent } from './estimate-project/estimate-project.component';

@NgModule({
    declarations: [
        EstimateComponent,
        EstimateProjectComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        MdModule,
        NgxMaskModule.forChild(),
    ]
})
export class EstimateModule { }

