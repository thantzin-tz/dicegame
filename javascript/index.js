let player1 = prompt("Enter Player-1's Name ")
let player2 = prompt("Enter Player-2's  Name ")

if(player1 === null){
    document.querySelector("#player1").textContent = "Player 1";
}else{
    document.querySelector("#player1").textContent = player1
}
if(player2 === null){
    document.querySelector("#player2").textContent = "Player 2"
}else{
    document.querySelector("#player2").textContent = player2
}

function play(p1, p2){
    
    let audio = new Audio("sounds/diceRollVoice.mp3");
        audio.play();
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

   

    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
 
    if(randomNumber1 > randomNumber2){
       if(player1 === null){
        document.querySelector("h1").textContent = `Player 1 🏆 Wins! 🎉`;
       }else{
        document.querySelector("h1").textContent = `${player1} 🏆 Wins! 🎉`;
       }
    } else if(randomNumber1 === randomNumber2){
        document.querySelector("h1").textContent = "Draw! 🤝";
    }else{
        if(player2 === null){
            document.querySelector("h1").textContent = `Player 2 🏆 Wins! 🎉`;
        }else{
            document.querySelector("h1").textContent = `${player2} 🏆 Wins! 🎉`;
        }
    }
 
}

document.querySelector("#btn").setAttribute("onclick", "play(player1, player2)");
