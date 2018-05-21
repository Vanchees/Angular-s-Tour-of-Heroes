import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasranetsDetailComponent } from './zasranets-detail.component';

describe('ZasranetsDetailComponent', () => {
  let component: ZasranetsDetailComponent;
  let fixture: ComponentFixture<ZasranetsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZasranetsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZasranetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
