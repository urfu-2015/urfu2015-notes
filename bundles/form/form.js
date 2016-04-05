require('./form.css');

var $ = require('jquery');
window.$ = $;

var MAX_NAME_SIZE = 100;
var MAX_TEXT_SIZE = 1000;

var $name = $('#name');
var $text = $('#text');
var $save = $('#save');

$name.on('input', onInput);
$text.on('input', onInput);

function onInput() {
    var nameLenth = $name.val().length;
    var textLenth = $text.val().length;

    var isNameValid = nameLenth > 0 && nameLenth < MAX_NAME_SIZE;
    var isTextValid = textLenth > 0 && textLenth < MAX_TEXT_SIZE;
    var isValid = isNameValid && isTextValid;

    $save.prop('disabled', !isValid);
}
