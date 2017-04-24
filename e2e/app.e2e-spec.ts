import { RoutingTestNewPage } from './app.po';

describe('routing-test-new App', () => {
  let page: RoutingTestNewPage;

  beforeEach(() => {
    page = new RoutingTestNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
