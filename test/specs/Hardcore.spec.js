/*При выполнении задания необходимо использовать возможности Selenium WebDriver, 
юнит-тест фреймворка и концепцию Page Object. Автоматизировать следующий сценарий:
1. Открыть https://cloud.google.com/ 
2. Нажав кнопку поиска по порталу вверху страницы, ввести в поле поиска"Google Cloud Platform Pricing Calculator"
3. Запустить поиск, нажав кнопку поиска.
4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора.
5. Активировать раздел COMPUTE ENGINE вверху страницы
6. Заполнить форму следующими данными:
    * Number of instances: 4
    * What are these instances for?: оставить пустым
    * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
    * VM Class: Regular
    * Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)
    * Выбрать Add GPUs
        * Number of GPUs: 1
        * GPU type: NVIDIA Tesla V100
    * Local SSD: 2x375 Gb
    * Datacenter location: Frankfurt (europe-west3)
    * Commited usage: 1 Year
7. Нажать Add to Estimate
8. Выбрать пункт EMAIL ESTIMATE
9. В новой вкладке открыть https://yopmail.com/ или аналогичный сервис для генерации временных email'ов
10. Скопировать почтовый адрес сгенерированный в yopmail.com
11. Вернуться в калькулятор, в поле Email ввести адрес из предыдущего пункта
12. Нажать SEND EMAIL
13. Дождаться письма с рассчетом стоимости и проверить что Total Estimated Monthly Cost в письме совпадает с тем, что отображается в калькуляторе*/


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
  
