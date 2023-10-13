
const inpt=document.querySelector("#todo");
const header=document.querySelector(".lead");
inpt.addEventListener("keyup",yaz);
function yaz(e){
  header.textContent= e.target.value;

 //console.log( e.key);
}

const head=document.getElementsByClassName("lead")[0];
head.innerHTML='Seven \'in yapılacaklar listesi <span>	<i class="fa-light fa-paw"></i> </span>';


const uller=document.querySelector(".list-group");
//console.log(uller);
let value=uller.children;


for (let index = 0; index < value.length; index++) {
    value[index].style.color="blue";
  
}

const h55=document.getElementsByTagName("h5");
let nw=Array.from(h55);
nw[1].style.backgroundColor="pink"
console.log(nw);


// value.array.forEach(element => {
//     element.style.color="blue";
// });

const form=document.querySelector("#todo-form");//elementin ekleneceği yer
let element=document.createElement("button");//elementi oluşturma
element.type="reset";
element.className="btn btn-danger";
element.style.marginTop="10px"
element.appendChild(document.createTextNode("reset"));//elemente metin ekleme
form.appendChild(element);//elemanı ekleme işlemi
//console.log(element);


////EVEnt EKLEME
//1.event ekleme yöntemi
form.onsubmit=function(event){console.log("naber");event.preventDefault()}

//2.event ekleme yöntemi
function sub(e){
    console.log("2.");
    console.log(e);
}

form.addEventListener("submit",sub);




