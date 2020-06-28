import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMenuComponent } from './input-menu.component';

describe('InputMenuComponent', () => {
  let component: InputMenuComponent;
  let fixture: ComponentFixture<InputMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
