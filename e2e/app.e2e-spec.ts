import { TestFinalPage } from './app.po';

describe('test-final App', () => {
  let page: TestFinalPage;

  beforeEach(() => {
    page = new TestFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
