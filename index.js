let scoreHomeBtnOne = document.getElementById("home-score-btn-1")
let scoreHomeBtnTwo = document.getElementById("home-score-btn-2")
let scoreHomeBtnThree = document.getElementById("home-score-btn-3")
let scoreHomeEl = document.getElementById("score-home")
let scoreHome = 0

function add1Home() {
    scoreHome +=1
    scoreHomeEl.textContent = scoreHome
    console.log(scoreHomeBtnOne)
}

function add2Home() {
    scoreHome +=2
    scoreHomeEl.textContent = scoreHome
    console.log(scoreHomeBtnTwo)
}

function add3Home() {
    scoreHome +=3
    scoreHomeEl.textContent = scoreHome
    console.log(scoreHomeBtnThree)
}

let scoreGuestBtnOne = document.getElementById("guest-score-btn-1")
let scoreGuestBtnTwo = document.getElementById("guest-score-btn-2")
let scoreGuestBtnThree = document.getElementById("guest-score-btn-3")
let scoreGuestEl = document.getElementById("score-guest")
let scoreGuest = 0

function add1Guest() {
    scoreGuest +=1
    scoreGuestEl.textContent = scoreGuest
    console.log(scoreGuestBtnOne)
}

function add2Guest() {
    scoreGuest +=2
    scoreGuestEl.textContent = scoreGuest
    console.log(scoreGuestBtnTwo)
}

function add3Guest() {
    scoreGuest +=3
    scoreGuestEl.textContent = scoreGuest
    console.log(scoreGuestBtnThree)
}

let newGameBtn = document.getElementById("new-game-btn")
let newGameScoreHome = document.getElementById("score-home")
let newGameScoreGuest = document.getElementById("score-guest")

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    newGameScoreHome.textContent = scoreHome
    newGameScoreGuest.textContent = scoreGuest
    console.log(newGameBtn)
}
