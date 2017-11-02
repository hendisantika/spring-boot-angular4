import { CandidateUiPage } from './app.po';

describe('candidate-ui App', () => {
  let page: CandidateUiPage;

  beforeEach(() => {
    page = new CandidateUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
