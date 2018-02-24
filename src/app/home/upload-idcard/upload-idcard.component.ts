import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-idcard',
  templateUrl: './upload-idcard.component.html',
  styleUrls: ['./upload-idcard.component.css']
})
export class UploadIdcardComponent implements OnInit {

  customerType: String = 'cul';

  constructor() { }

  ngOnInit() {
  }

}
