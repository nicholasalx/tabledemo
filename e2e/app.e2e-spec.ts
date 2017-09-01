import { TabledemoPage } from './app.po';

describe('tabledemo App', () => {
  let page: TabledemoPage;

  beforeEach(() => {
    page = new TabledemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
