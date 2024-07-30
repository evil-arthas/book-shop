// const apiKey = "AIzaSyAYzNUfZfnn0m67JWigftacc5jf8emMjes"
// const booksCategories = [
//   {categorie:"Architecture", q:"subject:Architecture"},
//   {categorie:"Art & Fashion", q:"subject:Art"},
//   {categorie:"Biography", q:"subject:Biography & Autobiography"},
//   {categorie:"Business", q:"subject:Business"},
//   {categorie:"Crafts & Hobbies", q:"subject:Crafts & Hobbies"},
//   {categorie:"Drama", q:"subject:Drama"},
//   {categorie:"Fiction", q:"subject:Fiction"},
//   {categorie:"Food & Drink", q:"subject:Cooking"},
//   {categorie:"Health & Wellbeing", q:"subject:Health & Fitness"},
//   {categorie:"History & Politics", q:"subject:History"},
//   {categorie:"Humor", q:"subject:Humor"},
//   {categorie:"Poetry", q:"subject:Poetry"},
//   {categorie:"Psychology", q:"subject:Psychology"},
//   {categorie:"Science", q:"subject:Science"},
//   {categorie:"Technology", q:"subject:Technology"},
//   {categorie:"Travel & Maps", q:"subject:Travel"}
// ]

// const store = document.querySelector(".store")
// const bookStore = document.querySelector(".store__books")
// const mainContainer = document.querySelector(".main-container")
// const buttonToLoad = document.querySelector(".store__button")
// let localStorage = []
// buttonToLoad.addEventListener("click", loadBooks)



// function initStoreNav(arr = booksCategories){
//   const storeNavWrapper = document.createElement("ul")
//   storeNavWrapper.classList = `store__nav`
//   store.appendChild(storeNavWrapper)
//   if(mainContainer.getBoundingClientRect().width<1440 & mainContainer.getBoundingClientRect().width>840){
//     storeNavWrapper.style.left = mainContainer.getBoundingClientRect().x - store.getBoundingClientRect().x +"px"
//   } else{
//     storeNavWrapper.style.left="-159px"
//   }
//   window.addEventListener('resize', ()=>{
//     if(mainContainer.getBoundingClientRect().width<1440 & mainContainer.getBoundingClientRect().width>840){
//       storeNavWrapper.style.left = mainContainer.getBoundingClientRect().x - store.getBoundingClientRect().x +"px"
//     }
//     else{
//       storeNavWrapper.style.left="-159px"
//     }
//   })

//   arr.forEach((element,index)=>{
//     let bookCategorie = document.createElement("li")
//     bookCategorie.textContent = element.categorie 
//     bookCategorie.dataset.index = index
//     bookCategorie.dataset.q = booksCategories[index].q
//     bookCategorie.classList = `bookcategories__categorie n${index} ${index? "inactive": "active"}`
//     storeNavWrapper.appendChild(bookCategorie)
//     bookCategorie.addEventListener('click', function categorieClick(){
//       storeNavWrapper.querySelector(".active").classList.add("inactive")
//       storeNavWrapper.querySelector(".active").classList.remove("active")
//       this.classList.add("active")
//       this.classList.remove("inactive")
//       bookStore.innerHTML = ""
//       loadBooks()
//     })
//   })
// }

// function fetchBooks(url){
//   fetch(url)
//   .then((response)=>response.json())
//   .then((result)=>{
//     //проверка наличия книг
//     if(result.items){
//       //отрисовка книг
//       result.items.forEach((item,index)=>{
    
//         let info = item.volumeInfo
    
//         let bookCard = document.createElement("div")
//         bookCard.classList = "store__book-card"
        
    
//         let bookCardInfoWrapper = document.createElement("div")
//         bookCardInfoWrapper.classList = "book-card__info-wrapper"
    
    
//         let bookImageWrapper = document.createElement("div")
//         bookImageWrapper.classList = "book-card__image-wrapper"
//         bookCard.appendChild(bookImageWrapper)
        
    
//         let bookImage = document.createElement("img")
//         bookImage.classList = "book-card__image"
//         bookImage.setAttribute("src", `${info.imageLinks?info.imageLinks.thumbnail:"./images/product-placeholder.jpg"}`)
//         bookImageWrapper.appendChild(bookImage)
    
//         if(info.authors){
//           let bookAuthors = document.createElement("h2")
//           bookAuthors.classList = "book-card__author"
        
//           info.authors.forEach((author,index)=>{
//             bookAuthors.textContent += `${author}${index===info.authors.length-1? "":", "}`
//           })
//           bookCard.dataset.authors = bookAuthors.textContent
//           bookCard.dataset.id = item.id
//           bookCardInfoWrapper.appendChild(bookAuthors)
//         }
    
