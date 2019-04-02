import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkPiecesComponent} from './work-pieces.component';

describe('WorkPiecesComponent', () => {
  let component: WorkPiecesComponent;
  let fixture: ComponentFixture<WorkPiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkPiecesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
