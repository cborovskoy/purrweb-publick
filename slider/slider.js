const carouselSlide = document.querySelector('.carousel-slide'),
    carouselImages = document.querySelectorAll('.carousel-slide img'),
    slides = document.querySelector('.slides'),
    prevBtn = document.querySelector('#prevBtn'),
    nextBtn = document.querySelector('#nextBtn'),
    switchContainer = document.querySelector('.slide-switch-container'),
    slideSize = carouselImages[0].clientWidth

// Чем больше число, тем выше скорость листания слайдов.
// Использовать только числа делящие ширину слайда (400) без остатка
const speedSlider = 5


carouselSlide.style.transform = 'translateX(' + (-slideSize) + 'px)';

// Добавляем точки управления под слайдер
function addSwitch() {
    for (let i = 0; i < carouselImages.length; i++) {
        let sliderSwitch = document.createElement('div')
        sliderSwitch.className += 'slider-switch'
        switchContainer.appendChild(sliderSwitch)
    }
}

addSwitch()

let slideIndex = 0;

// Точки управления слайдером
let switches = document.querySelectorAll('.slider-switch')
switches[slideIndex].className += ' active'
let switchesArr = []


function disableSwitch() {
    for (let i = 0; i < switches.length; i++) {
        switchesArr.push(switches[i])
        switches[i].removeEventListener('click', onClickSwitch)
    }
}

function enableSwitch() {
    for (let i = 0; i < switches.length; i++) {
        switchesArr.push(switches[i])
        switches[i].addEventListener('click', onClickSwitch)
    }
}

function onClickSwitch(e) {
    switchMove(switchesArr.indexOf(e.target))
}

enableSwitch()

function nextSlide() {
    shiftSlide('next')
}

function prevSlide() {
    shiftSlide('prev')
}

function enableBtns() {
    nextBtn.addEventListener('click', nextSlide)
    prevBtn.addEventListener('click', prevSlide)
}

function disableBtns() {
    nextBtn.removeEventListener('click', nextSlide)
    prevBtn.removeEventListener('click', prevSlide)

}

// Включаем кнопки
enableBtns()


// Создаём клонов первго и последнего слайда для бесконечной прокрутки
function cloneFirstAndLastSlides() {
    let firstSlide = carouselImages[0],
        lastSlide = carouselImages[carouselImages.length - 1],
        firstClone = firstSlide.cloneNode(true),
        LastClone = lastSlide.cloneNode(true)
    slides.appendChild(firstClone)
    slides.insertBefore(LastClone, firstSlide)
}

cloneFirstAndLastSlides()


const shiftSlide = (direction) => {
    disableBtns()
    disableSwitch()
    let slidesPosition = slides.offsetLeft
    let completedMoves = 0
    const maxMoves = slideSize / speedSlider


    if (direction === 'next') {
        let slideInterval = setInterval(showNextSlide, 0)
        slideIndex++
        activatingSwitches()

        function showNextSlide() {
            slidesPosition = slidesPosition - speedSlider
            slides.style.left = slidesPosition + 'px'
            completedMoves++

            if (completedMoves >= maxMoves) {
                clearInterval(slideInterval)
                enableBtns()
                enableSwitch()

                if (slideIndex === carouselImages.length) {
                    slides.style.left = 0 + 'px'
                    slideIndex = 0;
                }

            }
        }

    } else if (direction === 'prev') {
        let slideInterval = setInterval(showPrevSlide, 0)
        slideIndex--
        activatingSwitches()

        function showPrevSlide() {
            slidesPosition = slidesPosition + speedSlider
            slides.style.left = slidesPosition + 'px'
            completedMoves++

            if (completedMoves >= maxMoves) {
                clearInterval(slideInterval)
                enableBtns()
                enableSwitch()

                if (slideIndex === -1) {
                    slides.style.left = -(slideSize * (carouselImages.length - 1)) + 'px'
                    slideIndex = carouselImages.length - 1;
                }

            }
        }

    }
}


function activatingSwitches() {
    if (slideIndex > carouselImages.length - 1) {
        switches[0].className += ' active'
        switches[switches.length - 1].className = switches[switches.length - 1].className.replace(' active', '')
        return
    } else if (slideIndex < 0) {
        switches[0].className = switches[0].className.replace(' active', '')
        switches[switches.length - 1].className += ' active'
        return
    }
    for (let i = 0; i < switches.length; i++) {
        switches[i].className = switches[i].className.replace(' active', '')
    }
    switches[slideIndex].className += ' active'
}

function switchMove(switchIndex) {
    disableBtns()
    disableSwitch()
    for (const switchesElement of switches) {
        switchesElement.className = switchesElement.className
            .replace(' active', '')
    }
    switches[switchIndex].className += ' active';
    let slidesPosition = slides.offsetLeft
    let completedMoves = 0
    const maxMoves = slideSize / speedSlider

    if (slideIndex < switchIndex) {
        let slideInterval = setInterval(() => flipRight(switchIndex - slideIndex), 0)

        function flipRight(numberOfSlides) {
            slidesPosition = slidesPosition - speedSlider
            slides.style.left = slidesPosition + 'px'
            completedMoves++
            if (completedMoves >= (maxMoves * numberOfSlides)) {
                slideIndex = switchIndex
                clearInterval(slideInterval)
                enableBtns()
                enableSwitch()
            }
        }

    } else if (slideIndex > switchIndex) {
        let slideInterval = setInterval(() => flipLeft(slideIndex - switchIndex), 0)

        function flipLeft(numberOfSlides) {
            slidesPosition = slidesPosition + speedSlider
            slides.style.left = slidesPosition + 'px'
            completedMoves++

            if (completedMoves >= (maxMoves * numberOfSlides)) {
                slideIndex = switchIndex
                clearInterval(slideInterval)
                enableBtns()
                enableSwitch()
            }
        }
    }
}