import {async, TestBed} from '@angular/core/testing';
import {BackgroundImageComponent} from './background-image.component';

describe('BackgroundImageComponent', () =>
{
  let component;
  let fixture;
  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
        declarations: [BackgroundImageComponent]
      })
      .compileComponents();
  }));
  beforeEach(() =>
  {
    fixture = TestBed.createComponent(BackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=background-image.component.spec.js.map
