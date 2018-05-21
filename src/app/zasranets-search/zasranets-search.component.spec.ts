import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasranetsSearchComponent } from './zasranets-search.component';

describe('ZasranetsSearchComponent', () => {
  let component: ZasranetsSearchComponent;
  let fixture: ComponentFixture<ZasranetsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZasranetsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZasranetsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
