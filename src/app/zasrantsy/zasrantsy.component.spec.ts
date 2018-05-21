import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasrantsyComponent } from './zasrantsy.component';

describe('ZasrantsyComponent', () => {
  let component: ZasrantsyComponent;
  let fixture: ComponentFixture<ZasrantsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZasrantsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZasrantsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
