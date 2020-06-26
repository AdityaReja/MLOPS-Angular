import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProjComponent } from './start-proj.component';

describe('StartProjComponent', () => {
  let component: StartProjComponent;
  let fixture: ComponentFixture<StartProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
