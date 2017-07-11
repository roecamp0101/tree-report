import { TreeReportPage } from './app.po';

describe('tree-report App', () => {
  let page: TreeReportPage;

  beforeEach(() => {
    page = new TreeReportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tr!!');
  });
});
