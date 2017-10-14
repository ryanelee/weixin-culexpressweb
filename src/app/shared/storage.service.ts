
import { Injectable } from '@angular/core';

@Injectable()

export class StorageService {
  set(key, value) {
    if (typeof value != 'object') {
      return "type error"
    }
    value = JSON.stringify(value);
    window.localStorage.setItem(key, value);
  }
  get(key): any {
    let value = window.localStorage.getItem(key);
    value = JSON.parse(value);
    return value
  }

  setValue(key, value) {
    window.localStorage.setItem(key, value);
  }
  getValue(key): any {
    let value = window.localStorage.getItem(key);
    return value
  }

  remove(key) {
    window.localStorage.removeItem(key);
  }


  getSession(key): any {
    let value = window.sessionStorage.getItem(key);
    value = JSON.parse(value);
    return value
  }
  setSession(key, value) {
    if (typeof value != 'object') {
      return "type error"
    }
    value = JSON.stringify(value);
    window.sessionStorage.setItem(key, value);
  }

  getSessionVal(key): any {
    let value = window.sessionStorage.getItem(key);
    return value
  }
  setSessionVal(key, value) {
    window.sessionStorage.setItem(key, value);
  }

  removeSession(key) {
    window.sessionStorage.removeItem(key);
  }

}
