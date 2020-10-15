searchOn.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.remove('d-none');
    searchOn.style.display = 'none';
    navOn.style.display = 'none';

});

closeOn.addEventListener('click', (e) => {
    e.preventDefault();
    searchForm.classList.add('d-none');
    searchOn.style.display = 'block';
    navOn.style.display = 'flex';

});


menuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header__content-navsList')
        .style.transform = 'translate(0%)';
    menuOpen.classList.remove('open-nav');
    menuOpen.classList.add('close-nav');

    setTimeout(function () {
            menuOpen.classList.remove('close-nav');
            menuOpen.style.display = 'none';
        },
        200);
    setTimeout(function () {
            menuClose.style.display = 'block';
            openAnimation()
        },
        400);
    setTimeout(function () {
            openAnimationRemove()
        },
        600);
});

menuClose.style.display = 'none';


menuClose.addEventListener('click', (e) => {
    e.preventDefault();

    setTimeout(function () {
            closeNavMenu();
            menuClose.classList.add('close-nav');
        },
        200);

    setTimeout(function () {
            menuClose.style.display = 'none';
            menuClose.classList.remove('close-nav');
            menuOpen.style.display = 'block';
            menuOpen.classList.add('open-nav');
        },
        400);
});

const closeNavMenu = () => document.querySelector('.header__content-navsList').style.transform = 'translate(-100%)';
const openAnimation = () => document.querySelector('.fa-times').classList.add('open-nav');
const openAnimationRemove = () => document.querySelector('.fa-times').classList.remove('open-nav');


window.smoothScroll = function (target) {
    let scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    let targetY = 0;
    do { //find the top of target relatively to the container
        if (target === scrollContainer) break;
        targetY += target.offsetTop;
    } while (target === target.offsetParent);

    scroll = function (c, a, b, i) {
        i++;
        if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () {
            scroll(c, a, b, i);
        }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};


// Accordion JS



// $(".accordion-application-icon").on("click", function () {
//     $(this).find("i").toggleClass("icon-plus icon-minus");
//     $(this).parent().find(".header__content-accordion").slideToggle();
//     console.log('hello');
// });


$(".accordion-application-icon").on("click", function () {
    let $answer = $(this).next();
    // $(this).find("i").toggleClass("icon-plus icon-minus");
    // $(this).parent().find(".header__content-accordion").slideToggle();
    $('.header__content-accordion').not($answer).slideUp();

    $answer.slideToggle();
    console.log('hello');
});

// Video JS

$(".news__content-play").on("click", function () {
    $(this).css("display", "none");
    $(this).parent().find('.news__content-videoBG').hide('fast');
    $(this).parent().find('.news__content-poster').hide('fast');
    $(this).parent().find('.news__content-pleer').removeClass('d-none').attr('controls', 'controls').trigger('play');
});


