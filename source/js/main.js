import './_vendor';
// import './_functions';
// import './_components';


const menuButton = document.querySelector('.header-menu');
const menu = document.querySelector('.nav');
const closeMenuButton = document.querySelector('.header-close');
const featuresVideo = document.querySelector('.features-video__iframe');
const featuresVideoPlayButton = document.querySelector('.features-video__play');
const body = document.body;
// Выбор элементов счетчика
const daysElement = document.querySelector('.home-counter__units .home-counter__value:nth-child(1) .home-counter__digit');
const hoursElement = document.querySelector('.home-counter__units .home-counter__value:nth-child(3) .home-counter__digit');
const minutesElement = document.querySelector('.home-counter__units .home-counter__value:nth-child(5) .home-counter__digit');
const secondsElement = document.querySelector('.home-counter__units .home-counter__value:nth-child(7) .home-counter__digit');

// Начальные значения времени
let days = 5;
let hours = 12;
let minutes = 36;
let seconds = 36;

function updateCounter() {
  daysElement.textContent = String(days).padStart(2, '0');
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}
function countdown() {
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(interval);
    return;
  }

  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;
      if (hours > 0) {
        hours--;
      } else {
        hours = 23;
        if (days > 0) {
          days--;
        }
      }
    }
  }

  updateCounter();
}
updateCounter();
const interval = setInterval(countdown, 1000);


if (featuresVideoPlayButton) {
  featuresVideoPlayButton.addEventListener("click", (e) => {
    e.currentTarget.style.opacity = "0";
    e.currentTarget.style.pointerEvents = "none";

    featuresVideo.classList.add("features-video__iframe--visible");
  })
}


// const closeModalByOuterClick = (modal) => {
//   const modalContainer = modal.querySelector('.modal-container');

//   modalContainer.addEventListener('click', (e) => {
//     if (e.target === modalContainer) {
//       hideModal();
//       modal.classList.remove('modal--active');
//     }
//   })
// }

// const hideModal = () => {
//   body.classList.remove('locked')
//   document.documentElement.classList.remove('locked')
// }

// const showModal = () => {
//   body.classList.add('locked');
//   document.documentElement.classList.add('locked');
// }

if (AOS) {
  AOS.init({
    once: true,
    offset: 150,
    startEvent: "load",
    duration: 500
  });
}

const menuHandler = () => {
  menuButton.classList.toggle('header-menu--active');
  if (menuButton.classList.contains('header-menu--active')) {
    menu.classList.add('nav--active')
    document.documentElement.style.overflow = 'hidden';
    body.style.overflow = 'hidden'
  } else {
    menu.classList.remove('nav--active')
    document.documentElement.style.overflow = '';
    body.style.overflow = ''
  }
}

if (menuButton) {
  menuButton.addEventListener('click', menuHandler);

  closeMenuButton.addEventListener('click', () => {
    menuButton.classList.remove('header-menu--active');
    menu.classList.remove('nav--active')
    document.documentElement.style.overflow = '';
    body.style.overflow = ''
  })
}


if (Swiper) {
  new Swiper(".slider-body", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      clickable: true,
      el: '.slider-pagination',
      type: 'bullets',
    },
  })

  new Swiper(".about-main", {
    speed: 500,
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
      clickable: true,
      el: '.about-pagination',
      type: 'bullets',
    },
  })

  new Swiper('.faq-inner', {
    speed: 300,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    },
    navigation: {
      nextEl: ".faq-controls__btn--next",
      prevEl: ".faq-controls__btn--prev"
    }
  })
}

