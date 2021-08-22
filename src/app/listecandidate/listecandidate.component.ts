import { Component, OnInit } from '@angular/core';
import {FormcandidateService} from '../formcandidate.service';

@Component({
  selector: 'app-listecandidate',
  templateUrl: './listecandidate.component.html',
  styleUrls: ['./listecandidate.component.css']
})
export class ListecandidateComponent implements OnInit {

  constructor(private formService: FormcandidateService) { }

  person;

  ngOnInit() {
    this.formService.getAllCandidate()
      .subscribe(data => {
        this.person = data;
      }, err => {
        console.log(err);
      }
      );
  }


}
