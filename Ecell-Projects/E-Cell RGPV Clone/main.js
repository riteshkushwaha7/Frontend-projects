document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('header');

    function toggleSidebar() {
        sidebar.classList.toggle('show');
        if (sidebar.classList.contains('show')) {
            hamburger.style.display = 'none';
            closeSidebar.style.display = 'block';
        } else {
            hamburger.style.display = 'block';
            closeSidebar.style.display = 'none';
        }
    }
    

    hamburger.addEventListener('click', function() {
        toggleSidebar();
    });

    closeSidebar.addEventListener('click', function() {
        toggleSidebar();
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 930) {
            hamburger.style.display = 'none';
            closeSidebar.style.display = 'none';
            sidebar.style.display = 'none';
        } else {
            hamburger.style.display = sidebar.classList.contains('show') ? 'none' : 'block';
            closeSidebar.style.display = sidebar.classList.contains('show') ? 'block' : 'none';
        }
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const threshold = header.offsetHeight;

        if (scrollPosition > threshold) {
            closeSidebar.style.top = 'calc(50% + 16px)'; // Adjust top position based on header height
        } else {
            closeSidebar.style.top = 'calc(50% - 16px)'; // Default top position
        }
    });

    // Slider functionality
    let slideIndex = 0;
    const cards = document.querySelectorAll('.card-container');
    const totalCards = cards.length;

    function showSlides() {
        slideIndex++;
        if (slideIndex >= totalCards) {
            slideIndex = 0;
        }
        const offset = -slideIndex * cards[0].getBoundingClientRect().width; // Use getBoundingClientRect() to get accurate width
        document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    showSlides();
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".initiativeslider .slide-container");
  const cards = document.querySelectorAll(".initiativeslider .cardB");
  const prevBtn = document.querySelector(".initiativeslider .prev");
  const nextBtn = document.querySelector(".initiativeslider .next");
  const cardWidth = cards[0].offsetWidth;
  let currentIndex = 0;

  function slide(direction) {
    currentIndex += direction;
    const newPosition = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      slide(-4);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < cards.length - 4) {
      slide(4);
    }
  });
});
  