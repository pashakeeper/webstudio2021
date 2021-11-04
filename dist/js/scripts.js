jQuery(document).ready(function () {
    $('.select').niceSelect();
    $('.slider_sell_page').slick({
        speed: 800,
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
        ]
    });

    $('.slider_clients').slick({
        speed: 800,
        cssEase: 'ease-in-out',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
});

    $('.reviews_section #page_rev').slick({
        speed: 800,
        cssEase: 'ease-in-out',
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('.slider_reviews').not('.slick-initialized').slick({
        speed: 800,
        cssEase: 'ease-in-out',
        slidesToShow: 1,
        dots: true

    });

    $('.slider_same_work').slick({
        speed: 800,
        cssEase: 'ease-in-out',
        slidesToShow: 3
    });

    new WOW().init();
    let btn = $('#button');
    let heAd = $('.header');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            btn.addClass('show');
            heAd.addClass('sticky');
        } else {
            btn.removeClass('show');
            heAd.removeClass('sticky');
        }
    });
    $('.marquee.left').marquee({
        duration: 20000,
        pauseOnHover: true,
        duplicated: true,
        startVisible: true
    });
    $('.marquee.right').marquee({
        direction: 'right',
        duration: 20000,
        pauseOnHover: true,
        duplicated: true,
        startVisible: true
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
    $('.tariff_plan_box a,.call,.result,.box_need .btn_bordered,.main_btn,.content.post .take_call,.section_04 .btn_bordered').click(function (e) {
        e.preventDefault();
        $('#modal_2').toggleClass('active');
        $('#overlay').toggleClass('active');
    });
    $('.btn_bordered.take_offer').click(function (e) {
        e.preventDefault();
        $('#modal_window').toggleClass('active');
        $('#overlay').toggleClass('active');
    });
    $('#overlay').click(function (e) {
        e.preventDefault();
        $('.modal_window').removeClass('active');
        $(this).removeClass('active');
        $('#modal_2').removeClass('active');
    });
    $('#close').click(function (e) {
        e.preventDefault();
        $('.modal_window').removeClass('active');
        $('#overlay').removeClass('active');
    });
    $('#close_2').click(function () {
        $('#modal_2').removeClass('active');
        $('#overlay').removeClass('active');
    });
    $('.info_box .info_footer').eq(2).addClass('mt-0');
    $('#read_adv_posts').click(function (e) {
        e.preventDefault();
        $('.toggle_content').slideToggle('fast');
    })
    fixBugs();
    menuFunc();
    themeColor();
    toolTip();
    readAbout();
    filterFrontPage();
    breadcrumbsSlide();
    youtubeAutoplay();
    loadmoreTeam();
    responciveCat();
    //loadMoreServices();
    let wdt = $(window).width();
    if (wdt < 600) {
        $('.menu-item-64').click(function (e) {
            e.preventDefault();
        });
    } else {
        return;
    }

});

//responsive cat
function responciveCat() {
    let wdt = $( window ).width();
    if (wdt <= 768) {
        $('#accordion .first_cat').slick({
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            infinite: false,
            focusOnSelect: true,
            initialSlide: 1,
            arrows: false
        })
        $('#accordion .child_terms').slick({
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            infinite: false,
            focusOnSelect: true,
            initialSlide: 1,
            arrows: false
        })
    }
}


//theme
function themeColor() {

    $('.nav-pills li button').click(function () {
        let radIant = $('button[data-bs-target="#pills-profile"]');
        if (radIant.hasClass('active')) {
            $('body').addClass('radiant');
            $('.footer_logo img').attr('src', '/wp-content/themes/webstudio/assets/img/logo_radiant.png');
            $('.close_modal img').attr('src', '/wp-content/themes/webstudio/assets/img/icons/close_dark.png');
            $('.logo a img').attr('src', '/wp-content/themes/webstudio/assets/img/logo_radiant.png');
        } else {
            $('body').removeClass('radiant');
            $('.footer_logo img').attr('src', '/wp-content/themes/webstudio/assets/img/footer_logo.png');
            $('.close_modal img').attr('src', '/wp-content/themes/webstudio/assets/img/icons/close.png');
            $('.logo a img').attr('src', '/wp-content/themes/webstudio/assets/img/logo.png');
        }
    });
}


//tooltip
function toolTip() {
    $('.modal_form_box label').hover(function () {
        $('.tooltip_custom').show('fast');
    }, function () {
        $('.tooltip_custom').hide('fast');
    });
}


