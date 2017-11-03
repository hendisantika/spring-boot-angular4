import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Candidate} from '../interfaces/candidate';
import {RequestOptions} from 'http';
import {SearchData} from './searchdata';


let url: string = 'http://localhost:8080/api/candidate';

@Injectable()
export class CandidateService{
  constructor(private http: Http){
  }

  findAll(){
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  save(candidate: Candidate){
    let header: new Headers({'Content-Type' : 'application/json', 'Cache-Control' : 'no-cache'});
    let option: new RequestOptions({headers: header});
    return this.http.post(url, candidate, option)
      .map(res => res.json())
      .catch(this.handleError);
  }

  delete(id){
    return this.http.delete(url + '/' + id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  search(searchData: SearchData){
    let header: new Headers({'Content-Type' : 'application/json', 'Cache-Control' : 'no-cache'});
    let option: new RequestOptions({headers: header});
    return this.http.post(url, searchData, option)
      .map(res => res.json())
      .catch(this.handleError);

  }

  handleError(error){
    return Observable.throw(error.json() || 'Server Error');
  }
}
