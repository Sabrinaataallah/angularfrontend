import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListecandidateComponent } from './listecandidate/listecandidate.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { Ng2TelInputModule } from 'ng2-tel-input';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    ListecandidateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
