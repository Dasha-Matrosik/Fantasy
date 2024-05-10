const nextSlideDiv=document.getElementById('nextSlide')
const currentSlideDiv = document.getElementById('currentSlide')
const nextSlideDiv1=document.getElementById('nextSlide1')
const currentSlideDiv1 = document.getElementById('currentSlide1')
 


// slider
const slideImg=[
    'url(./img/drag1.jpg)',
    'url(./img/drag2.jpg)',
    'url(./img/drag3.jpg)',
    'url(./img/drag4.jpg)',
    'url(./img/drag5.jpg)',

]
const slideDelay = 2400
const slideMove = 1200

let currentSlideIndex = 0

resetSlider()

function resetSlider(){
    nextSlideDiv.classList.remove('smooth')
    currentSlideDiv.classList.remove('smooth')

    currentSlideDiv.style.backgroundImage=slideImg[currentSlideIndex]
    currentSlideDiv.style.transform = 'transletedX(0)'
    nextSlideDiv.style.transform = 'transletedX(100%)'

    setTimeout(nextSlide, slideDelay)

}

function nextSlide(){
    nextSlideDiv.classList.add('smooth')
    currentSlideDiv.classList.add('smooth')

    currentSlideIndex++
    if(currentSlideIndex === slideImg.length)currentSlideIndex=0

    nextSlideDiv.style.backgroundImage=slideImg[currentSlideIndex]
    nextSlideDiv.style.transform = 'transletedX(0)'
    currentSlideDiv.style.transform = 'transletedX(-100%)'

    setTimeout(resetSlider,slideMove)

}
//slider1
const slideImg1=[
    'url(./img/poni1.jpg)',
    'url(./img/poni2.jpg)',
    'url(./img/poni3.jpg)',
    'url(./img/poni4.jpg)',
    'url(./img/poni5.jpg)',

]
const slideDelay1 = 2400
const slideMove1 = 1200

let currentSlideIndex1 = 0

resetSlider1()

function resetSlider1(){
    nextSlideDiv1.classList.remove('smooth')
    currentSlideDiv1.classList.remove('smooth')

    currentSlideDiv1.style.backgroundImage=slideImg1[currentSlideIndex1]
    currentSlideDiv1.style.transform = 'transletedX(0)'
    nextSlideDiv1.style.transform = 'transletedX(100%)'

    setTimeout(nextSlide1, slideDelay1)

}

function nextSlide1(){
    nextSlideDiv1.classList.add('smooth')
    currentSlideDiv1.classList.add('smooth')

    currentSlideIndex1++
    if(currentSlideIndex1 === slideImg1.length)currentSlideIndex1=0

    nextSlideDiv1.style.backgroundImage=slideImg1[currentSlideIndex1]
    nextSlideDiv1.style.transform = 'transletedX(0)'
    currentSlideDiv1.style.transform = 'transletedX(-100%)'

    setTimeout(resetSlider1,slideMove1)

}
