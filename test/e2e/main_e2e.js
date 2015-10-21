/**
 * Created by RaphaelV on 20/10/2015.
 */
describe('E2E: main page', function(){


  beforeEach(function(){
    browser.get('http://localhost:9000/')
  })

  it('should contain 3 beers', function(){
    var beerCount = element.all(by.repeater('beer in beers')).count();


    expect(beerCount).toBe(6);
  });

  it('should add a beer', function(){


    element(by.model('newBeer.name')).sendKeys('test');
    element(by.model('newBeer.brouwer')).sendKeys('testBrouwer');

    element(by.buttonText('Save')).click();

    var result = element.all(by.repeater('beer in beers')).last().getText()
    expect(result).toBe('test')
  })
})
