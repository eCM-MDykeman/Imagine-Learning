$(function () {
    var summaryEditImg = $('.summary-edit .Content img:first-of-type').attr('src');

    $('.summary-edit .Content').prepend('<div class="img-container"/>');

    $('.summary-edit .img-container').css('background-image', 'url("' + summaryEditImg + '")');

    $('#CommunityTabsContainer').wrap('<div class="community-nav-wrapper"></div>');

    if ($('#MPInnerPageBanner').length === 0) {
        $('h1#PageTitleH1').wrap('<div id="MPInnerPageBanner"></div>');
    }


});