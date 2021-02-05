window.addEventListener('DOMContentLoaded', () => {
    slider(); 
});

function slider() {
    const sliderList = document.querySelector('.slider__list'),
        btnPrev = document.querySelector('.btn-prev'),
        btnNext = document.querySelector('.btn-next'),
        slides = document.querySelectorAll('.slider__item'),
        dots = document.querySelectorAll('.slider__dot'),
        width = sliderList.offsetWidth;
    let slide = 0;

    dots[slide].style.background = 'black';

    btnPrev.addEventListener('click', () => {
        slide -= 1;
        if(slide < 0){
            slide = slides.length - 1; 
            showSlide();
        } else { 
            showSlide();
        }
    });

    btnNext.addEventListener('click', () => {
        slide += 1;
        if(slide == slides.length){
            slide = 0; 
            showSlide();
        } else { 
            showSlide();
        }
    });

    dots.forEach((item, i) => {
        item.addEventListener('click', () => {
            slide = i;
            showSlide();
        });
    });

    function showSlide(){
        sliderList.style.left = `-${width*slide}px`;
        dots.forEach(item => {
            item.style.background = 'transparent';
        });
        dots[slide].style.background = 'black';
    }

}