import { RoutingtestPage } from './app.po';

describe('routingtest App', function() {
  let page: RoutingtestPage;

  beforeEach(() => {
    page = new RoutingtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
