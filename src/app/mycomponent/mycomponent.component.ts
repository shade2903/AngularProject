import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'bull',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {
  public myId: string = 'test';
  public lastname: string = "Sidorov";
  public styles = {'color':'blue', 'font-size' : '32px'};
  public classes = {'myclass':true, 'myclass2': false};
  public human: string = 'man'; //man, woman, child
  public  users= [
    {    
      name: 'Vasya',
      age: 12,
      sex: 'male'
    },
    {
      name: 'Vika',
      age: 25,
      sex: 'female'
    },
    {
      name: 'Marina',
      age: 15,
      sex: 'female'
    },
    {
      name: 'Maksim',
      age: 32,
      sex: 'male'   

  }
  ];



 showMessage(name: string){
    alert(name);
    console.log(this.lastname)
  }
  constructor(private apiService: ApiService) {
    
   }

  ngOnInit(): void {
  }
  changeStyle(){
    const randColor =()=> Math.trunc(Math.random()*255);
    const r = randColor();
    const g = randColor();
    const b = randColor();
    this.styles['color'] = `rgb(${r},${g},${b})`;
  }
  changeClasses(flag: boolean){
    this.classes.myclass = !flag;
    this.classes.myclass2 = flag;  }
    removeUser(user:any){
    const index = this.users.indexOf(user);
    if(index!== -1){
      this.users.splice(index,1);
    }

    }

}

