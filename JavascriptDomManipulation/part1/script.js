// Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"

function changeHb1(){
  document.getElementById("head").innerText = "I'm Right!";
}

function changeHb2(){
  document.getElementById("head").innerText = "No, I'm Right!";
}
