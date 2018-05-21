import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Zasranets } from '../zasranets';
import { ZasranetsService } from '../zasranets.service';

@Component({
  selector: 'app-zasranets-search',
  templateUrl: './zasranets-search.component.html',
  styleUrls: ['./zasranets-search.component.css']
})
export class ZasranetsSearchComponent implements OnInit {
  zasrantsy$: Observable<Zasranets[]>;
  private searchTerms = new Subject<string>();

  constructor(private zasranetsService: ZasranetsService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.zasrantsy$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.zasranetsService.searchZasrantsy(term)),
    );
  }
}
