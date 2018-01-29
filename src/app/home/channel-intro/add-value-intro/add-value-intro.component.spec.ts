import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueIntroComponent } from './add-value-intro.component';

describe('AddValueIntroComponent', () => {
  let component: AddValueIntroComponent;
  let fixture: ComponentFixture<AddValueIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValueIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
