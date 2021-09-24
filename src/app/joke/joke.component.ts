import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  public joke:any={
    id: '',
    value: '',
    icon_url: ''
  };
  constructor(private apiService: ApiService) {
    this.getNewJoke();
    

   }

  ngOnInit(): void {
  }
  async getNewJoke(){
    this.joke = await this.apiService.getRandomJoke();
    
  }

}
