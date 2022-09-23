let homeResultEl = document.getElementById("homeResult")


let guestResultEl = document.getElementById("guestResult")


let homeScore = 0
let guestScore = 0

function addOneHome() {
    homeScore += 1
    homeResultEl.innerText = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeResultEl.innerText = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeResultEl.innerText = homeScore
}

function addOneGuest(){
    guestScore += 1
    guestResultEl.innerText = guestScore
}

function addTwoGuest(){
    guestScore += 2
    guestResultEl.innerText = guestScore
}

function addThreeGuest(){
    guestScore += 3
    guestResultEl.innerText = guestScore
}

function newGame(){
    guestScore = 0
    guestResultEl.innerText = guestScore
    homeScore = 0
    homeResultEl.innerText = homeScore
}