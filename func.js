

function name (name){ console.log(`hoşgeldiniz ${name}`)};
name("sev"); //hoşgeldiniz sev

//////


//const namee=prompt("adın ne?");
//const surName=prompt("soyadın ne?");

// const fullName=function(namee,surname){
//     return namee+" "+surname;
//     return ` hosgeldın ${namee} ${surName}`;
// };

// const son=fullName(namee,surName);
// console.log(son);

///

//objeler

const person={ a:10,b:20};
let arr=[]
console.log(person.a);
console.log(person["b"]);

arr.push(person)

for(x of arr);
console.log(x);  //{a: 10, b: 20}

const names=[{
    first:"sevim",
    second:"seven",
    thirth:"sevgi"
},
{
    first:"sevim1",
    second:"seven1",
    thirth:"sevgi1"
}]
let bos=names.map((x)=>{ //obje arrayındeki first lerden yeni array oluşturduk
return x["first"];
});

console.log(bos);


//// date
const date=new Date;
date.setFullYear("2024")
console.log(date);

/// ternary operatoru

let ter=date.getFullYear=="2024"? "2025 teyiz":"tarih yanlış"
console.log(ter);//bunu yapamadım

let day="thursday";
let tern=day=="thursday"? "bugun perşembe": "başka gün"
console.log(tern);

//objeden isimleri alıp yeni array yap?
const obj=[
    {ad:"ayşe", yas:10},
    {ad:"ayş0", yas:10},
    {ad:"ayşecik", yas:10},
]

obj.map((ad,yas)=>{console.log(ad.ad+" "+ad.yas );})

/// bir arraydki degerleri kucukten buyuge sıralama?
let newArr=[2,6,85,64];
let resultMax=newArr.sort((x,y)=>{return y-x;});
console.log(`büyükten küçüğe: ${resultMax}`);
/// bir arraydki degerleri kucukten buyuge sıralama?
let newArr1=[2,6,85,64];
let resultMin=newArr.sort((x,y)=>{return x-y;});
console.log(`küçükten büyüğe: ${resultMin}`);
