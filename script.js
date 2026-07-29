gsap.registerPlugin(ScrollTrigger);


gsap.from(".navbar", {
    y:-50,
    opacity:0,
    duration:0.5
});


gsap.from(".hero-content", {
    x:-50,
    opacity:0,
    duration:0.7
});


gsap.from(".hero-image", {
    x:50,
    opacity:0,
    duration:0.7
});
gsap.from(".coffee-section h2", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".coffee-section",
        start: "top 80%"
    }
});


gsap.from(".process h2", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".process",
        start: "top 80%"
    }
});


gsap.from(".about-content h2", {
    x: 50,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
    }
});

const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".menu-card");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        cards.forEach(card => {

            if(filter === "all" || card.dataset.category === filter){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }

        });

    });

});
const orderBtn = document.querySelector(".nav-btn button");

const modal = document.querySelector(".order-modal");

const closeBtn = document.querySelector(".close");


orderBtn.addEventListener("click",()=>{

    modal.style.display="flex";

});


closeBtn.addEventListener("click",()=>{

    modal.style.display="none";

});
const hamburger = document.querySelector(".hamburger");

const menu = document.querySelector(".menu");


hamburger.addEventListener("click",()=>{

    menu.classList.toggle("active");

});
const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;


document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});


gsap.to({}, {
    duration: 0.01,
    repeat: -1,
    onRepeat: () => {

        gsap.set(cursor, {
            x: mouseX,
            y: mouseY
        });

    }
});

const cart = [];

const cartPanel = document.querySelector(".cart-panel");

const cartButton = document.querySelector(".cart");

const closeCart = document.querySelector(".cart-close");

const cartItems = document.querySelector(".cart-items");

const totalText = document.querySelector(".cart-total");


cartButton.addEventListener("click",()=>{

    cartPanel.classList.add("active");

});


closeCart.addEventListener("click",()=>{

    cartPanel.classList.remove("active");

});


document.querySelectorAll(".add-cart").forEach(button=>{


button.addEventListener("click",()=>{


const card = button.parentElement;


const name = card.querySelector("h3").innerText;


const price = card.querySelector("h4").innerText;


cart.push({

name:name,

price:price

});


updateCart();


});


});



function updateCart(){


cartItems.innerHTML="";


let total=0;


cart.forEach(item=>{


let number = parseInt(item.price.replace("₹",""));


total += number;


cartItems.innerHTML += `

<div class="cart-item">

${item.name}

<br>

${item.price}

</div>

`;


});


totalText.innerText = "Total: ₹" + total;

const cartNumber = document.querySelector("#cart-count");
cartNumber.innerText = cart.length;


}