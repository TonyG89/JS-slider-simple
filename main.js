const slides = document.querySelectorAll('.slide'),
    prev = document.querySelector('#btn-prev'),
    next = document.querySelector('#btn-next'),
    dots = document.querySelectorAll('.dot');

let index = 0;

activeSlide = (n) => {
    let i;
    for (i of slides) {
        i.classList.remove('active');
    };
    slides[n].classList.add('active');

    for (i of dots) {
        i.classList.remove('active');
    };
    dots[n].classList.add('active');
};


const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);

    } else {
        index++;
        activeSlide(index);
    };
};

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    };
};

dots.forEach((item, index)=>{
 item.addEventListener('click',()=>{
    activeSlide(index);
 });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 2000);