function fixBugs() {
    $('#menu-item-2119, #menu-item-138').append('<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z" fill="white"/></svg>')
    $('#menu-item-2119, #menu-item-2119 a').click(function () {
        $('.main_menu_container .menu_box').hide();
        $('.main_menu_container__podmenu_1').show();
        return false;
    });
    $('#menu-item-138, #menu-item-138 a').click(function () {
        $('.main_menu_container .menu_box').hide();
        $('.main_menu_container__podmenu_2').show();
        return false;
    });
    $('.main_menu_container__prev').click(function () {
        $('.main_menu_container .menu_box').show();
        $('.main_menu_container__podmenu').hide();
    });
    var scrollNiceSelect = 0;
    $('#categoryfilter .nice-select').keydown(function (e) {
        var scrollItemsNice = $('#categoryfilter .nice-select .option').length;
        var scrollItemsNiceH = scrollItemsNice * 40;
        if (e.keyCode == '38') {
            if (scrollNiceSelect < 0) {
                scrollNiceSelect = 0;
            } else {
                scrollNiceSelect = scrollNiceSelect - 40;
            }

        }
        if (e.keyCode == '40') {
            if (scrollNiceSelect == scrollItemsNiceH) {
                scrollNiceSelect = scrollItemsNiceH;
            } else {
                scrollNiceSelect = scrollNiceSelect + 40;
            }
        }
        document.querySelector('#categoryfilter ul.list').scroll(0, scrollNiceSelect);
    });

    $('body').keyup(function (e) {
        console.log(e.keyCode);
        if (e.keyCode == '37') {
            $('.slick-prev').trigger('click')
        }
        if (e.keyCode == '39') {
            $('.slick-next').trigger('click')
        }
    });
}

//menu
function menuFunc() {
//burger
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.mobile_menu').toggleClass('active');
    });
    //menu hover
    let menuContainer = $('.main_menu_container');
    $("li:has( > ul)").addClass("has_submenu");

    $('.main_menu .menu-item-64').on('mouseover', function (e) {
        menuContainer.addClass('show');
        $('.overlay-blur').addClass('overlay-blur-show');
    });
    $('.main_menu .menu-item-64').on('mouseout', function (e) {
        menuContainer.removeClass('show');
        $('.overlay-blur').removeClass('overlay-blur-show');
        $('.main_menu_container .menu_box').show();
        $('.main_menu_container__podmenu').hide();
    });
    $(menuContainer).on('mouseover', function (e) {
        menuContainer.addClass('show');
        $('.overlay-blur').addClass('overlay-blur-show');
    });
    $(menuContainer).on('mouseout', function (e) {
        menuContainer.removeClass('show');
        $('.overlay-blur').removeClass('overlay-blur-show');
    });
    $('.main_menu .menu-item-64').on('touchstart', function (e) {
        menuContainer.addClass('show');
        $('.overlay-blur').addClass('overlay-blur-show');
    });
    $(menuContainer).on('touchstart', function (e) {
        menuContainer.addClass('show');
        $('.overlay-blur').addClass('overlay-blur-show');
    });

    $('.main_menu_container .close').click(function () {
        menuContainer.toggleClass('show');
        $('.overlay-blur').toggleClass('overlay-blur-show');
        $('.main_menu_container .menu_box').show();
        $('.main_menu_container__podmenu').hide();
        $('.sub_menu li.has_submenu').removeClass('active');
    });
    $('.main_menu_container .close').on('touchstart', function () {
        menuContainer.toggleClass('show');
        $('.overlay-blur').toggleClass('overlay-blur-show');
        $('.sub_menu li.has_submenu').removeClass('active');
        $('.main_menu_container .menu_box').show();
        $('.main_menu_container__podmenu').hide();
    });
    $('.sub_menu li.has_submenu').click(function () {
        if (!$(this).is('.active')) {
            $(this).addClass('active');
            console.log('active')
        } else {
            $(this).removeClass('active');
        }
    });

    $('.sub_menu li > a').on('touchstart', function () {
        $('.sub_menu li.has_submenu').removeClass('active');
    });
    $('nav ul').unwrap()
}

