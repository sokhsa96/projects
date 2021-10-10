const slides = Array.from(document.querySelectorAll('.slide'));
const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.buttons div');

function getNextPrev() {
    const activeSlide = document.querySelector('.slide.active');
    const activeIndex = slides.indexOf(activeSlide);
    let next, prev;
    if (activeIndex === slides.length - 1) {
        next = slides[0]
    } else {
        next = slides[activeIndex + 1]
    }

    if (activeIndex === 0) {
        prev = slides[slides.length - 1]
    } else {
        prev = slides[activeIndex - 1]
    }

    return (next, prev)



}

function getPosition() {
    const activeSlide = document.querySelector('.slide.active');
    const activeIndex = slides.indexOf(activeSlide);
    const [next, prev] = getNextPrev();

    slides.forEach((slide, index) => {
        if (index === activeSlide) {
            slide.style.transform = 'translateX(0)';
        } else if (slide === prev) {
            slide.style.transform = 'translateX(-100%)';
        } else if (slide === next) {
            slide.style.transform = 'translateX(100%)';
        } else {
            slide.style.transform = 'translateX(100%)'
        }
    })
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('next')) getNextSlid()
        else if (button.classList.contains('prev')) getPrevSlid();
    })
})

function getNextSlid() {
    const activeSlide = document.querySelector('.slide.active');
    const [next, prev] = getNextPrev();

    activeSlide.style.transform = 'translate(-100%)';
}

function getPrevSlid() {
    console.log('getting prev slide')
}


