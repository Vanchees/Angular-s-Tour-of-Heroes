import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Zasranets }         from '../zasranets';
import { ZasranetsService }  from '../zasranets.service';

@Component({
  selector: 'app-zasranets-detail',
  templateUrl: './zasranets-detail.component.html',
  styleUrls: [ './zasranets-detail.component.css' ]
})
export class ZasranetsDetailComponent implements OnInit {
  @Input() zasranets: Zasranets;

  constructor(
    private route: ActivatedRoute,
    private zasranetsService: ZasranetsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getZasranets();
  }

  getZasranets(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.zasranetsService.getZasranets(id)
    .subscribe(zasranets => this.zasranets = zasranets);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
   this.zasranetsService.updateZasranets(this.zasranets)
     .subscribe(() => this.goBack());
 }
}
