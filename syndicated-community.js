$(function () {

    $('#CommunityTabsContainer').removeClass('nav-tabs').addClass('nav-pills');

    $('#CommunityTabsContainer').wrap('<div class="community-nav-wrapper"></div>');

    if ($('#MPInnerPageBanner').length === 0) {
        $('h1#PageTitleH1').wrap('<div id="MPInnerPageBanner"></div>');
    }

});