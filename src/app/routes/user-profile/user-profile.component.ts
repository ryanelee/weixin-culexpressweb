import { WxUser } from '../../models/wx-user';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/core/service/storage.service';
import { UserService } from 'app/core/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  wxuser: WxUser;
  constructor(private _storage: StorageService, private _user: UserService) { }

  ngOnInit() {
    this.wxuser = this._storage.get('wxuser');
    this._user.getwxUserInfo(this.wxuser.openid).subscribe((user: any) => {
      if (user.err) {
        return alert(user.err)
      }
      this.wxuser = user;
    });
  }

}
