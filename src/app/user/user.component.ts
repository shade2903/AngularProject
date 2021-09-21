import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input('looser') public user: any;
  @Output('remove') public onRemove:EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  removeUser(){

    this.onRemove.emit();
  }

}
