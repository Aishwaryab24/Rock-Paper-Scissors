let userScore = parseInt(localStorage.getItem("userScore")) || 0;
let pcScore = parseInt(localStorage.getItem("pcScore")) || 0;

document.querySelector(".pc h2").innerText = pcScore;
document.querySelector(".user h2").innerText = userScore;


const userChoice = (youPick) => {
    // console.log("clicked");
    console.log(youPick);
    let play = document.querySelector(".play");
    play.style.display = "none";

    let resultbox = document.querySelector(".resultbox");
    resultbox.style.display = "flex";

    document.getElementById("userPicked").src = `assets/${youPick}.png`;
    document.getElementById("highlight1").className = `hand hand2 ${youPick}`;

    let pc = pcChoice();
    console.log(pc);
    decision(youPick, pc);
}

const pcChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    //console.log(rand);
    let pc = arr[rand];
    //console.log(pc);

    document.getElementById("pcPicked").src = `assets/${arr[rand]}.png`;
    document.getElementById("highlight2").className = `hand hand2 ${pc}`;
    return pc;

}

const decision = (user, pc) => {
    document.getElementById("highlight1").classList.remove("highlight");
    document.getElementById("highlight2").classList.remove("highlight");
    if (user == "rock" && pc == "scissors" || user == "paper" && pc == "rock" || user == "scissors" && pc == "paper") {
        setDecision("YOU WIN");
        document.querySelector(".result2").style.display = "block";
        document.querySelector(".decision button").innerText = "PLAY AGAIN";
        setScore(userScore++);
        nextButton();
        // highlight();
        document.getElementById("highlight1").classList.add("highlight");
    }
    else if (user == "rock" && pc == "paper" || user == "paper" && pc == "scissors" || user == "scissors" && pc == "rock") {
        setDecision("YOU LOST");
        document.querySelector(".result2").style.display = "block";
        document.querySelector(".decision button").innerText = "PLAY AGAIN";
        setScore(pcScore++);
        document.getElementById("highlight2").classList.add("highlight");
    } else {
        setDecision("TIE UP");
        document.querySelector(".result2").style.display = "none";
        document.querySelector(".decision button").innerText = "REPLAY";
    }


}

const setDecision = (decision) => {
    document.querySelector(".result1").innerText = decision;
}

const setScore = (newScore) => {
    // userScore=userScore;
    // pcScore=pcScore;
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("pcScore", pcScore);
    document.querySelector(".pc h2").innerText = pcScore;
    document.querySelector(".user h2").innerText = userScore;
}

const restart = () => {
    let resultbox = document.querySelector(".resultbox");
    resultbox.style.display = "none";

    let play = document.querySelector(".play");
    play.style.display = "block";

    document.querySelector(".next").style.display = "none";
}

const showRules = () => {
    document.querySelector(".rules").style.display = "flex";
}

const closeRules = () => {
    document.querySelector(".rules").style.display = "none";
}

const nextButton = () => {
    document.querySelector(".next").style.display = "flex";
}

const highlight = () => {
    if (setDecision === "YOU WIN") {
        let a = document.getElementById("highlight");
        document.getElementById("highlight").classList.add("highlight");
    }
    else if (setDecision === "YOU LOST") {
        document.getElementById("highlight").classList.add("highlight");
    }
}