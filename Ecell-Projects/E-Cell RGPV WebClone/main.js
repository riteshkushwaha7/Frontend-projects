document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');

    function toggleSidebar() {
        sidebar.classList.toggle('show');
        hamburger.style.display = sidebar.classList.contains('show') ? 'none' : 'block';
        closeSidebar.style.display = sidebar.classList.contains('show') ? 'block' : 'none';
    }

    hamburger.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);
    
    // Ensure only one hamburger icon is displayed when screen width is greater than 930px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 930) {
            hamburger.style.display = 'none';
        } else {
            hamburger.style.display = sidebar.classList.contains('show') ? 'none' : 'block';
        }
    });
});

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;
    var threshold = 1 * parseFloat(getComputedStyle(header).getPropertyValue('height')); // Threshold of 3-4 rem

    if (scrollPosition > threshold) {
        header.classList.add('bg-scroll');
    } else {
        header.classList.remove('bg-scroll');
    }
});
