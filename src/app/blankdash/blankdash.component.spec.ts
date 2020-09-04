import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankdashComponent } from './blankdash.component';

describe('BlankdashComponent', () => {
  let component: BlankdashComponent;
  let fixture: ComponentFixture<BlankdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
