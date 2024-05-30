import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllTrainsComponent } from '../get-all-trains.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GetAllTrainsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:GetAllTrainsComponent}])
  ]
})
export class GetAllTrainsModuleModule { }
