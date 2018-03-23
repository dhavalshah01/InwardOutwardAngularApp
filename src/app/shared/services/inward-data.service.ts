import {Injectable} from '@angular/core';
import {Inward} from '../models/inward';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


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
export class InwardDataService {
  inwardlist:Inward[];
  selectedInward :Inward;
  private rootURL ='http://localhost:44664/api/Inwards/';

  constructor(private http :HttpClient) {}
  
  getInwards():Observable<Inward[]>{
    return this.http.get<Inward[]>(this.rootURL,{headers: httpOptions.headers})
    .pipe(
      tap(inwards =>this.log('fetched getInwards')),
      catchError(this.handleError('getInwards',[]))
    );
  }

  /* getInwards(){
    this.http.get(this.rootURL).map((data: Response)=>{
      return data.json() as Inward[];
    }).toPromise().then(x=>{
      this.inwardlist=x;
    })
  } */

  PostInwards(inw : Inward){
    var body=JSON.stringify(inw);
   // console.log('Date value in service:' + inw.InwDate);
    return this.http.post<Inward[]>(this.rootURL,body,{headers:httpOptions.headers});

    /* var body=JSON.stringify(inw);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method : RequestMethod.Post});
    return this.http.post(this.rootURL,body,requestOptions).map(x => x.json()); */

  }

  PutInwards(id:number, inw){
    var body=JSON.stringify(inw);
    console.log('Date value in service:' +inw.InwardDate);
    //console.log('Id of inword is:' + id);
    return this.http.put<Inward[]>(this.rootURL + id,body,{headers:httpOptions.headers});
    

  }

  DeleteInward(id:number){
    return this.http.delete<Inward[]>(this.rootURL + id);
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
    console.log('InwardService: ' + message);
  }
}
