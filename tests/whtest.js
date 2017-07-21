var EC = protractor.ExpectedConditions;
var home_po = require("../pages/home.po.js");
var locator = home_po.locators;
var game_name = 'Mayfair Roulette'; // enter any Game Name for example: Golden Mane
describe('WH test suite', function() {

  it("Open home page", function() {
    home_po.go();
    browser.wait(EC.visibilityOf(locator.search_btn), 10000);

  });

  it("Click on Magnifier button", function() {
    locator.search_btn.click();
    expect(locator.search_input.isDisplayed()).toBe(true);

  });

  it("Search fo" + game_name + " game", function() {
    locator.search_input.click();
    locator.search_input.sendKeys(game_name);
    browser.wait(EC.visibilityOf(locator.search_result_title), 10000);
    expect(locator.search_result_title.isDisplayed()).toBe(true);
  });

  it("Hover over " + game_name + " game ", function() {
    browser.actions().mouseMove(home_po.get_game_block_by_name(game_name)).perform();
    browser.wait(EC.visibilityOf(locator.play_btn), 10000);
    expect(locator.play_btn.isDisplayed()).toBe(true);

  });

  it("Click on Play button", function() {
    locator.play_btn.click();
    browser.wait(EC.visibilityOf(locator.login_form), 10000);
    expect(locator.login_form.isDisplayed()).toBe(true);
  });

});
