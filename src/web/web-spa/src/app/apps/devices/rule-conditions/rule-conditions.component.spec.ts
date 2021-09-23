import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleConditionsComponent } from './rule-conditions.component';

describe('RuleConditionsComponent', () => {
  let component: RuleConditionsComponent;
  let fixture: ComponentFixture<RuleConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
