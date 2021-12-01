import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'pokemon/detail/:id', component: DetailpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
