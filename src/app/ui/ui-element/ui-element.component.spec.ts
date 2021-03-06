import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElementComponent } from './ui-element.component.ts';

describe('UiElementComponent', () => {
  let component: UiElementComponent;
  let fixture: ComponentFixture<UiElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
