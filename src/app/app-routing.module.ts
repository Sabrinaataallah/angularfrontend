import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { ListecandidateComponent } from './listecandidate/listecandidate.component';

const routes: Routes = [

  {path : 'insert', component : CandidateComponent},
  {path : 'liste' , component:ListecandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
