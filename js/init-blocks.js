
document.querySelector(".header__burger").addEventListener('click',function activateMenu(){
  this.classList.toggle("active")
  document.querySelector(".nav__menu").classList.toggle("active")
})

const slider = document.querySelector(".slider")
const mainContainer = document.querySelector(".main-container")

function initBlocks(){
  let pinkBlock = document.createElement("a")
  let violetBlock = document.createElement("a")
  pinkBlock.setAttribute("href","#")
  violetBlock.setAttribute("href","#")
  pinkBlock.classList.add("block","pink-block")
  violetBlock.classList.add("block", "violet-block")
  mainContainer.appendChild(pinkBlock)
  mainContainer.appendChild(violetBlock)
  pinkBlock.innerHTML=`Change <br>old book<br> on new <br><img src="/icons/arrow.svg" alt="net">`
  violetBlock.innerHTML = `Top<br> 100<br> books<br> 2022<br> <img src="/icons/arrow.svg" alt="net">`
}

initBlocks()