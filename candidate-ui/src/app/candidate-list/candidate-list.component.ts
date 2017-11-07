import {Component, OnInit} from '@angular/core';
import {CandidateService} from "../../services/candidate.service";
import {Candidate} from "../../interfaces/candidate";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[];

  constructor(private candidateService: CandidateService) {
  }

  ngOnInit() {
    this.loadCadidate();
  }

  loadCadidate() {

    this
      .candidateService
      .findAll()
      .subscribe(data => {

        this.candidates = data;
      }, error => {
        console.log(error);
      });
  }

}
