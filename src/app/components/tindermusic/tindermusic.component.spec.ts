import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TindermusicComponent } from './tindermusic.component';

describe('TindermusicComponent', () => {
  let component: TindermusicComponent;
  let fixture: ComponentFixture<TindermusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TindermusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TindermusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
