import { Component, OnInit } from '@angular/core';

import { Zasranets } from '../zasranets';
import { ZasranetsService } from '../zasranets.service';

@Component({
  selector: 'app-zasrantsy',
  templateUrl: './zasrantsy.component.html',
  styleUrls: ['./zasrantsy.component.css']
})
export class ZasrantsyComponent implements OnInit {

  zasrantsy: Zasranets[];

  constructor(private zasranetsService: ZasranetsService) { }

  ngOnInit() {
    this.getZasrantsy();
  }

  getZasrantsy(): void {
    this.zasranetsService.getZasrantsy()
        .subscribe(zasrantsy => this.zasrantsy = zasrantsy);
  }
  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.zasranetsService.addZasranets({ name } as Zasranets)
    .subscribe(zasranets => {
      this.zasrantsy.push(zasranets);
    });
  }
  delete(zasranets: Zasranets): void {
    this.zasrantsy = this.zasrantsy.filter(z => z !== zasranets);
    this.zasranetsService.deleteZasranets(zasranets).subscribe();
  }
}
