let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let highscore=0
let highscoreEl =document.getElementById("highscore-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    if(count>highscore)
    { highscore=count
    highscoreEl.textContent = " HIGHSCORE : "+highscore
    alert("CONGRATS!! You have created a new highscore")}
   
    countEl.textContent = 0
    count = 0
}
