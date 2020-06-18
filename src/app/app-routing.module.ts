import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServPtoCService } from './serv-pto-c.service';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ServPtoCService]
})
export class AppRoutingModule { }