function readAbout() {
    $('.read_about').click(function (e) {
        e.preventDefault();
        $('.about_box').toggleClass('opened')
        $(this).hide('slow');
        $('.about_section .about__image_holder img').css({
            "min-height": "658px"
        });
        $('.dots, .line').show('fast');
        $('.about_hide_content').slideToggle('fast');
    });
    $('.btn_bordered.hide').click(function (e) {
        e.preventDefault();
        $('.about_box').toggleClass('opened')
        $('.about_section .about__image_holder img').css({
            "min-height": "712px"
        });
        $('.read_about').slideToggle('fast');
        $('.dots, .line').hide('fast');
        $('.about_hide_content').slideToggle('fast');
    })
}

function loadmoreTeam() {
    let start = 5,
        max = $(".team_content .col").length
    $.fn.showOnly = function (n) {
        return $(this).each(function (i) {
            if (i < n) $(this).show();
            else $(this).hide();
        });
    };
    $(".team_content .col").showOnly(start);
    $('.more_team').click(function (e) {
        $(this).addClass('clicked')
        e.preventDefault();
        $(".team_content .col").animate({
            height: 'show',
        }, 500, function () {
            $(this).showOnly(start + max);
        })
        if (!$(this).is('clicked')) {
            $('.more_team').html('Свернуть').attr('data-text', 'Свернуть').hide('slow');
        }
    });
}

function youtubeAutoplay() {
    var $videoSrc;
    $('.btn_play').click(function () {
        $videoSrc = $(this).data("src");
    });
    $('#modal_Video').on('shown.bs.modal', function () {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#modal_Video').on('hide.bs.modal', function () {
        $("#video").attr('src', $videoSrc);
    })
}

function loadmoreVideo() {
    $('.more_video').click(function () {

        var button = $(this),
            data = {
                'action': 'loadmore',
                'query': misha_loadmore_params.posts
            };

        $.ajax({ // you can also use $.post here
            url: '/wp-admin/admin-ajax.php', // AJAX handler
            data: data,
            type: 'POST',
            beforeSend: function (xhr) {
                button.text('Loading...');
            },
            success: function (data) {
                if (data) {
                    console.log('THIS IS DATA', data);

                    if (misha_loadmore_params.current_page == misha_loadmore_params.max_page)
                        button.remove();
                } else {
                    button.remove();
                }
            }
        });
    });
}


function filterFrontPage() {
    let content = $('.slider_sell_page');
    jQuery("#select").on("change", function () {
        var category = $('#select').val();

        data = {
            'action': 'filterposts',
            'category': category,
        };
        var delay = 1000;

        function slickCarousel() {
            $(content).slick({
                speed: 800,
                cssEase: 'ease-in-out'
            });
        }

        function destroyCarousel() {
            if ($(content).hasClass('slick-initialized')) {
                $(content).slick('destroy');
            }
        }

        $.ajax({
            url: "/wp-admin/admin-ajax.php",
            data: data,
            type: 'POST',
            beforeSend: function (xhr) {

            },
            success: function (data) {
                destroyCarousel()
                if (data) {
                    setTimeout(function () {
                        $(content).html(data);
                        slickCarousel();
                    }, delay);

                } else {
                    console.log("GONDone")
                }
            }
        });
    });
}

function filterCase() {
    let content = $('.cases_row');
    jQuery("#select").on("change", function () {
        var category2 = $('#select').val();

        data = {
            'action': 'filterposts2',
            'category': category2,
        };
        var delay = 1000;
        $.ajax({
            url: "/wp-admin/admin-ajax.php",
            data: data,
            type: 'POST',
            beforeSend: function (xhr) {

            },
            success: function (data) {
                if (data) {
                    setTimeout(function () {
                        $(content).html(data);
                    }, delay);

                } else {
                    console.log("GONDone")
                }
            }
        });
    });
}


function breadcrumbsSlide() {
    $('.breadcrumbs_box .nav li a').click(function () {
        if (!$(this).is('.active')) {
            $('.breadcrumbs_box .nav li a, .child_terms').removeClass('active');
            $(this).addClass('active');
            $('.child_terms[data-id="' + $(this).attr('data-id') + '"]').addClass('active');
        }
    });
}

$(window).on('load', function () {
    $('.sub-menu li:nth-child(2)').prepend('<div class="back"><i class="fa fa-long-arrow-alt-left"></i></div>');
    $('.sub_menu .has_submenu.active .back').click(function () {
        $('.has_submenu.active').removeClass('active');
    });
    $('.back').on('touchstart', function () {
        $('.sub_menu li.has_submenu.active').removeClass('active');
    });
});
