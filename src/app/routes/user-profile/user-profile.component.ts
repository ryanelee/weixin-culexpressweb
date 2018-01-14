import { WxUser } from '../../models/wx-user';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/core/service/storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: WxUser;
  constructor(private _storage: StorageService) { }

  ngOnInit() {
    this.user = this._storage.get('wxuser');
    console.log('user', this.user);
  }

}
