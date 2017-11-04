import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInsertComponent } from './candidate-insert.component';

describe('CandidateInsertComponent', () => {
  let component: CandidateInsertComponent;
  let fixture: ComponentFixture<CandidateInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
