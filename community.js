$(function () {
    var summaryEditImg = $('.summary-edit .Content img:first-of-type').attr('src');

    $('.summary-edit .Content').prepend('<div class="img-container"/>');

    $('.summary-edit .img-container').css('background-image', 'url("' + summaryEditImg + '")');

});