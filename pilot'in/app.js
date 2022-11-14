//  Slider

const slides = document.querySelectorAll('.slide')

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${100 * i}%)`
})

const leftBtn = document.querySelector('.slider__leftArrow')
const rightBtn = document.querySelector('.slider__rightArrow')

const maxSlide = slides.length
let currentSlide = 0

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1
  } else {
    currentSlide--
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`
  })
}

const nextSlide = () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`
  })
}

leftBtn.addEventListener('click', prevSlide)
rightBtn.addEventListener('click', nextSlide)
