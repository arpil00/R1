
/*

let color = localStorage.getItem("color-optin");

if (color !== null){
    document.documentElement.style.setProperty('--min-color', localStorage.getItem("color-optin"));
    
    document.querySelectorAll(".lis li").forEach(element =>{
        
        element.classList.remove("activ");
        
        if (element.dataset.color === color){
            element.classList.add("activ");
        }
        
    });
    
    

}


let bacop = true;

let bacin;

let bacoop = localStorage.getItem("bacgg");

if (bacoop !== null){

if (bacoop === 'true'){

    bacop = true;

} else{

    bacop = false;

}

document.querySelectorAll(".run span").forEach(element =>{
        
    element.classList.remove("activ");   
});

if (bacoop === 'true'){
document.querySelector(".run .yes").classList.add("activ");
}else{
    document.querySelector(".run .no").classList.add("activ");
}

};


document.querySelector(".ico .i-1").onclick = function(){

this.classList.toggle("fa-spin");

document.querySelector(".box").classList.toggle("open");

};


const col =document.querySelectorAll(".lis li");

col.forEach( li => {

li.addEventListener("click", (e) => {

document.documentElement.style.setProperty('--min-color', e.target.dataset.color);

localStorage.setItem("color-optin", e.target.dataset.color);

e.target.parentElement.querySelectorAll(".activ").forEach(element =>{

element.classList.remove("activ");

});

e.target.classList.add("activ");

});

});


const bac = document.querySelectorAll(".run span");

bac.forEach( span => {

span.addEventListener("click", (e) => {



e.target.parentElement.querySelectorAll(".activ").forEach(element =>{

element.classList.remove("activ");

});

e.target.classList.add("activ");

if (e.target.dataset.bac === 'yes'){
    bacop = true ;
    randomizImgs()
localStorage.setItem("bacgg", true);
} else{
    bacop = false ;
    clearInterval(bacin);
    localStorage.setItem("bacgg", false);
}

});

});


let landing = document.querySelector(".landing");

let imge = [ "b1.jpg", "b2.jpeg", "b3.jpg", "b4.jpg", "b5.jpg" ];


function randomizImgs(){

if (bacop === true){

  bacin =  setInterval(() => {
        let randomp = Math.floor(Math.random() * imge.length);
        
        landing.style.backgroundImage = 'url("../imge/' + imge[randomp] +'")' ;
        
        }, 8000);

}

}

randomizImgs()
*/




let oo = document.querySelector('.s');
let d = document.querySelector('.go');
let c = document.querySelector('.i');


oo.onclick = function () {
d.style.width = '250px'
};

c.onclick = function () {
d.style.width = '0'
};


let ul = document.querySelectorAll('.listt li');
let img = Array.from(document.images);

ul.forEach((li) => {
li.addEventListener("click", removeo);
li.addEventListener("click", imge);
});

function removeo () {
ul.forEach((li) => {
li.classList.remove("activ");
this.classList.add("activ");
});
}

function imge (){
img.forEach((o) => {
o.style.display = "none";
});
document.querySelectorAll(this.dataset.cat).forEach((el) =>{
el.style.display = "block";
});
}


let ww = document.getElementsByClassName("conr");
let i;

for (i = 0; i < ww.length; i++){
ww[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.display === "block") {
  panel.style.display = "none";
} else {
  panel.style.display = "block";
}
});
};
