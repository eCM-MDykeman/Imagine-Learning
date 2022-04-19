$(function () {

    $('#CommunityTabsContainer').removeClass('nav-tabs').addClass('nav-pills');

    $('#CommunityTabsContainer').wrap('<div class="community-nav-wrapper"></div>');

    if ($('.nested-community .breadcrumb').length) {
        var parentCommunityName = $('.nested-community .breadcrumb > li:first-of-type a').text().toLowerCase();

        $('body').addClass(parentCommunityName);
    }
    else if ($('h1:contains("Instructional Services")').length) {
        $('body').addClass('instructionalservices');
    }
    else if ($('h1:contains("Supplemental")').length) {
        $('body').addClass('supplemental');
    }
    else if ($('h1:contains("Courseware")').length) {
        $('body').addClass('courseware');
    }
    else if ($('h1:contains("Core")').length) {
        $('body').addClass('core');
    }

});