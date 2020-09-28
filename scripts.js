//JS

//GREEN OVERLAYS ———————————————————————————————————————————————————————————————————
document.querySelectorAll('.grid-img-cont:not(:first-child)').forEach(bg => {
    bg.addEventListener("click", () => { window.location = window.location.href; });
    let green = bg.firstElementChild;
    bg.addEventListener("mouseover", () => {
        green.classList.add("green-overlay");
        bg.children[1].style.display = "none";
    });
    bg.addEventListener("mouseout", () => {
        green.classList.remove("green-overlay");
        bg.children[1].style.display = "initial";
    });
});

//HAMBURGER ————————————————————————————————————————————————————————————————————————————————————————————————————
let open = false;
document.querySelector("#hamburger").addEventListener("click", () => { 
  if(open == false){
    document.querySelector("#hamburger svg:nth-child(1)").style.transform = "rotate(45deg) translate(8px, 6px)";
    document.querySelector("#hamburger svg:nth-child(2)").style.transform = "rotate(-45deg) translateY(-1px)";
    document.querySelector("#hamburger svg:nth-child(3)").style.opacity = "0";
    document.querySelector("#hamburger svg:nth-child(2)").style.width = "18px";
    let placeholderNav = document.createElement("div");
    placeholderNav.classList.add("placeholder-nav");
    document.querySelector("body").appendChild(placeholderNav);
    open = true;
  }
  else if(open == true){
    document.querySelector("#hamburger svg:nth-child(1)").style.transform = "unset";
    document.querySelector("#hamburger svg:nth-child(2)").style.transform = "unset";
    document.querySelector("#hamburger svg:nth-child(3)").style.opacity = "1";
    document.querySelector("#hamburger svg:nth-child(2)").style.width = "24px";
    document.querySelector(".placeholder-nav").remove();
    open = false;
  }
}); 

//CHECKMARKS ————————————————————————————————————————————————————————————————————————————————————————————
document.querySelectorAll(".fact").forEach(fact => {
    let checkmark = document.createElement("div");
    checkmark.classList.add("check");
    fact.appendChild(checkmark);
});
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let checks = document.querySelector("#facts").getBoundingClientRect().top + (window.innerHeight / 2);
    let scale = 100 * (1 / (checks - scroll) * 8);
    if(scale < 1) scale = 1;
    if(scale > 2) scale = 2;
    if(scroll > 900) scale = 1;
    document.querySelectorAll(".check").forEach(c =>{ c.style.transform = `scale(${scale})`; });
});


 

let stepText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ",
];
let steps =  document.querySelectorAll("svg text");
function SwitchText(num){
    steps.forEach(s => { s.classList.remove("active")});
    steps[num].classList.add("active");
    document.querySelector("#how-we-do p").innerHTML = stepText[num];
    document.querySelector("#how-we-do img").src = `img/img${num + 6}.png`;
    if(!document.querySelector("#how-we-do img").classList.contains("spin")) document.querySelector("#how-we-do img").classList.add("spin");
    else document.querySelector("#how-we-do img").classList.remove("spin");
}


