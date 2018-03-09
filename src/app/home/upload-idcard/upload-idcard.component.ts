import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, pipe } from 'rxjs/Rx';
import { interval } from 'rxjs/observable/interval';

import { FileUploader } from 'ng2-file-upload';

import { UploadIDCardModel } from 'app/models/customer/uploadIDCard';
import { CommonApiService } from 'app/core/service/common-api.service'
import { trackingNumberFormatValidator } from 'app/shared/cul-trackingnumber-validator.directive';
import { ValidateOnBlurDirective } from 'app/shared/validate-on-blur.directive';
import { environment } from '../../../environments/environment';

let URL = `${environment.api}/customermessage/uploadImage?customerNumber=`;

@Component({
  selector: 'app-upload-idcard',
  templateUrl: './upload-idcard.component.html',
  styleUrls: ['./upload-idcard.component.css']
})
export class UploadIdcardComponent implements OnInit {

  isSubmittingData = false;
  customerType: String = 'cul';
  showUploader = false;
  showFrontDeleteButton = false;
  showBackDeleteButton = false;
  data: UploadIDCardModel = {};
  form: FormGroup;
  public uploader: FileUploader = new FileUploader({url: URL});

  constructor(private element: ElementRef,
    private _service: CommonApiService) {}

  ngOnInit() {
    this.data.idForever = 'false';
    this.form = new FormGroup({
      customerType: new FormControl(),
      twOrder: new FormControl(),
      receivePersonName: new FormControl(),
      IDCard: new FormControl(),
      IDCardExpiredDate: new FormControl({value: (new Date()), disabled: this.data.idForever === 'true' ? true : null}),
      IDForever: new FormControl(),
      IDCardFrontImage: new FormControl(),
      IDCardBackImage: new FormControl(),
      cellphoneNumber: new FormControl(),
      telephoneNumber: new FormControl(),
      note: new FormControl(),
      emailAddress: new FormControl(),
      trackingNumber: new FormControl('',
        [
          trackingNumberFormatValidator(/cul\d{9,}/i)
        ]
      )
    });
  }

  get trackingNumber() { return this.form.get('trackingNumber'); }
  get receivePersonName() { return this.form.get('receivePersonName'); }
  get IDCard() { return this.form.get('IDCard'); }
  get IDCardFrontImage() { return this.form.get('IDCardFrontImage')};
  get IDCardBackImage() { return this.form.get('IDCardBackImage')};
  get IDCardExpiredDate() { return this.form.get('IDCardExpiredDate')};
  get cellphoneNumber() { return this.form.get('cellphoneNumber')};
  get telephoneNumber() { return this.form.get('telephoneNumber')};
  get emailAddress() { return this.form.get('emailAddress')};

  onCustomerTypeChange() {
    if (this.customerType === 'taobao') {
      this.form.removeControl('trackingNumber');
    } else {
      this.form.addControl('trackingNumber', new FormControl('', [
        Validators.required,
        trackingNumberFormatValidator(/cul\d{9,}/i)
      ]));
      this.trackingNumber.updateValueAndValidity();
    }

  }
  changeListnerFront(event) {
    const reader = new FileReader();
    const image = this.element.nativeElement.querySelector('.imageFront');

    reader.onload = (e: any) => {
        image.src = e.target.result;
        this.showFrontDeleteButton = true;
    };

    if (event.target.files.length < 1) {
      return;
    }
    reader.readAsDataURL(event.target.files[0]);
    this.data.idCardFrontImage = event.target.files[0].path;
    this.IDCardFrontImage.setErrors({'required': null});
    // this.IDCardFrontImage.markAsDirty();
  }

  changeListnerBack(event) {
    const reader = new FileReader();
    const image = this.element.nativeElement.querySelector('.imageBack');

    reader.onload = (e: any) => {
        image.src = e.target.result;
        this.showBackDeleteButton = true;
    };

    if (event.target.files.length < 1) {
      return;
    }
    reader.readAsDataURL(event.target.files[0]);
    this.data.idCardBackImage = event.target.files[0].path;
    this.IDCardBackImage.setErrors({'required': null});
    // this.IDCardBackImage.markAsTouched();
  }

  deleteFrontImage() {
    const image = this.element.nativeElement.querySelector('.imageFront');
    image.src = '';
    this.showFrontDeleteButton = false;
    this.data.idCardFrontImage = '';
    this.IDCardFrontImage.setErrors({'required': true});
    // this.IDCardFrontImage.markAsTouched();
  }

  deleteBackImage() {
    const image = this.element.nativeElement.querySelector('.imageBack');
    image.src = '';
    this.showBackDeleteButton = false;
    this.data.idCardBackImage = '';
    this.IDCardBackImage.setErrors({'required': true});
    // this.IDCardBackImage.markAsTouched();
  }

  onIDForeverChange() {
    if (this.data.idForever === 'true') {
      this.IDCardExpiredDate.disable();
    } else {
      this.IDCardExpiredDate.enable();
    }
  }

 verifyTrackingNumber(value: string) {
    if (!value) {
      return;
    }
    this.showUploader = false;
    this._service.verifyCULPackageNumber({
      trackingNumber: value
    }).subscribe((data: any) => {
      console.log(data);
      if (!data || data.code === '999') {
        this.trackingNumber.setErrors({
          'invalid': true
        });

        return;
      }

      if (data && data.data && data.data.trackingNumber && data.data.trackingNumber.toLowerCase() !== value.toLowerCase()) {
        this.trackingNumber.setErrors({
          'invalid': true
        });

        return;
      }

      URL += data.data.customerNumber;
      this.uploader = new FileUploader({url: URL});
      this.showUploader = true;
    })
  }

  onSubmit() {
    if (!this.data) {
      return;
    }

    // verify image
    if (!this.data.idCardFrontImage) {
      this.IDCardFrontImage.setErrors({'required': true});
    }

    if (!this.data.idCardBackImage) {
      this.IDCardBackImage.setErrors({'required': true});
    }

    if (this.customerType === 'cul') {
      this.data.authType = '1';
    } else {
      this.data.authType = '2';
    }

    this.uploader.queue.forEach(image => {
      console.log(image);
      image.onComplete = (res: string, status: number, header: any) => {
        console.log(res, status);
      }
    })

    // upload images
    // const uploader$ = new Observable(observer => {
    //   observer.next(() => {
    //     if (this.uploader && this.uploader.queue && this.uploader.queue.length > 0) {
    //       this.uploader.uploadAll();
    //     }
    //   }),
    //   observer.error(err => {
    //     this.isSubmittingData = false;
    //     console.log(err);
    //   })
    // });

    // uploader$.subscribe((uploader: any) => {
    //   this.isSubmittingData = true;
    //   console.log(uploader);
    //   if (this.data.authType === '1') {
    //     this._service.uploadIDCard(this.data).subscribe({
    //       next: res => {
    //         console.log(res);
    //         this.isSubmittingData = false;
    //       },
    //       error: err => {
    //         this.isSubmittingData = false;
    //         console.log(err);
    //       }
    //     });
    //   } else {
    //     this._service.uploadTaobaoIDCard(this.data).subscribe({
    //       next: res => {
    //         console.log(res);
    //         this.isSubmittingData = false;
    //       },
    //       error: err => {
    //         console.log(err);
    //         this.isSubmittingData = false;
    //       }
    //     });
    //   }
    // });
  }
}
