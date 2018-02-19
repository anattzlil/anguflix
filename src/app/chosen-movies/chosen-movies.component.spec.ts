import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenMoviesComponent } from './chosen-movies.component';

describe('ChosenMoviesComponent', () => {
  let component: ChosenMoviesComponent;
  let fixture: ComponentFixture<ChosenMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
