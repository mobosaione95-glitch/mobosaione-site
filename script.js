// ===== اسلایدر خودکار =====

let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

}

function nextSlide(){

current++;

if(current >= slides.length){

current = 0;

}

showSlide(current);

}

showSlide(current);

setInterval(nextSlide,4000);


// ===== دکمه بازگشت به بالا =====

const topBtn = document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ===== انیمیشن هنگام اسکرول =====

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.brand,.instagram,.repair,.slider").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

observer.observe(el);

});


// ===== افکت نور روی موس =====

document.addEventListener("mousemove",(e)=>{

document.body.style.background=
radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
rgba(21,101,255,.12),
#0d1117 45%);

});


// ===== تایپ شدن متن هدر =====

const title=document.querySelector(".hero-text h1");

if(title){

const txt=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<txt.length){

title.innerHTML+=txt.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

}
