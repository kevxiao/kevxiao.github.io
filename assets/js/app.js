function sizeBanner() {
    var e = $("html").not(".ie6").find("#banner");
    var intro = $(".intro");
    e.css({
        "min-height": $(window).height() - 30 + "px"
    });

    $(window).resize(function() {
        e.css({
            "min-height": $(window).height() - 30 + "px"
        })
    });

    intro.css({
        "top": (intro.parent().parent().height()/2 - intro.height()/2).toString() + "px"
    });
}

function onScroll() {
    var e = $(document).scrollTop();
    var menu = $(".main-menu");
    var menuItems = $("#menu").find("li a");
    var menuHeight = menu.height() + parseInt(menu.css("padding-top")) + parseInt(menu.css("padding-bottom"));
    menuItems.each(function() {
        var o = $(this),
            i = $(o.attr("href"));
        if (i.position().top <= e + menuHeight
            && i.position().top + i.height() + parseInt(i.css("padding-bottom")) + parseInt(i.css("padding-top")) > e + menuHeight) {
            menuItems.removeClass("active");
            o.addClass("active");
        } else {
            o.removeClass("active");
        }
    });
}

var num = 50;

$(window).bind("scroll", function() {
    var menu = $(".main-menu");
    $(window).scrollTop() > num ? menu.addClass("floating-menu") : menu.removeClass("floating-menu")
});

sizeBanner();

(new WOW).init();

smoothScroll.init({
    speed: 1e3,
    easing: "easeInOutCubic",
    offset: 0,
    updateURL: !1,
    callbackBefore: function() {},
    callbackAfter: function() {}
});

$(document).on("scroll", onScroll);

$("div.bgParallax").each(function() {
    var e = $(this);
    $(window).scroll(function() {
        var o = -($(window).scrollTop() / e.data("speed")),
            i = "50% " + o + "px";
        e.css("background-position", i)
    });
});

$(window).load(function() {
    $(".hcaption").hcaptions({
        effect: "fade"
    });
});

$(document).ready(function() {
    $("a.nivo-light").nivoLightbox({
        effect: "fade",
        theme: "default",
        keyboardNav: !0
    });
});

$(".carousel").carousel({
    interval: 3e3
});

$(document).ready(function() {
    var topBound = $("#banner").height() / 2,
        animTime = 500;
    $(window).scroll(function() {
        var backToTop = $(".back-to-top");
        $(window).scrollTop() > topBound ? backToTop.fadeIn(animTime) : backToTop.fadeOut(animTime)
    });

    $(".back-to-top").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, animTime);
        return true;
    });
    onScroll();
});

$("#contact-form").bootstrapValidator({
    message: "This value is not valid",
    feedbackIcons: {
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh"
    },
    fields: {
        Name: {
            validators: {
                notEmpty: {
                    message: "The Name is required and cannot be empty"
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: "The email address is required"
                },
                emailAddress: {
                    message: "The email address is not valid"
                }
            }
        },
        Message: {
            validators: {
                notEmpty: {
                    message: "The Message is required and cannot be empty"
                }
            }
        }
    }
});

$(window).load(function() {
    $("#status").fadeOut();

    $("#preloader").delay(350).fadeOut("slow");

    $("body").delay(350).css({
        overflow: "visible"
    });
});