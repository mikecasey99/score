let home = document.getElementById("scoreHome");
let guest = document.getElementById("scoreGuest");
let homeScore = 0;
let guestScore = 0;


function addOneHome(){
    homeScore += 1;
    home.textContent = homeScore;
}
function addTwoHome(){
    homeScore += 2;
    home.textContent = homeScore;
}
function addThreeHome(){
    homeScore += 3;
    home.textContent = homeScore;
}


function addOneGuest(){
    guestScore += 1;
    guest.textContent = guestScore;
}
function addTwoGuest(){
    guestScore += 2;
    guest.textContent = guestScore;
}
function addThreeGuest(){
    guestScore += 3;
    guest.textContent = guestScore;
}