import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentConsoleComponent } from './managment-console.component';

describe('ManagmentConsoleComponent', () => {
  let component: ManagmentConsoleComponent;
  let fixture: ComponentFixture<ManagmentConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagmentConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
