
class YopmailBoxPage {
    get estimatedMonthlyCost() {
        return $('//h3[normalize-space()="USD 1,082.77"]');        
    };
    get mailFrame() {
        return $('//iframe[@id="ifmail"]');        
    };

    async switchToMailFrame() {
        let mailFrame = await this.mailFrame;                          
        await browser.switchToFrame(mailFrame);
    }; 
    async getTextOfEstimatedMonthlyCost() {    
        let elem = await this.estimatedMonthlyCost; 
        let textOfEstimatedMonthlyCost = await elem.getText();
        return textOfEstimatedMonthlyCost;   
    }; 
  };  
  
  module.exports = new YopmailBoxPage();
