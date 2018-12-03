import { D3StarburstV1Page } from './app.po';

describe('d3-starburst-v1 App', () => {
  let page: D3StarburstV1Page;

  beforeEach(() => {
    page = new D3StarburstV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
