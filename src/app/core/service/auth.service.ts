import { User } from '../../models/user';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()


export class AuthService {

  constructor(public storage: StorageService, public router: Router) { }

  isLoggedIn(): boolean {
    const user = this.storage.get('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  setUser(user: User): void {
    this.storage.set('user', user);
  }


  getUser(): void {
    return this.storage.get('user');
  }

  getWxUser(): void {
    return this.storage.get('wxuser');
  }
  setWxUser(user): void {
    this.storage.set('wxuser', user);
  }
  ifWxUser() {
    const user = this.storage.get('wxuser');
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  getJwtToken(): void {
    return this.storage.getValue('jwtToken');
  }
  setJwtToken(token): void {
    return this.storage.setValue('jwtToken', token);
  }
  logout(): void {
    this.storage.remove('user');
    this.storage.remove('jwtToken');
  }

}
