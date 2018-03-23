import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import {InwardStatus} from '../models/inward-status';

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
export class InwardStatusService {
  statuslist:InwardStatus[];
  selectedStatus :InwardStatus;
  private rootURL ='http://localhost:44664/api/InwardStatus';
  constructor(private http :HttpClient) { }
  
  getInwardStatus():Observable<InwardStatus[]>{
    return this.http.get<InwardStatus[]>(this.rootURL,{headers: httpOptions.headers})
    .pipe(
      tap(Branch =>this.log('fetched getInwardStatus')),
      catchError(this.handleError('getInwardStatus',[]))
    );
  }


  PostInwardStatus(inst : InwardStatus){
    var body=JSON.stringify(inst);
    //console.log('Branch Name in service:' + br.BranchName);
    return this.http.post<InwardStatus[]>(this.rootURL,body,{headers:httpOptions.headers});

    /* var body=JSON.stringify(inw);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method : RequestMethod.Post});
    return this.http.post(this.rootURL,body,requestOptions).map(x => x.json()); */

  }

  PutInwardStatus(id:number, inst){
    var body=JSON.stringify(inst);
    //console.log('Date value in service:' +inw.InwardDate);
    //console.log('Id of inword is:' + id);
    return this.http.put<InwardStatus[]>(this.rootURL + id,body,{headers:httpOptions.headers});
    

  }

  DeleteInwardStatus(id:number){
    return this.http.delete<InwardStatus[]>(this.rootURL + id);
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
    console.log('InwardStatusService: ' + message);
  }
}
