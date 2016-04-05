require('chai').should();

/* global browser*/
describe('Notes form', function () {
    it('should success add new note', function () {
        browser.url('http://localhost:5000/form');

        browser.setValue('#name', 'Selenium wdio');
        browser.setValue('#text', 'some text');
        browser.submitForm('#save');

        var notes = browser.getText('li');
        var actual = notes.pop();

        actual.should.be.equal('Selenium wdio');
    });
});
