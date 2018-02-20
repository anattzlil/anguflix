import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedMovieComponent } from './extended-movie.component';

describe('ExtendedMovieComponent', () => {
  let component: ExtendedMovieComponent;
  let fixture: ComponentFixture<ExtendedMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
