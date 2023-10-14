document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        const aboutContent = document.querySelector('.about-content');

        if (aboutContent) {
            const aboutTop = aboutContent.offsetTop;

            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition > aboutTop) {
                aboutContent.classList.add('animate');
            }
        }
    });
});
