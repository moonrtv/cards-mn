const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
    slide.addEventListener('click', clickSlide);
})

function clickSlide(e) {
    clearActiveClasses();

    e.currentTarget.classList.add('active');
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}