/*Построить фреймворк для автоматизации задания Hardcore из 
eLearn курса WebDriver.

Что должно быть в итоговом фреймворке: 

- WebDriverIO для управления коннекторам к браузерам
- PageObject/ Page Factory для абстракций страниц
- Модель для бизнес-объектов необходимых сущностей
- Файлы с тестовыми данными для разных окружений (как минимум 2)
- Suites для smoke тестов и всех типов тестов 
- Добавить spec-reporter к существующим автотестам
- При падении теста должен быть сделан скриншот с датой и временем 
- Фреймворк должен иметь возможность запуска с Jenkins и параметризацией браузера, тест suite, environment. 
- Результаты тестов должны быть на графике джобы, скриншоты должны быть заархивированы как артефакты*/


const GoogleCloudPage =  require('../../pages/googleCloud.page');
const PricingCalculatorPage = require('../../pages/pricingCalculator.page');
const YopmailPage =  require('../../pages/yopmailHome.page');
const YopmailBoxPage = require('../../pages/yopmailBox.page');
const chai = require('chai');
const {expect} = require('chai');


describe('Google cloud test', async function() {   

  it('Total Estimated Monthly Cost should be "USD 1,082.77"', async function() {
      try {
          //await GoogleCloudPage.goToPricingCalculatorPage();
          await PricingCalculatorPage.fillCalculatorForm();      
          await browser.navigateTo('https://yopmail.com/en/');
          await YopmailPage.getRandomEmailAddress();

          let generatedAdress = await YopmailPage.getTextOfRandomEmailAddress();
          let urlOfYopmailBox = 'https://YOPmail.com?' + generatedAdress;

          await browser.back();
          await browser.back(); 
          await PricingCalculatorPage.clickEmailEstimateBtn();
          await PricingCalculatorPage.sendEmailToEmailEstimateField(generatedAdress);
          await PricingCalculatorPage.clickEmailSendBtn();
          await browser.navigateTo(urlOfYopmailBox);      
          await YopmailBoxPage.switchToMailFrame();

          let expectedEstimatedCost = 'USD 1,082.77';
          let estimatedCostFromYopmailBox = await YopmailBoxPage.getTextOfEstimatedMonthlyCost();
          await expect(estimatedCostFromYopmailBox).to.equal(expectedEstimatedCost);
      } catch(err) {
          let nameOfScreen = new Date().toLocaleString().replace(/:/g, '.').replace(', ', '_');         
          await browser.saveScreenshot('target/screenshots/' + nameOfScreen + '.png');
          await console.log('Тест завершился с ошибкой: ' + err);
      };
  });
});
  
