import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { ListecandidateComponent } from './listecandidate/listecandidate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path : 'insert', component : CandidateComponent},
  {path : 'liste' , component:ListecandidateComponent},
  {path : '',component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
