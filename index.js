
$(window).on('load', function() {
    $("#preload").fadeOut(2000, function() { // Hide the preloader with fade effect
        $(".Main-class").fadeIn(1000);      // Show the main content with fade effect
    });
});

        window.onscroll = function() {
            var nav = document.getElementById('navbar');
            if (window.pageYOffset > 100) {
                nav.classList.add("scrollNav");
            } else {
                nav.classList.remove("scrollNav");
            }
        }

        const myFunc = () => {
  const x = document.getElementById("search-input");

  if (x.classList.contains("active")) {
    x.classList.remove("active");
    setTimeout(() => {
      x.style.display = "none";
    }, 500); 
  } else {
    x.style.display = "block"; 
    requestAnimationFrame(() => {
      x.classList.add("active");
    });
  }
};