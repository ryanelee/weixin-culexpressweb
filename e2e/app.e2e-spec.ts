import { WeixinCulwebPage } from './app.po';

describe('weixin-culweb App', () => {
  let page: WeixinCulwebPage;

  beforeEach(() => {
    page = new WeixinCulwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
