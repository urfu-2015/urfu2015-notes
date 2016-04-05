require('chai').should();

describe('Note form', function () {
    /* global $*/
    var $save;
    var $name;
    var $text;

    /* eslint no-extend-native: 1*/
    String.prototype.repeat = function (num) {
        return new Array(num + 1).join(this);
    };

    before(function () {
        $save = $('#save');
        $name = $('#name');
        $text = $('#text');
    });

    function inputTextTo($el, text) {
        $el.val(text).trigger('input');

        // $el.focus();
        // document.execCommand('insertText', false, text);
    }

    beforeEach(function () {
        inputTextTo($name, '');
        inputTextTo($text, '');
    });

    describe('save button disabled', function () {
        it('when form is empty', function () {
            $save.prop('disabled').should.be.true;
        });

        it('when text is empty', function () {
            inputTextTo($name, 'some value');

            $save.prop('disabled').should.be.true;
        });

        it('when name is empty', function () {
            inputTextTo($text, 'some value');

            $save.prop('disabled').should.be.true;
        });

        it('when name is long', function () {
            inputTextTo($name, '1'.repeat(101));
            inputTextTo($text, 'some value');

            $save.prop('disabled').should.be.true;
        });

        it('when text is long', function () {
            inputTextTo($name, 'some value');
            inputTextTo($text, '1'.repeat(1001));

            $save.prop('disabled').should.be.true;
        });
    });

    describe('save button enabled', function () {
        it('when name and text is valid', function () {
            inputTextTo($name, 'some value');
            inputTextTo($text, 'some value');

            $save.prop('disabled').should.be.false;
        });
    });

    it.only('screenshot', function () {
        takeScreenshot('note-page');
    });

    function takeScreenshot(fileName) {
        if (!window.callPhantom) {
            return;
        }

        /* global callPhantom*/
        callPhantom({screenshot: fileName});
    }
});