//         let bookCardTitle = document.createElement("h1")
//         bookCardTitle.classList = "book-card__title"
//         bookCardTitle.textContent = info.title

//         bookCard.dataset.title = bookCardTitle.textContent
//         bookCardInfoWrapper.appendChild(bookCardTitle)
        
    
//         if(info.averageRating){
//           let bookCardRating = document.createElement("div")
//           bookCardRating.classList = "book-card__rating"
//           for(i=1;i<=5;i++){
//             bookCardRating.innerHTML+=`${i>=info.averageRating?
//               '<svg width="11.412674" height="10.854103" viewBox="0 0 11.4127 10.8541" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path id="Star" d="M5.7 0L3.9 3.51L0 4.14L2.78 6.94L2.17 10.85L5.7 9.07L9.23 10.85L8.62 6.94L11.41 4.14L7.51 3.51L5.7 0Z" fill="#EEEDF5" fill-opacity="1.000000" fill-rule="evenodd"/></svg>'
//               :
//               '<svg width="11.412674" height="10.854103" viewBox="0 0 11.4127 10.8541" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path id="Star" d="M5.7 0L3.9 3.51L0 4.14L2.78 6.94L2.17 10.85L5.7 9.07L9.23 10.85L8.62 6.94L11.41 4.14L7.51 3.51L5.7 0Z" fill="#F2C94C" fill-opacity="1.000000" fill-rule="evenodd"/></svg>'
//             }`
//           }
//           if(info.ratingsCount){
//             let bookCardRatingCount = document.createElement("span")
//             bookCardRatingCount.textContent = `${info.ratingsCount}M review`
//             bookCardRating.appendChild(bookCardRatingCount)
//           }
//           bookCardInfoWrapper.appendChild(bookCardRating)
//         }
    
//         if(info.description){
//           bookCardDescription = document.createElement("p")
//           bookCardDescription.textContent = info.description
//           bookCardDescription.classList = "book-card__description"
//           bookCardInfoWrapper.appendChild(bookCardDescription)
//         } 
    
    
//         if(item.saleInfo.retailPrice){
//           bookCardPrice = document.createElement("p")
//           bookCardPrice.classList = "book-card__price"
//           bookCardPrice.textContent = `${item.saleInfo.retailPrice.amount} ${item.saleInfo.retailPrice.currencyCode}`
//           bookCardInfoWrapper.appendChild(bookCardPrice)

//           bookCard.dataset.price = bookCardPrice.textContent
//         }
    
//         let bookCardButton = document.createElement("button")

//         bookCardButton.classList = "book-card__button button"

//         if(localStorage.includes(item.id)){
//           bookCardButton.textContent = "IN THE CART"
//         } else {
//           bookCardButton.textContent = "BUY NOW"
//         }

//         bookCardInfoWrapper.appendChild(bookCardButton)
    
//         bookCard.appendChild(bookCardInfoWrapper)
//         bookStore.appendChild(bookCard)
//       }
//     )
//     }
//     else {alert(`Сервер ничего не вернул по ссылке ${url}, возможно, книг больше нет.`)}
//   }
// )
//   .catch((err)=>alert(console.log(err)))
// }

// function loadBooks(){
//   const storeBooks = document.querySelector(".store__books")
//   const url = new URL('https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyAYzNUfZfnn0m67JWigftacc5jf8emMjes&printType=books&startIndex=0&maxResults=6&langRestrict=en')
//   let qParam = store.querySelector(".active").dataset.q

//   url.searchParams.set("q", qParam)

//   let startIndex = storeBooks.children.length

//   url.searchParams.set("startIndex", startIndex)
//   fetchBooks(url.href)
// }



// bookStore.addEventListener("click", function pushToLocalStorage(event){
//   let target = event.target
//   if (target.classList.contains("book-card__button")){
//     switch (target.textContent) {
//       case "BUY NOW":
//         target.textContent = "IN THE CART";
//         target.parentNode.parentNode.classList.add("active")
//         localStorage.push(target.parentNode.parentNode.dataset.id)
//         break;

//       case "IN THE CART":
//         target.textContent = "BUY NOW";
//         target.parentNode.parentNode.classList.remove("active")
//         localStorage.splice(localStorage.indexOf(target.parentNode.parentNode.dataset.id),1)
//         break;
//     }

//     console.log(localStorage)


//     let storageCounter = document.querySelector(".shop-bag__counter")
//     if(localStorage.length>0){
//       storageCounter.textContent = localStorage.length
//       storageCounter.style.display="flex"
//     }else{
//       storageCounter.style.display="none"
//     }
//   }
// })

// initStoreNav()
// loadBooks()


// function createObjectForLocalStorage(title,price,authors){
//   this.title = title
//   this.price = price
//   this.authors = authors
// }
