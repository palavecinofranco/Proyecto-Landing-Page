const workItems = document.querySelectorAll(".work .item");
const workItemsCount = workItems.length;
let currrentIndex = 0;
const closeButton = document.querySelector("#close-button")
const prevButton = document.querySelector("#prev-button")
const nextButton = document.querySelector("#next-button")
const openCloseButton = document.querySelector("#buttonOpenCloseMenu")
const menuMobileItems= document.querySelector("#menu-mobile-items")

openCloseButton.addEventListener("click", (e)=>{
    menuMobileItems.classList.toggle("menu-mobile-closed")
})

workItems.forEach(item =>{
    item.addEventListener("click", e=>{
        e.preventDefault();
        currrentIndex = parseInt(item.getAttribute("data-id"));
        const contentArray = document.querySelectorAll("#details-container .item");

        document.querySelectorAll("#details-container .item").forEach(item =>{item.classList.add("item-hide")})
        document.querySelectorAll("#details-container .item")[currrentIndex-1].classList.toggle("item-hide");
        document.querySelector('#pantalla').style['animation-name'] = 'fade-in';
        document.querySelector("body").style["overflow"] = "hidden";

        setTimeout(() => {
            document.querySelector("#details-container").style.display = "block"
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pantalla").style = ""
        }, 2000);
    })
})

closeButton.addEventListener("click", e=>{
    e.preventDefault();
    document.querySelector("#pantalla").style["animation-name"] = "fade-in";
    document.querySelector("body").style["overflow"] = "auto";
        setTimeout(() => {
            document.querySelector("#details-container").style.display = "none"
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pantalla").style = ""
        }, 2000);
})

prevButton.addEventListener("click", e=>{
    if(currrentIndex - 1<0){
        return;
    }

    currrentIndex--;
    loadGalleryItem(currrentIndex)
})

nextButton.addEventListener("click", e=>{
    if(currrentIndex + 1 === workItemsCount){
        return;
    }

    currrentIndex++;
    loadGalleryItem(currrentIndex)
})

function loadGalleryItem(index){
    const items = document.querySelectorAll("#details-container .item")
    items.forEach(item => {
        item.classList.add("item-hide")
        items[index].classList.toggle("item-hide")
    })
}


