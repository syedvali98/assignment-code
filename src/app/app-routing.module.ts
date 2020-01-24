import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocaldataComponent } from './localdata/localdata.component';


const routes: Routes = [
  {path:'localdata',component:LocaldataComponent},
  {path:'',redirectTo:'localdata',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
