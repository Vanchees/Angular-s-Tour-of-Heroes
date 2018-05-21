import { Component, OnInit } from '@angular/core';
import { Zasranets } from '../zasranets';
import { ZasranetsService } from '../zasranets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  zasrantsy: Zasranets[] = [];

  constructor(private zasranetsService: ZasranetsService) { }

  ngOnInit() {
    this.getZasrantsy();
  }

  getZasrantsy(): void {
    this.zasranetsService.getZasrantsy()
      .subscribe(zasrantsy => this.zasrantsy = zasrantsy.slice(1, 5));
  }
}
