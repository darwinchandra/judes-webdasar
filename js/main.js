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

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
