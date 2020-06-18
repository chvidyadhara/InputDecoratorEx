import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[ParentComponent,ChildComponent]
})
export class ParentToChildModule { }
