
counter = function() {
    var value = $('#resultsText').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        $('#totalChars').html(0);
        $('#charCount').html(0);
        $('#charCountNoSpace').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;

    $('#wordCount').html(wordCount);
    $('#totalChars').html(totalChars);
    $('#charCount').html(charCount);
    $('#charCountNoSpace').html(charCountNoSpace);
};

$(document).ready(function() {
    $('#count').click(counter);
    $('#resultsText').change(counter);
    $('#resultsText').keydown(counter);
    $('#resultsText').keypress(counter);
    $('#resultsText').keyup(counter);
    $('#resultsText').blur(counter);
    $('#resultsText').focus(counter);
});
