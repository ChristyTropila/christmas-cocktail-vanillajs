let navUl=document.querySelector('#nav-link-ul')
let drinkContainer=document.querySelector('.drink-container')


//fetch drinks on click events
let listDrinks=(type)=>{
    drinkContainer.innerHTML=""
    console.log("hit")
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
    .then(res=>res.json())
    .then((results)=>{
        console.log(results)
        results.drinks.forEach((drink)=>{
            let drinkString=document.createElement("li")
            drinkString.style.listStyle="none"
            let drinkImg=document.createElement('img')
            drinkImg.style.width="100px"
            drinkString.innerText=drink.strDrink
            drinkImg.src=drink.strDrinkThumb
            drinkContainer.append(drinkString, drinkImg)
        })
    })
}

let whiskeyLink=document.createElement('li')
whiskeyLink.id="whiskey-li"
whiskeyLink.className="nav-li"
whiskeyLink.style.listStyle="none"
whiskeyLink.innerText="Whiskey"
whiskeyLink.addEventListener("click", () => {listDrinks("Whiskey")})



let tequilaLink=document.createElement('li')
tequilaLink.id="tequila-li"
tequilaLink.className="nav-li"
tequilaLink.style.listStyle="none"
tequilaLink.innerText="Tequila"
tequilaLink.addEventListener("click", () => {listDrinks("Tequila")})


let vodkaLink=document.createElement('li')
vodkaLink.id="vodka-li"
vodkaLink.className="nav-li"
vodkaLink.style.listStyle="none"
vodkaLink.innerText="Vodka"
vodkaLink.addEventListener("click", () => {listDrinks("Vodka")})

let ginLink=document.createElement('li')
ginLink.id="gin-li"
ginLink.className="nav-li"
ginLink.style.listStyle="none"
ginLink.innerText="Gin"
ginLink.addEventListener("click", () =>{listDrinks("Gin")})

navUl.append(whiskeyLink, tequilaLink, vodkaLink, ginLink)





