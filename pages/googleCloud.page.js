
class GoogleCloudPage {
  get searchBtn() {
    return $('//form[@class="devsite-search-form"]');        
  };
  get searchBox() {
    return $('//input[@class="devsite-search-field devsite-search-query"]');        
  };  
  get calculatorLink() {
    return $('//div[@class="gs-title"]//b[contains(text(),"Google Cloud Pricing Calculator")]');          
  };

  async openGoogleCloudPage() {
    await browser.url('https://cloud.google.com/');
  };
  async sendSearchText(text) {
    let searchBox = await this.searchBox;
    await searchBox.setValue(text);    
  };  
  async clickSearchBtn() {  
    let searchBtn = await this.searchBtn;
    await searchBtn.click(); 
  };
  async clickCalculatorLink() {
    let calculatorLink = await this.calculatorLink;
    await calculatorLink.click();
  }; 
  async goToPricingCalculatorPage() {
    await this.openGoogleCloudPage();
    await this.clickSearchBtn();
    await this.sendSearchText('Google Cloud Platform Pricing Calculator\n');        
    await this.clickCalculatorLink(); 
  };   
};

module.exports = new GoogleCloudPage();
