/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===============  JS FOR VIDEO SLIDER ===============*/
const btns = document.querySelectorAll(".slider__bg-navBtn");
const slides = document.querySelectorAll(".video__slide");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });


    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) =>{
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});


/*=============== POPULAR SWIPER ===============*/

let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor:true,


    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints: {
        
        768: {
          slidesPerView: 3,

        },
        1024: {
          
          spaceBetween: 48,
        },
      },
});

/*=============== MIXITUP FILTER FEATURED ===============*/

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active color featured */

const linkFeatured = document.querySelectorAll('.featured__item');

function activeFeatured(){
    linkFeatured.forEach(l=>l.classList.remove('active-featured'));
    this.classList.add('active-featured');
}

linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured));


/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 1) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


const d = new Date();
document.getElementById("date").innerHTML = d;


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})


sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`);
sr.reveal(`.home__subtitle`, {delay: 500});
sr.reveal(`.home__elec`, {delay: 600});
sr.reveal(`.home__img`, {delay: 800});
sr.reveal(`.home__car-data, .footer__copy`, {delay: 900, interval: 100, origin: 'bottom'});
sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'});

sr.reveal(`.about__group, .offer__data`, {origin: 'left'});
sr.reveal(`.about__data, .offer__img, .home__social-icon`, {origin: 'right'});

sr.reveal(`.features__map, .slider__bg`, {delay:600, origin: 'bottom'});
sr.reveal(`.features__card`, {interval: 300});
sr.reveal(`.featured__card, .logos__content, .footer__content`, {interval: 100});


$(document).ready(function () {
    new WOW().init();
    const send = document.querySelector('#telegram_send')
    const Token = `5407879672:AAGADmXxFGa4O5up09HrLnvWN4H3HN6tYVM`
    const id = `1754647300`
  
    send.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userName = document.querySelector('#al-name').value
      const userNumber = document.querySelector('#nuber-email').value
      const mytext = `👤 ISMI=${userName}%0A📶 NOMERI:>${userNumber}%0A📶 ALOQAGA:${userName+"::KILENT"}`
  
      try {
        fetch(`https://api.telegram.org/bot${Token}/sendMessage?chat_id=${id}&text=${mytext}`, {
          method: 'post'
        })
          .then(response => {
            
            alert("Tezzda alloqaga chiqamiz")
            
          })
  
      } catch (error) {
        console.log('error :>> ', error);
  
      }
  
    })
  });
  
  VanillaTilt.init(document.querySelectorAll(".about-card"), {
    max: 25,
    speed: 500,
    glare: true,
    "max-glare": 1,
  });
  VanillaTilt.init(document.querySelectorAll(".flipInX"), {
    max: 25,
    speed: 500,
    glare: true,
    "max-glare": 1,
  });
  
  var textWrapper = document.querySelector('.font .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({ loop: true })
    .add({
      targets: '.font .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 1500
    }).add({
      targets: '.font .letters',
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 2000,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i
    }).add({
      targets: '.font',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  
