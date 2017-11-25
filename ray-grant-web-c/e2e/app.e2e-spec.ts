import { RayGrantWebPage } from './app.po';

describe('ray-grant-web App', () => {
  let page: RayGrantWebPage;

  beforeEach(() => {
    page = new RayGrantWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
