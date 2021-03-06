import { Component, OnInit } from '@angular/core';
import {FormcandidateService} from '../formcandidate.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {



  constructor(private  http: HttpClient, private  formService: FormcandidateService) { }


  ngOnInit() {  }



  onInscri(data) {

    console.log(data)
    this.formService.Inscri(data)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      }) ;

  }

  onInsert(data){
    
  }
}
