
class PricingCalculatorPage {
    get frame() {          
        return $('//iframe[@allow="clipboard-write https://cloud-dot-devsite-v2-prod.appspot.com"]');      
    }; 
    get subFrame() {          
        return $('//iframe[@id="myFrame"]');                               
    }; 
    get instancesField() {          
        return $('//md-input-container/child::input[@ng-model="listingCtrl.computeServer.quantity"]');                               
    };  
    get seriesOfMachineField() {
        return $('//md-select[@name="series"]/parent::md-input-container');
    };
    get seriesOfMachine() {
        return $('//md-option[@value="n1"]');
    };
    get typeOfMachineField() {
        return $('//label[text()="Machine type"]/parent::md-input-container');
    };
    get typeOfMachine() {
        return $('//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]');
    };
    get gpuCheckbox() {
        return $('//md-checkbox[@ng-model="listingCtrl.computeServer.addGPUs"]');
    };
    get numberOfGpuField() {
        return $('//md-select[@placeholder="Number of GPUs"]');
    };
    get numberOfGpu() {
        return $('md-option[value="1"][class="ng-scope md-ink-ripple"][ng-disabled]');
    };
    get typeOfGpuField() {
        return $('//md-select[@placeholder="GPU type"]');
    };
    get typeOfGpu() {
        return $('//md-option[@value="NVIDIA_TESLA_V100"]');
    };
    get localSsdField() {
        return $('//md-select[@placeholder="Local SSD"]');
    };
    get localSsd() {
        return $('(//md-option[@ng-value="item.value"][@value="2"])[2]');
    };
    get locationOfDatacenterField() {
        return $('//md-select[@placeholder="Datacenter location"]');
    };
    get locationOfDatacenter() {
        return $('//md-option[@id="select_option_241"][@value="europe-west3"]');
    };
    get commitedUsageField() {
        return $('//md-select[@placeholder="Committed usage"]');
    };
    get commitedUsage() {
        return $('(//md-option[@ng-value="1"][@value="1"])[2]');
    };
    get estimateBtn() {
        return $('//button[@aria-label="Add to Estimate"]');
    };
    get vmClass() {
        return $('//div[contains (text(),"VM class: regular")]');
    };
    get instanceType() {
        return $('//div[contains (text(),"Instance type: n1-standard-8")]');
    };
    get region() {
        return $('//div[contains (text(),"Region: Frankfurt")]');
    };
    get localSsdInfo() {
        return $('//div[contains (text(),"Local SSD: 2x375 GiB")]');
    };
    get commitmentTerm() {
        return $('//div[contains (text(),"Commitment term: 1 Year")]');
    };
    get estimatedCostInfo() {
        return $('(//b[@class="ng-binding"])[1]');
    };
    get emailEstimateBtn() {
        return $('//button[@id="email_quote"]');
    };
    get emailEstimateField() {
        return $('//input[@ng-model="emailQuote.user.email"]');
    };
    get emailSendBtn() {
        return $('//button[@aria-label="Send Email"]');
    };


    async openPricingCalculatorPage() {
        await browser.url('https://cloud.google.com/products/calculator');
    };   
    async sendTextToInstancesField(text) {
        let frame = await this.frame;                          
        await browser.switchToFrame(frame); 
        let subFrame = await this.subFrame;
        await browser.switchToFrame(subFrame);        
        let instancesField = await this.instancesField;
        await instancesField.setValue(text);
    };
    async selectSeriesOfMachine() {
        let seriesOfMachineField = await this.seriesOfMachineField;
        await seriesOfMachineField.click();
        let seriesOfMachine = await this.seriesOfMachine; 
        await seriesOfMachine.click();
    };
    async selectTypeOfMachine() {
        let typeOfMachineField = await this.typeOfMachineField;
        await typeOfMachineField.click();
        let typeOfMachine = await this.typeOfMachine; 
        await typeOfMachine.click();
    };
    async addGpuCheckbox() {
        let gpuCheckbox = await this.gpuCheckbox;
        await gpuCheckbox.click();
    };
    async selectNumberOfGpu() {
        let numberOfGpuField = await this.numberOfGpuField;
        await numberOfGpuField.click();
        let numberOfGpu = await this.numberOfGpu; 
        await numberOfGpu.click();
    };
    async selectTypeOfGpu() {
        let typeOfGpuField = await this.typeOfGpuField;
        await typeOfGpuField.click();
        let typeOfGpu = await this.typeOfGpu; 
        await typeOfGpu.click();
    };
    async selectLocalSsd() {
        let localSsdField = await this.localSsdField;
        await localSsdField.click();
        let localSsd = await this.localSsd; 
        await localSsd.click();
    };
    async selectLocationOfDatacenter() {
        let locationOfDatacenterField = await this.locationOfDatacenterField;
        await locationOfDatacenterField.click();
        let locationOfDatacenter = await this.locationOfDatacenter; 
        await locationOfDatacenter.click();
    };
    async selectCommitedUsage() {
        let commitedUsageField = await this.commitedUsageField;
        await commitedUsageField.click();
        let commitedUsage = await this.commitedUsage; 
        await commitedUsage.click();
    };
    async clickEstimateBtn() {
        let estimateBtn = await this.estimateBtn;
        await estimateBtn.click();
    };
    async getTextOfVmClass() {    
        let elem = await this.vmClass; 
        let textOfVmClass = await elem.getText();
        return textOfVmClass;   
    };
    async getTextOfInstanceType() {    
        let elem = await this.instanceType; 
        let textOfInstanceType = await elem.getText();
        return textOfInstanceType;   
    };
    async getTextOfRegion() {    
        let elem = await this.region; 
        let textOfRegion = await elem.getText();
        return textOfRegion;   
    };
    async getTextOfLocalSsd() {    
        let elem = await this.localSsdInfo; 
        let textOfLocalSsd = await elem.getText();
        return textOfLocalSsd;   
    };
    async getTextOfCommitmentTerm() {    
        let elem = await this.commitmentTerm; 
        let textOfCommitmentTerm = await elem.getText();
        return textOfCommitmentTerm;   
    };
    async getTextOfEstimatedCost() {    
        let elem = await this.estimatedCostInfo; 
        let textOfEstimatedCost = await elem.getText();
        return textOfEstimatedCost;   
    };


    async clickEmailEstimateBtn() {
        let frame = await this.frame;                          
        await browser.switchToFrame(frame); 
        let subFrame = await this.subFrame;
        await browser.switchToFrame(subFrame);        
        let emailEstimateBtn = await this.emailEstimateBtn;
        await emailEstimateBtn.click();
    }; 
    async sendEmailToEmailEstimateField(adress) {
        let emailEstimateField = await this.emailEstimateField;
        await emailEstimateField.click();
        await emailEstimateField.setValue(adress);
    };
    async clickEmailSendBtn() {
        let emailSendBtn = await this.emailSendBtn;
        await emailSendBtn.click();
    };

    async fillCalculatorForm() {
        await this.openPricingCalculatorPage();                            
        await this.sendTextToInstancesField('4');
        await this.selectSeriesOfMachine();
        await this.selectTypeOfMachine();
        await this.addGpuCheckbox();    
        await this.selectTypeOfGpu(); 
        await this.selectNumberOfGpu();   
        await this.selectLocalSsd();
        await this.selectLocationOfDatacenter();
        await this.selectCommitedUsage();
        await this.clickEstimateBtn();
    }; 
};

module.exports = new PricingCalculatorPage();

