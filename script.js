const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const images = document.querySelectorAll('.Image');
let currentIndex = 1;
const slider = document.querySelector('.slider');


const bottom = document.querySelector('.bottom');

for(let i=0;i<images.length;i++){
    const div = document.createElement('div');
    div.className ='button';
    bottom.appendChild(div);
}
const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor='white';

const resetBg = ()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor='transparent';
    })
}

buttons.forEach((button,i) =>{
    button.addEventListener('click',()=>{
        slider.style.transform =`translate(-${i*700}px)`;
        resetBg();
        currentIndex=i+1;
        button.style.backgroundColor='white';

    })
})

const changeColor = () =>{
    resetBg();
    buttons[currentIndex-1].style.backgroundColor ='white';
}

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
    changeColor();
})

left.addEventListener('click',()=>{
    prevImage();
    changeColor();
})



