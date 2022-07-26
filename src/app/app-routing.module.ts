import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";
import {ServiceTitleService} from "./service-title.service";

const routes: Routes = [

  {path:'', title: 'Это главная страница', children: [


      // Страница /one
      {path: 'one', component: PageOneComponent, title: 'Привет мир!'},

      // Страница /two
      {path: 'two', component: PageTwoComponent, title: ServiceTitleService},


    ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
