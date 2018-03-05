import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as VConsole from 'vconsole';


if (environment.production) {
  enableProdMode();
} else {
  const vConsole = new VConsole();
  // setTimeout(() => {
  //   const vBtn = document.querySelector('#__vconsole .vc-switch') as HTMLElement;
  //   if (vBtn) {
  //     vBtn.innerHTML = 'Console';
  //     vBtn.style.marginBottom = 'env(safe-area-inset-bottom)';
  //   }
  // }, 2000);

  // const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  // const r = window.location.search.substr(1).match(reg);
  // console.log('window.location.search', window.location.search);
  // console.log('r', r);



  const url = location.search;
  const theRequest: any = new Object();
  if (url.indexOf('?') !== -1) {
    const str = url.substr(1);
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
    }
  }
  if (theRequest.openid || theRequest.code) {
    const wxObj: string = JSON.stringify(theRequest)
    window.localStorage.setItem('wxObj', wxObj);
  }

  setTimeout(() => {
    const vBtn = document.querySelector('#__vconsole .vc-switch') as HTMLElement;
    if (vBtn) {
      vBtn.innerHTML = 'Console';
      vBtn.style.marginBottom = 'env(safe-area-inset-bottom)';
    }
  }, 2000);


}

platformBrowserDynamic().bootstrapModule(AppModule);
