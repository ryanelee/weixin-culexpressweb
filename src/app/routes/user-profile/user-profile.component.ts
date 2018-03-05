import { WxUser } from 'app/models/wx-user';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/core/service/storage.service';
import { UserService } from 'app/core/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  constructor(private _storage: StorageService) { }

  ngOnInit() {
    this.user = this._storage.get('wxuser') || this._storage.get('user');

    if (!this.user.headimgurl) {
      if (this.user.photoUrl && this.user.photoUrl.length > 0) {
        this.user.headimgurl = this.user.photoUrl;
      } else if (this.user.sex === 1 || this.user.gender === 'F') {
        this.user.headimgurl = 'assets/images/customer/profile/no-photo-female.jpg';
      } else {
        this.user.headimgurl = 'assets/images/customer/profile/no-photo-male.jpg';
      }
    }
  }

}
