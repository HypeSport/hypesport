var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000, // Set the delay in milliseconds between slides
    disableOnInteraction: false, // Set to false so that it continues autoplaying even when the user interacts with the swiper
  },
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