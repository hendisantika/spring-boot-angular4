import {Component, OnInit} from '@angular/core';
import {CandidateService} from "../../services/candidate.service";
import {Candidate} from "../../interfaces/candidate";
import {SearchData} from "../../interfaces/searchdata";
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[];
  searchData: SearchData = new SearchData();

  constructor(private candidateService: CandidateService, private router : Router) {
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

  deleteCandidate(id) {
    this.candidateService.delete(id).subscribe(output => {
      if (output) {
        this.loadCadidate();
      }
    }, error => {
      console.log(error);
    })
  }

  onSearch() {
    this
      .candidateService
      .search(this.searchData)
      .subscribe(data => {
        this.candidates = data;
      }, error => {
        console.log(error.message);
      });
  }

}
