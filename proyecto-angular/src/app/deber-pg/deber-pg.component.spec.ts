import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeberPgComponent } from './deber-pg.component';

describe('DeberPgComponent', () => {
  let component: DeberPgComponent;
  let fixture: ComponentFixture<DeberPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeberPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeberPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
