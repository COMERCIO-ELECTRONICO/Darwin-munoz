import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  constructor() { }
 public resul:Number;
  padre='';
  

  ngOnInit(): void {
  }

}
