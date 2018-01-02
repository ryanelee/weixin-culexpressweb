import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()


export class AuthService {

  constructor(public storage: StorageService, public router: Router) { }

  isLoggedIn(): boolean {
    const user = this.storage.get('user');
    if (user && (user.phone || user.email)) {
      return true;
    } else {
      return false;
    }
  };

  setUser(user: User): void {
    this.storage.set('user', user);
  }

  judgeTheRoleIsRM(): boolean {
    const user = this.storage.get('user');
    if (user) {
      if (user.role === 'R') {
        return true;
      }
    }
    return false;
  }

  getUser(): void {
    return this.storage.get('user');
  }

  getJwtToken(): void {
    return this.storage.get('token');
  }
  logout(): void {
    this.storage.remove('user');
    this.storage.remove('jwtToken');
  }

}
