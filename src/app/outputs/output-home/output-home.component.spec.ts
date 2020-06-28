import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputHomeComponent } from './output-home.component';

describe('OutputHomeComponent', () => {
  let component: OutputHomeComponent;
  let fixture: ComponentFixture<OutputHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
