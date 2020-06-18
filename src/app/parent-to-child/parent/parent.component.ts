import { Component, OnInit } from '@angular/core';
import { ServPtoCService } from 'src/app/serv-pto-c.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  users:object;
  constructor(private serv:ServPtoCService) { }
   
    produtdata(){
      this.serv.produlist().subscribe(result=>{
              this.users = result;
      })
    }
  ngOnInit() {
    this.produtdata()
  }


}
