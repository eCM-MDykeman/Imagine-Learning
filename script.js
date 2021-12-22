$(function () {

    $('.main-slide').each(function () {
        var htmlContent = $(this).find('.HtmlContent');
        $(htmlContent).wrapInner('<div class="written-content"></div>');
        var img = $(this).find('img');
        var imgSrc = $(img).attr('src');
        $(img).hide();
        $(htmlContent).append('<div class="image-content"><img src="' + imgSrc + '"/></div>');
    });

    $('.main-slide').wrapAll('<div class="slider slick-dotted" />');
    $('.slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $(function () {
        $('.announcements .HLLandingControl.SearchResults ul li').each(function () {
            var byline = $(this).find('.ByLine');
            var byLineLink = $(byline).find('a[id*="Name"]');
            if (byLineLink.length === 0) {
                var trimmedByline = $(byline).text().trim().slice(2, $(byline).text().trim().length);
                $(byline).text(trimmedByline);
            }
        });
    });


    $(".featured-slider ul li").each(function () {
        // Grab href for each news item
        var self = $(this),
            title = $(self).find("h3"),
            href = $(self)
                .find("h3 a")
                .attr("href");

        // handle image
        var imgContainer = '<div class="img-container loading" />';
        $(self).prepend(imgContainer);
        //   Ajax Call for each news item
        $.ajax({
            url: href,
            dataType: "html",
            success: success
        });


        function success(resp) {
            //   Get Image for each news item

            if ($(resp).find('.blogs-block').length) {
                var img = $(resp).find('.blogs-block .col-md-12 img');
            }
            if ($(resp).find('div[id*="DetailPanel"]').length) {
                var img = $(resp).find(
                    'div[id*="DetailPanel"] .col-md-10.col-sm-10 .col-md-12 img:first-of-type'
                );
            }

            // Adding image for event feed
            if ($(resp).find('.event-picture').length) {
                var img = $(resp).find(
                    '.event-picture img:first-of-type'
                );
            }
            // Adding an Image for discussions
            if ($(resp).find('div[id*="threadNav"]').length) {
                var img = $(resp).find(
                    '.threadViewDetailsContainer .MessageListContainer ul li:first-child  div[id*="pnlMessage"] img:first-of-type'
                );
            }


            if ($(img).attr('src') === undefined) {
                $(self).find(".img-container").addClass("no-image");
            }

            var src = $(img).attr("src"),
                //   Format for background inline style
                url = "url('" + src + "')";

            // Set each news image into respective img-containers
            $(self)
                .find(".img-container")
                .css("background-image", url);
            //   2 second timeout added to allow for ajax to load img
            setTimeout(function () {
                $(self)
                    .find(".img-container")
                    .removeClass("loading");
            }, 2000);
        }

        $(this).append('<a href="' + href + '" class="featured-button">Read More</a>')

    });

    $('.featured-slider ul').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.tabbed-content').prepend($('.tabbed-title'));

    $('.HLEngagement ul li').each(function () {
        var points = $(this).find('.label.label-success');
        $(this).find('.title-row .col-md-9').append($(points));
    });


    $('.bg-secondary .SearchInputs input').attr('placeholder', 'Search...');
    $('#searchColumn .SearchInputs input').attr('placeholder', 'Search...');

    handleFooter();


    $(".blog-tile ul li").each(function () {
        // Grab href for each news item
        var self = $(this),
            title = $(self).find("h3"),
            href = $(self)
                .find("h3 a")
                .attr("href");

        // handle image
        var imgContainer = '<div class="img-container loading" />';
        $(self).prepend(imgContainer);
        //   Ajax Call for each news item
        $.ajax({
            url: href,
            dataType: "html",
            success: success
        });


        function success(resp) {
            //   Get Image for each news item

            if ($(resp).find('.blogs-block').length) {
                var img = $(resp).find('.blogs-block .col-md-12 img');
            }
            if ($(resp).find('div[id*="DetailPanel"]').length) {
                var img = $(resp).find(
                    'div[id*="DetailPanel"] .col-md-10.col-sm-10 .col-md-12 img:first-of-type'
                );
            }

            if ($(img).attr('src') === undefined) {
                $(self).find(".img-container").addClass("no-image");
            }

            var src = $(img).attr("src"),
                //   Format for background inline style
                url = "url('" + src + "')";

            // Set each news image into respective img-containers
            $(self)
                .find(".img-container")
                .css("background-image", url);
            //   2 second timeout added to allow for ajax to load img
            setTimeout(function () {
                $(self)
                    .find(".img-container")
                    .removeClass("loading");
            }, 2000);
        }

        $(this).append('<a class="featured-button" href="' + href + '">Read More</a>');


    });


});

function handleFooter() {
    $('.footer-social-icon').wrapAll('<div class="footer-social" />');
    $('.footer-logo').insertBefore('.footer-social');
}