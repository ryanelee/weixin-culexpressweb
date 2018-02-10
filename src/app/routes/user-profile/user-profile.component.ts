import { WxUser } from 'app/models/wx-user';
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
    this.user = this._storage.get('wxuser') || this._storage.get('user');

    if (!this.user.headimgurl) {
      if (this.user.sex === 1) {
        this.user.headimgurl = 'assets/images/customer/profile/no-photo-female.jpg';
      } else {
        this.user.headimgurl = 'assets/images/customer/profile/no-photo-male.jpg';
      }
    }
    console.log('user', this.user);
  }

}
