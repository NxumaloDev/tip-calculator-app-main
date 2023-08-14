let price = document.querySelector(".price")
let numOfPeople = document.querySelector(".people")
let tipAmount = document.querySelector(".tip_a")
let total = document.querySelector(".total")
let customTip = document.querySelector(".custom")
let errorText = document.querySelector(".errorText")

document.querySelector(".five").onclick = function five(){
  newPrice = Number(price.value) + (price.value * .05)
}
document.querySelector(".ten").onclick = function ten(){
  newPrice = Number(price.value) + (price.value * .1)
}
document.querySelector(".fiveteen").onclick = function fiveteen(){
  newPrice = Number(price.value) + (price.value * .15)
}
document.querySelector(".twentyfive").onclick = function twentyfive(){
  newPrice = Number(price.value) + (price.value * .25)
}
document.querySelector(".fifty").onclick = function fifty(){
  newPrice = Number(price.value) + (price.value * .5)
}
customTip.onclick = function custom(){
  customTip = document.querySelector(".input").value
  newPrice = Number(price.value) + (price.value * (customTip / 100))
}
document.querySelector("#calc").onclick = function yooh(){
  if (numOfPeople.value == 0){
    errorText.style.display = "block"
}
else {
    errorText.style.display = "none"
  }

  tipAmount.textContent = "$" + ((newPrice - price.value) / numOfPeople.value).toFixed(2)
  total.textContent = "$" + (newPrice / numOfPeople.value).toFixed(2)
  
  document.querySelector(".btn").onclick = function clear() {
    tipAmount.textContent = "$00.00"
    total.textContent = "$00.00"
    numOfPeople.value = "0"
    price.value = "0"
    }
}