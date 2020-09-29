import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestCompComponent} from './test-comp/test-comp.component';
import {LoginComponent} from './login/login.component';
import {TestCompTwoComponent} from './test-comp-two/test-comp-two.component';
import {TestCompThreeComponent} from './test-comp-three/test-comp-three.component';
import {TestCompFourComponent} from './test-comp-four/test-comp-four.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent,
   },
  {
    path: 'test',
    component: TestCompComponent
  },
  {
    path: 'test2',
    component: TestCompTwoComponent
  },
  {
    path: 'test3',
    component: TestCompThreeComponent
  },
  {
    path: 'test4',
    component: TestCompFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
