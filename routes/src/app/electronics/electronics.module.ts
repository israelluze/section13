import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicListComponent } from './ElectronicList/ElectronicList.component';
import { ElectronicDetailComponent } from './ElectronicList/ElectronicDetail/ElectronicDetail.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    ElectronicListComponent,
    ElectronicDetailComponent
  ],
  imports: [
    CommonModule,
    ElectronicsRoutingModule,
    MaterialModule
  ]
})
export class ElectronicsModule { }
