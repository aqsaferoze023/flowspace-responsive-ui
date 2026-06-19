const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

themeBtn.innerHTML=

document.body.classList.contains("dark")

? "☀️"

: "🌙";

};

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const menu=document.querySelector(".menu-btn");

const links=document.querySelector(".nav-links");

menu.onclick=()=>{

if(links.style.display==="flex"){

links.style.display="none";

}else{

links.style.display="flex";

links.style.flexDirection="column";

}

};