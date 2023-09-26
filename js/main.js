let  DaysP = document.getElementById("Days")
let  hoursP = document.getElementById("hours")
let  MinutesP = document.getElementById("Minutes")
let secondP = document.getElementById("second")

let contDownTime = new Date("Dec 31 , 2060 23:59:59").getTime();
console.log(contDownTime);
let counter  =  setInterval(() => {
    

    let DatNew = new Date().getTime();
    let DateDIff = contDownTime - DatNew ;
    let  years = Math.floor((DateDIff / (1000 * 60 *60 * 24 * 30 * 12)) ) ;
   
    let Mounths = Math.floor((DateDIff % (1000 * 60 *60 * 24 * 30 * 12)) / (1000 * 60 *60 * 24 * 30))  ;

    let Days =Math.floor(((DateDIff % (1000 * 60 *60 * 24 * 30 * 12)) % (1000 * 60 *60 * 24 * 30)) / (1000 * 60 *60 * 24 ))  ;

DaysP.innerHTML = Days ;
let Hours =Math.floor((((DateDIff % (1000 * 60 *60 * 24 * 30 * 12)) % (1000 * 60 *60 * 24 * 30)) % (1000 * 60 *60 * 24 )) / (1000 * 60 * 60)) ;

hoursP.innerHTML = Hours;
let   Minutes =Math.floor(((((DateDIff % (1000 * 60 *60 * 24 * 30 * 12)) % (1000 * 60 *60 * 24 * 30)) % (1000 * 60 *60 * 24 )) % (1000 * 60 * 60)) / (1000 * 60 ))  ;
MinutesP.innerHTML = Minutes;
let second = Math.floor((((((DateDIff % (1000 * 60 *60 * 24 * 30 * 12)) % (1000 * 60 *60 * 24 * 30)) % (1000 * 60 *60 * 24 )) % (1000 * 60 * 60)) % (1000 * 60 )) / 1000) ;

secondP.innerHTML = second ;
}, 1); 
