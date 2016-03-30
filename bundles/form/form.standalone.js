var webdriverio = require('webdriverio');
var options = {desiredCapabilities: {browserName: 'firefox'}};
var client = webdriverio
    .remote(options)
    .init();

client
    .url('http://localhost:5000/form')
    .setValue('#name', 'Selenium standalone')
    .setValue('#text', 'some text')
    .submitForm('#save')
    .getText('li')
    .then(function (notes) {
        var actual = notes.pop();
        console.log(actual);
    })
    .end();

