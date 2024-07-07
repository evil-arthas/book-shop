function stickyHeader(){
  const headerContainer = document.querySelector(".header-container")
  const header = document.querySelector(".header")
  if (headerContainer.clientHeight<window.scrollY){
    headerContainer.style.position = "sticky"
    headerContainer.style.top = "0"
    header.style.padding = "15px 0"
  } else {
    headerContainer.style.position = "static"
    header.style.padding = ""
  }
}

export {stickyHeader}