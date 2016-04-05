/* global casper*/

casper.test.begin('Send form', 3, function (test) {
    casper
        .start('http://localhost:5000/form')
        .then(function () {
            this.captureSelector('note-page.png', 'body');
        })
        .then(function () {
            this.fill('form#create-note', {
                name: 'new-note',
                text: 'some text of new note'
            }, true);
        })
        .then(function () {
            test.assertUrlMatch(/\/notes$/, 'should redirect to `/notes`');
        })
        .then(function () {
            var list = this.getElementsInfo('li');
            test.assert(list.length > 3, 'should new note not exists');

            var newNote = list.pop();
            test.assertEqual(newNote.text, 'new-note', 'should success add in and of list');
        })
        .run(function () {
            test.done();
        });
});
