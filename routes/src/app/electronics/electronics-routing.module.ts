import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicListComponent } from './ElectronicList/ElectronicList.component';
import { ElectronicDetailComponent } from './ElectronicList/ElectronicDetail/ElectronicDetail.component';

const routes: Routes = [
  {path: '', component: ElectronicListComponent},
  {path: ':index', component: ElectronicDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
