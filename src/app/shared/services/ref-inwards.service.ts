import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import {RefInwards} from '../models/ref-inwards';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Accept': 'application/json'
  })
};
@Injectable()
export class RefInwardsService {
  Refrencelist:RefInwards[];
  selectedRef :RefInwards;
  private rootURL ='http://localhost:44664/api/RefInwards';
  constructor(private http :HttpClient) { }
  getRefInwards():Observable<RefInwards[]>{
    console.log("inside ref inward");
    return this.http.get<RefInwards[]>(this.rootURL,{headers: httpOptions.headers})
    .pipe(
      tap(Branch =>this.log('fetched getRefInwards')),
      catchError(this.handleError('getRefInwards',[]))
    );
  }


  PostRefInwards(ref : RefInwards){
    var body=JSON.stringify(ref);
    //console.log('Branch Name in service:' + br.BranchName);
    return this.http.post<RefInwards[]>(this.rootURL,body,{headers:httpOptions.headers});

    /* var body=JSON.stringify(inw);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method : RequestMethod.Post});
    return this.http.post(this.rootURL,body,requestOptions).map(x => x.json()); */

  }

  PutRefInwards(id:number, ref){
    var body=JSON.stringify(ref);
    //console.log('Date value in service:' +inw.InwardDate);
    //console.log('Id of inword is:' + id);
    return this.http.put<RefInwards[]>(this.rootURL + id,body,{headers:httpOptions.headers});
    

  }

  DeleteRefInwards(id:number){
    return this.http.delete<RefInwards[]>(this.rootURL + id);
  }

    /*this.http.get('',{headers:httpOptions.headers})
    .map((data:Response)=>{
      return data.json() as Inward[];
    }).toPromise().then(x=>{
      this.inwardlist=x;
    })
  }*/
   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('RefInwards: ' + message);
  }
}
