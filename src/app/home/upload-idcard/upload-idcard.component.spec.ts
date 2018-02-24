import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIdcardComponent } from './upload-idcard.component';

describe('UploadIdcardComponent', () => {
  let component: UploadIdcardComponent;
  let fixture: ComponentFixture<UploadIdcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadIdcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadIdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
