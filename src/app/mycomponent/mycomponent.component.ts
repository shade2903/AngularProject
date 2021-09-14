import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bull',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {
  public myId: string = 'test';
 showMessage(name: string){
    alert(name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
