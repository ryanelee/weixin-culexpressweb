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
  wxuser: any;
  constructor(private _storage: StorageService, private _user: UserService) { }

  ngOnInit() {

    this.user = this._storage.get('user');
    if (this.user.photoUrl && this.user.photoUrl.length > 0) {
      this.user.headimgurl = this.user.photoUrl;
    } else if (this.user.sex === 1 || this.user.gender === 'F') {
      this.user.headimgurl = 'assets/images/customer/profile/no-photo-female.jpg';
    } else {
      this.user.headimgurl = 'assets/images/customer/profile/no-photo-male.jpg';
    }
    if (this._storage.get('wxuser')) {
      this.wxuser = this._storage.get('wxuser');
      this._user.getwxUserInfo(this.wxuser.openid).subscribe((user: any) => {
        this.wxuser.point = user.point;
        this.user.point = this.wxuser.point
        this.user.headimgurl = this.wxuser.headimgurl
      })
    }
  }

}
