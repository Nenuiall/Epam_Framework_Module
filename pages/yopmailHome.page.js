
class YopmailPage {
  get randomEmailAddressBtn() {
      return $('//a[@title="Disposable Email Address Generator creates a new temporary email address for you in one click!"]//b[1]');        
  }; 
  get newAdressBtn() {
      return $('//span[@class="notmobile"][normalize-space()="Copy to clipboard"]');        
  };
  get newAdressField() {
      return $('//div[@id="egen"]');        
  };
   
  async getRandomEmailAddress() {
      let randomEmailAddressBtn = await this.randomEmailAddressBtn;
      await randomEmailAddressBtn.click();
  };
  async getTextOfRandomEmailAddress() { 
      let elem = await this.newAdressField;
      let textOfRandomEmailAddress = await elem.getText();
      return textOfRandomEmailAddress;   
  }; 
};

module.exports = new YopmailPage();
