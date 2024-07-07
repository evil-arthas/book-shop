//imports
import './sass/style.scss'
import {stickyHeader} from './js/sticky-header'
//--------------------------------
//slider

const sliderButtons = Array.from(document.getElementsByClassName("slider__button"))
const images = Array.from(document.getElementsByClassName("slider__images"))

console.log(sliderButtons)
console.log(images)

let previosCount = 0
let count = 1

for (let sliderButton of sliderButtons){
  sliderButton.addEventListener("click", goToSlide)
}

function goToSlide(e){
  previosCount = count
  count = sliderButtons.indexOf(e.target)+1
  console.log(count)
  sliding()
}

function sliding(){
  if (previosCount!==count){
    images[count-1].style.display = "inline-block"
  }

  if(previosCount!==count&&previosCount!==0){
    images[previosCount-1].style.display= "none"
  }
}

sliding()

//slider
window.addEventListener('scroll', stickyHeader)