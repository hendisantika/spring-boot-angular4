import { Component, OnInit } from '@angular/core';
import {Candidate} from "../../interfaces/candidate";
import {CandidateService} from "../../services/candidate.service";
import {Router} from "@angular/router";
// import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-candidate-insert',
  templateUrl: './candidate-insert.component.html',
  styleUrls: ['./candidate-insert.component.css']
})
export class CandidateInsertComponent implements OnInit {

  candidate: Candidate = new Candidate();

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
  }

  onProcessSaved(){
    this.candidate.photo = 'test';
    this.candidateService.save(this.candidate).subscribe(output => {
      console.log(output);
    }, error => {
      console.log(error);
    });
  }

  handleFileSelect(evt) {
    var files: evt.target.files;
    var file: files[0];

    if (files && file) {
      var reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.candidate.photo = btoa(binaryString);
    console.log(this.candidate.photo);
  }

}
