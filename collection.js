var productcontainer=document.querySelector(".products")
var search=document.querySelector(".search")
var product=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    searchelement=event.target.value.toUpperCase()

    for(var i=0;i<product.length;i++){
        var productname = product[i].querySelector("p").textContent.toUpperCase()

        if(productname.indexOf(searchelement)>=0){
            product[i].style.display="block"
        }
        else{
            product[i].style.display="none"
        }
    }
})

var sidenavbar=document.querySelector(".sidenavbar")

function shownav(){
    sidenavbar.style.left="0%"
}

function closenav(){
    sidenavbar.style.left="-60%"
}

