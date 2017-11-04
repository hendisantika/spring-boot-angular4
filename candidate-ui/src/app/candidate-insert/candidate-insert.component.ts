import { Component, OnInit } from '@angular/core';
import {Candidate} from "../../interfaces/candidate";
import {CandidateService} from "../../services/candidate.service";

@Component({
  selector: 'app-candidate-insert',
  templateUrl: './candidate-insert.component.html',
  styleUrls: ['./candidate-insert.component.css']
})
export class CandidateInsertComponent implements OnInit {

  candidate: Candidate = new Candidate();

  constructor(private candidateService : CandidateService) { }

  ngOnInit() {
  }

}
