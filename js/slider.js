const images = [
  {
    url:"./images/image-1.png",
    title:"BLACK FRIDAY SALE"
  },
  {
    url:"./images/image-2.png",
    title: "TOP 10 BOOKS"
  },
  {
    url:"./images/image-3.png",
    title: "COZY BOOKS SELECTION"
  }
]

function initSlider(images) {
  if (!images || !images.length) return

  const slider = document.querySelector(".slider")
  const sliderImages = slider.querySelector(".slider__images")
  const sliderArrows = slider.querySelector(".slider__arrows")

  let timer

  restartAutoPlay()
  initImages()
  initArrows()
  initDots()

  function initDots(){
    const dotsWrapper = document.createElement("div")
    dotsWrapper.classList = "slider__dots"
    slider.appendChild(dotsWrapper)
    images.forEach((image, index)=>{
      let dot = document.createElement("div")
      dot.classList = `slider__dot n${index} ${index? "":"active"}`
      dot.dataset.index = index
      dot.addEventListener("click" ,function(){
        moveSlider(this.dataset.index)
        dotsWrapper.querySelector(".active").classList.remove("active")
        this.classList.add("active")
      })
      dotsWrapper.appendChild(dot)
    })
  }

  function initArrows(){
    sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow)=>{
      arrow.addEventListener("click", function(){
        let currentNumber = +document.querySelector(".active").dataset.index
        let nextNumber
        if (arrow.classList.contains("left")){
          nextNumber = currentNumber===0? images.length-1 : currentNumber-1
        }
        if (arrow.classList.contains("right")){
          nextNumber = currentNumber===images.length-1? 0 : currentNumber+1
        }
        moveSlider(nextNumber)
      })
    })
  }

  function moveSlider(num){
    sliderImages.querySelector(".active").classList.remove("active")
    sliderImages.querySelector(`.n${num}`).classList.add("active")

    //dots
    let dotsWrapper = document.querySelector(".slider__dots")
    dotsWrapper.querySelector(".active").classList.remove("active")
    dotsWrapper.querySelector(`.n${num}`).classList.add("active")

  }

  function initImages(){
    images.forEach((image,index) => {
      let imageElement = document.createElement("div")
      imageElement.classList = `slider__image n${index} ${index? "" : "active"}`
      imageElement.dataset.index = index
      sliderImages.appendChild(imageElement)
      imageElement.style.backgroundImage = `url("${image.url}")`
    });
  }

  function restartAutoPlay(){
    clearInterval(timer)
    timer = setInterval(()=>{
      let currentNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = currentNumber === images.length - 1? 0 : currentNumber + 1;
      moveSlider(nextNumber);
    },5000)
  }

  slider.addEventListener("click", function(event){
    if(event.target.classList.contains("slider__dot")){
      restartAutoPlay()
    }
    if(event.target.classList.contains("slider__arrow")){
      restartAutoPlay()
  }})
}

document.addEventListener('DOMContentLoaded', ()=>{
  initSlider(images)
})