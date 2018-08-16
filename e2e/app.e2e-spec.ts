import { RecipeAddPage } from './app.po';

describe('recipe-add App', function() {
  let page: RecipeAddPage;

  beforeEach(() => {
    page = new RecipeAddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
