import { SGPage } from './app.po';

describe('s-g App', () => {
  let page: SGPage;

  beforeEach(() => {
    page = new SGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
