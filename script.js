const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const images = document.querySelectorAll('.Image');
let currentIndex = 1;
const slider = document.querySelector('.slider');



function nextImage() {
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex*700}px)`
    currentIndex++;
}

function prevImage(){
    currentIndex--;
    if (currentIndex <= 0) {
        currentIndex = images.length;
    }
    slider.style.transform = `translateX(-${(currentIndex-1)*700}px)`;
}

right.addEventListener('click',()=>{
    nextImage();
})

left.addEventListener('click',()=>{
    prevImage();
})