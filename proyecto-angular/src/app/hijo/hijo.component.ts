import { Component, OnInit,Input } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  constructor(public padre: PadreComponent) { }
@Input() epoca:number;

resul: number;
  
  ngOnInit(): void {
  }
  edaddelpadre(){
    
    this.padre.resul=this.resul;
    this.resul= 2019-this.epoca;
   
    alert(this.resul)
      
  }
  
}

