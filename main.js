let price = document.getElementById("price");
let numPeople = document.getElementById("people");
let custom = document.getElementById("custom");
let percents = document.querySelectorAll(".tip p");
let tipAmount = document.querySelector(".resultBox .right :nth-child(1)");
let total = document.querySelector(".resultBox .right :nth-child(2)");
let reset = document.getElementById("reset");

// Typing on price input
price.onkeyup = ()=>{
if(price.value == '0' || price.value == ''){
document.querySelector(".msg").style.visibility = "visible"
price.style.border = "2px solid red";
price.style.borderRadius = "4px"
total.innerHTML = "$0.00";
}else{
document.querySelector(".msg").style.visibility = "hidden"
price.style.border = "none"
}
// Typing on people input
numPeople.onkeyup = ()=>{
if(numPeople.value == '0' || numPeople.value == ""){
document.querySelector(".msgg").style.visibility = "visible";
numPeople.style.border = "2px solid red";
numPeople.style.borderRadius = "4px"
total.innerHTML = "$0.00";
tipAmount.innerHTML = "$0.00"
}else{
document.querySelector(".msgg").style.visibility = "hidden"
numPeople.style.border = "none"
total.innerHTML = `$${price.value/numPeople.value}.00`;
tipAmount.innerHTML = "$0.00"
// Click on 5%
percents[0].onclick = ()=>{
tipAmount.innerHTML = `$${(price.value * 0.05)/numPeople.value}.00`;
total.innerHTML = `$${(+price.value + +(price.value * 0.05))/numPeople.value}.00`;
}
// Click on 10%
percents[1].onclick = ()=>{
tipAmount.innerHTML = `$${(price.value * 0.1)/numPeople.value}.00`;
total.innerHTML = `$${(+price.value + +(price.value * 0.1))/numPeople.value}.00`;
}
// Click on 15%
percents[2].onclick = ()=>{
tipAmount.innerHTML = `$${(price.value * 0.15)/numPeople.value}.00`;
total.innerHTML = `$${(+price.value + +(price.value * 0.15))/numPeople.value}.00`;
}
// Click on 25%
percents[3].onclick = ()=>{
tipAmount.innerHTML = `$${(price.value * 0.25)/numPeople.value}.00`;
 total.innerHTML = `$${(+price.value + +(price.value * 0.25))/numPeople.value}.00`;
}
// Click on 50%
percents[4].onclick = ()=>{
tipAmount.innerHTML = `$${(price.value * 0.5)/numPeople.value}.00`;
   total.innerHTML = `$${(+price.value + +(price.value * 0.5))/numPeople.value}.00`;
}
// Custom Percent input
custom.onkeyup = ()=>{
tipAmount.innerHTML =  "$" +`${price.value * +`0.${custom.value}`}`/ numPeople.value + ".00";
total.innerHTML = "$" + `${+price.value + +(price.value * +`0.${custom.value}`)}` /numPeople.value + ".00";
}
}
}
// Click On Reset Button
reset.onclick = ()=>{
tipAmount.innerHTML = "$0.00"
total.innerHTML = "$0.00"
price.value =""
numPeople.value = ""
}
}












