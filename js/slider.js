export{sliderButtons, images,goToSlide,sliding, checkCount, count, previosCount}

const sliderButtons = Array.from(document.getElementsByClassName("slider__button"))
const images = Array.from(document.getElementsByClassName("slider__images"))

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

function checkCount(count){
  if (count>3){
    return 1
  }
  if (count<1){
    return 3
  }
  else {
    return count
  }
}

function sliding(){
  if (previosCount!==count){
    images[count-1].style.display = "inline-block"
    sliderButtons[count-1].style.backgroundColor = "#9E98DC"
  }

  if(previosCount!==count&&previosCount!==0){
    images[previosCount-1].style.display= "none"
    sliderButtons[previosCount-1].style.backgroundColor = ""
  }
}

let intervalSliding = setInterval(()=>{
  previosCount=count
  count++
  count = checkCount(count)
  sliding()
},5000)