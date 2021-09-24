import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeComponent } from './joke/joke.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { PageComponent } from './page/page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my'
  },
  {
    path: 'my',
    component: MycomponentComponent
  },
  {
    path: 'joke',
    component: JokeComponent

  },
  {
    path: 'page',
    component: PageComponent, 
    children: [
      {
        path: "",
        pathMatch: 'full',
        redirectTo: 'page1'  
      },
      {
        path: 'page1',
        component: Page1Component
      },
      {
        path: 'page2',
        component: Page2Component
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
