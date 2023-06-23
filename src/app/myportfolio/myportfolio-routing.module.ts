import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { GithubprojectComponent } from './components/githubproject/githubproject.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
    children:[
      
      {
        path:'about',
        component:AboutComponent,
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'github',
        component:GithubprojectComponent
      },
      {
        path:'',
        component:MainComponent,
        pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyportfolioRoutingModule { }
