// glide.js
const config = {
  type: "carousel",
  gap: 5,
  autoplay: false, // false = off, value = ms
  hoverpause: true,

  perView: 5,

  breakpoints: {
    400: { perView: 1 },
    400: { perView: 1 },
    600: { perView: 3 },
    1200: { perView: 4 },
    1800: { perView: 5 },

  }
};

document.addEventListener('DOMContentLoaded', () => {
  new Glide('.glide', config).mount();
});
