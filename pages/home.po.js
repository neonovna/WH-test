'use strict';

module.exports = {
  locators: {
    //search_btn: element(by.xpath("//button[@class='btn-search-magnifier']")),
    search_btn: element(by.className("btn-search-magnifier")),

    search_input: element(by.xpath("//input[@placeholder='Search for games...']")),
    search_result_title: element(by.xpath("//span[contains(.,'search results')]")),
    game_block: element(by.xpath("//img[@alt='Mayfair Roulette']")),
    play_btn: element(by.className("o-btn tile__button-play")),
    login_form: element(by.className("modal modal-login")),


  },

  go: function() {
    browser.get("https://vegas.williamhill.com/en-gb/");
    browser.ignoreSynchronization = true;
    var title = browser.getTitle();
    expect(title).toEqual('Play Online Casino Games at William Hill Vegas')
  }
}
