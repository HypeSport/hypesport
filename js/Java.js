
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
});
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
	window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var navbar = document.querySelector('.navbar');

    if (scrollY > 100) { // Change 100 to the scroll position where you want the size change to occur
        navbar.classList.add('minimized');
    } else {
        navbar.classList.remove('minimized');
    }
});
function filterOptions() {
        var searchTerm = document.getElementById('searchInput').value.toLowerCase();
        var options = document.querySelectorAll('#input option');

        options.forEach(function(option) {
            var optionText = option.value.toLowerCase();
            if (optionText.indexOf(searchTerm) !== -1) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    }

    document.getElementById('searchInput').addEventListener('change', function() {
        var selectedOption = document.querySelector('#input option[value="' + this.value + '"]');
        if (selectedOption) {
            window.location.href = selectedOption.dataset.href;
        }
    });