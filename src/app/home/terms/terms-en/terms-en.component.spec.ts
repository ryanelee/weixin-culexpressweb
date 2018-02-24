import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsEnComponent } from './terms-en.component';

describe('TermsEnComponent', () => {
  let component: TermsEnComponent;
  let fixture: ComponentFixture<TermsEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
