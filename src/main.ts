import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as VConsole from 'vconsole';


if (environment.production) {
  enableProdMode();
}else {
  const vConsole = new VConsole();
  // setTimeout(() => {
  //   const vBtn = document.querySelector('#__vconsole .vc-switch') as HTMLElement;
  //   if (vBtn) {
  //     vBtn.innerHTML = 'Console';
  //     vBtn.style.marginBottom = 'env(safe-area-inset-bottom)';
  //   }
  // }, 2000);
}

platformBrowserDynamic().bootstrapModule(AppModule);
