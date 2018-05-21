import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Zasranets } from './zasranets';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ZasranetsService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ZasranetsService: ' + message);
  }
  private zasrantsyUrl = 'api/zasrantsy';  // URL to web api

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** GET zasrantsy from the server */
  getZasrantsy(): Observable<Zasranets[]> {
    return this.http.get<Zasranets[]>(this.zasrantsyUrl)
      .pipe(
        tap(zasrantsy => this.log(`Список участников`)),
        catchError(this.handleError('getZasrantsy', []))
    );
  }
  /** GET zasranets by id. Return `undefined` when id not found */
  getZasranetsNo404<Data>(id: number): Observable<Zasranets> {
    const url = `${this.zasrantsyUrl}/?id=${id}`;
    return this.http.get<Zasranets[]>(url)
      .pipe(
        map(zasrantsy => zasrantsy[0]), // returns a {0|1} element array
        tap(z => {
          const outcome = z ? `fetched` : `did not find`;
          this.log(`${outcome} zasranets id=${id}`);
        }),
        catchError(this.handleError<Zasranets>(`getZasranets id=${id}`))
      );
  }
  /** GET zasranets by id. Will 404 if id not found */
  getZasranets(id: number): Observable<Zasranets> {
    const url = `${this.zasrantsyUrl}/${id}`;
    return this.http.get<Zasranets>(url).pipe(
      tap(_ => this.log(`Представленный участник id=${id}`)),
      catchError(this.handleError<Zasranets>(`getZasranets id=${id}`))
    );
  }
  /* GET zasrantsy whose name contains search term */
  searchZasrantsy(term: string): Observable<Zasranets[]> {
    if (!term.trim()) {
      // if not search term, return empty zasranets array.
      return of([]);
    }
    return this.http.get<Zasranets[]>(`${this.zasrantsyUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found zasrantsy matching "${term}"`)),
      catchError(this.handleError<Zasranets[]>('searchZasrantsy', []))
    );
  }

  /** PUT: update zasranets on the server */
  updateZasranets (zasranets: Zasranets): Observable<any> {
    return this.http.put(this.zasrantsyUrl, zasranets, httpOptions).pipe(
      tap(_ => this.log(`Новый участник id=${zasranets.id}`)),
      catchError(this.handleError<any>('updateZasranets'))
  );
}
  /** POST: add a new zasranets to the server */
  addZasranets (zasranets: Zasranets): Observable<Zasranets> {
    return this.http.post<Zasranets>(this.zasrantsyUrl, zasranets, httpOptions).pipe(
      tap((zasranets: Zasranets) => this.log(`Добавленный участник w/ id=${zasranets.id}`)),
      catchError(this.handleError<Zasranets>('addZasranets'))
    );
  }
  /** DELETE: delete the hero from the server */
deleteZasranets (zasranets: Zasranets | number): Observable<Zasranets> {
  const id = typeof zasranets === 'number' ? zasranets : zasranets.id;
  const url = `${this.zasrantsyUrl}/${id}`;

  return this.http.delete<Zasranets>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted zasranets id=${id}`)),
    catchError(this.handleError<Zasranets>('deleteZasranets'))
  );
}

}
