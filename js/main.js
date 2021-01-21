var toggle;
var menu = document.querySelector('ul');
var hamburger = document.querySelector('.hamburger');
var hamburger_icon = Array.from(document.querySelectorAll('.hamburger span'));

var navBar = document.querySelector('nav');

var menulink = document.querySelectorAll('ul li');

hamburger.addEventListener('click', () => {
  var animation = anime.timeline({
    easing: 'easeInSine',
  });

  animation
    .add({
      targets: navBar,
      height: toggle ? 69 : 400,
      delay: toggle ? 300 : 0,
      duration: 300,
      complete: () => {
        menu.classList.toggle('dummy');

        toggle = menu.classList.contains('dummy');
      },
    })
    .add(
      {
        targets: menulink,
        opacity: toggle ? [1, 0] : [0, 1],
        translateX: toggle ? 0 : [-30, 0],
        delay: anime.stagger(50),
        easing: 'easeOutQuad',
        duration: toggle ? 100 : 200,
      },
      200
    )
    .add(
      {
        targets: hamburger_icon[0],
        rotate: toggle ? 0 : 45,
        translateY: toggle ? 0 : -5,
        duration: 300,
      },
      0
    )
    .add(
      {
        targets: hamburger_icon[2],
        rotate: toggle ? 0 : -45,
        translateY: toggle ? 0 : -5,
        translateX: toggle ? 0 : 5,
        duration: 300,
      },
      0
    )
    .add(
      {
        targets: hamburger_icon[1],
        opacity: toggle ? 1 : 0,
        duration: 300,
      },
      0
    );
});

function myFunction(e) {
  if (document.querySelector('#navList a.active') !== null) {
    document.querySelector('#navList a.active').classList.remove('active');
  }
  e.target.className += ' active';
}

$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

var swiper = new Swiper('.swiper-container-top', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.toppagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.btnnexttopbanner',
    prevEl: '.btnprevtopbanner',
  },
});

var swiper2 = new Swiper('.logocont', {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.paginationlogo',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

AOS.init({
  duration: 800,
});

document.documentElement.style.setProperty('--swiper-theme-color', '#ccccccc');

$('#btnnextbottom').hide();
$('#btnprevbottom').hide();

$('.brandcontainer').hover(
  function () {
    $('#btnnextbottom').fadeTo(200, 1.0);
    $('#btnprevbottom').fadeTo(200, 1.0);
  },
  function () {
    $('#btnnextbottom').fadeTo(200, 0);
    $('#btnprevbottom').fadeTo(200, 0);
  }
);

$('#btnnexttop').hide();
$('#btnprevtop').hide();

$('.swiper-container-top').hover(
  function () {
    $('#btnnexttop').fadeTo(200, 1.0);
    $('#btnprevtop').fadeTo(200, 1.0);
  },
  function () {
    $('#btnnexttop').fadeTo(200, 0);
    $('#btnprevtop').fadeTo(200, 0);
  }
);
