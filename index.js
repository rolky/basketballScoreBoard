let homePointsEl = document.getElementById("home-points");
let guestPointsEl = document.getElementById("guest-points");

let homePoints = 0;
let guestPoints = 0;

function homeScore1Point(){
  homePoints += 1
  homePointsEl.textContent = homePoints
}

function homeScore2Points(){
  homePoints += 2
  homePointsEl.textContent = homePoints
}

function homeScore3Points(){
  homePoints += 3
  homePointsEl.textContent = homePoints
}

function guestScore1Point(){
  guestPoints += 1
  guestPointsEl.textContent = guestPoints
}

function guestScore2Points(){
  guestPoints += 2
  guestPointsEl.textContent = guestPoints
}

function guestScore3Points(){
  guestPoints += 3
  guestPointsEl.textContent = guestPoints
}

function endGame(){
  homePoints = 0
  guestPoints = 0
  homePointsEl.textContent = homePoints
  guestPointsEl.textContent = guestPoints
}



