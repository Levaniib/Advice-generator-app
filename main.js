let h1 = document.querySelector(".h1")
let advice = document.querySelector(".advice")
let dice = document.querySelector(".dice")  


axios.get("https://api.adviceslip.com/advice").then(function (response) {
    h1.innerHTML = "ADVICE" + " #" + response.data.slip.id
    advice.innerHTML = "''" + response.data.slip.advice + "''"
console.log(response);
  dice.addEventListener("click", function(){
    h1.innerHTML = "ADVICE" + " #" + response.data.slip.id
    advice.innerHTML = "''" + response.data.slip.advice + "''"
    location.reload()
  })

});