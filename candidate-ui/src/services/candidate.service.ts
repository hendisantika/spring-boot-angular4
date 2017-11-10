import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Candidate} from '../interfaces/candidate';
import {SearchData} from '../interfaces/searchdata';


const url = 'http://localhost:8080/api/candidate';

@Injectable()
export class CandidateService {
  constructor(private http: Http) {

  }

  findAll() {
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  findById(id : string) {
    return this
      .http
      .get(url + '/' + id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  save(candidate: Candidate) {
    let headers = new Headers ({'Content-Type' : 'application/json', 'Cache-Control' : 'no-cache'});
    let options = new RequestOptions ({ headers : headers });
    return this.http.post(url, candidate, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  delete(id){
    return this.http.delete(url + '/' + id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  search(search: SearchData) {
    const header = new Headers ({'Content-Type' : 'application/json', 'Cache-Control' : 'no-cache'});
    const option = new RequestOptions ({headers: header});
    return this.http.post(url, search, option)
      .map(res => res.json())
      .catch(this.handleError);

  }

  handleError(error) {
    return Observable.throw(error.json() || 'Server Error');
  }
}
