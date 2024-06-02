// Tooltip
$(document).ready(function(){ $('[data-toggle="tooltip"]').tooltip(); });

// Splide carousel
var splide = new Splide( '.splide', {
  type    : 'loop',
  perPage : 2,
  autoplay: true
} );

splide.mount();

// accordion
document.querySelectorAll(".accordion-item").forEach((item) => {
  item.querySelector(".accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// goTop
var goTop = $(".scroll-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    goTop.addClass("show");
  } else {
    goTop.removeClass("show");
  }
});

goTop.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
