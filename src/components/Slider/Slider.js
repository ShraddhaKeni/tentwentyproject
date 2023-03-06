import React from 'react'
import './Slider.css'
import sliderimg1 from '../../images/sliderimg1.png'
import sliderimg2 from '../../images/sliderimg2.png'
import sliderimg3 from '../../images/sliderimg3.png'

const Slider = () => {
  let slidePosition = 0;
  const slides = document.getElementsByClassName('carousal_item');
  const totalSlides = 3
  const handleNext = async (e) => {
    e.preventDefault()
    moveToNextSlide();
  }

  const handlePrevious = async (e) => {
    e.preventDefault()
    moveToPrevSlide();
  }
 
  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousal_item--visible')
      slide.classList.add('carousal_item--hidden')
    }
    slides[slidePosition].classList.add('carousal_item--visible')
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updateSlidePosition();
  }

  function moveToPrevSlide() {
    if (slidePosition === 0) {
      console.log('p')
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
    updateSlidePosition();
  }
  return (
    <div className='carousal'>
      <div className='carousal_item carousal_item--visible'>
        <img src={sliderimg1} alt="slider image"></img>
      </div>
      <div className='carousal_item'>
        <img src={sliderimg2} alt="slider image"></img>
      </div>
      <div className='carousal_item'>
        <img src={sliderimg3} alt="slider image"></img>
      </div>
      <div className='carousal_actions'>
        <button id='carousal_button--prev' onClick={(e) => { handlePrevious(e) }} >Previous</button>
        <button id='carousal_button--next' onClick={(e) => { handleNext(e) }} >Next</button>
      </div>
    </div>
  )
}

export default Slider