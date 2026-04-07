const components = [
  // I have done the chunk of the research for you guys
  // This is where you add your files and their corresponding ids
  // For example:
  // { id: "navbar", file: "views/navbar.html" },

  // If you still don't understand it or are not able to do the
  // rest yourself, please let me know and I will be more than
  // happy to help you out


  { id: "testimonial", file: "views/testimonial.html" },

  { id: "contact-us", file: "views/contact-us.html" },
];

components.forEach(component => {
  fetch(component.file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(component.id).innerHTML = data;
    });
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 2
    },
    1024:{
      slidesPerView: 3
    }
  }
});