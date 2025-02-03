alert("Welcome to Rock Paper Scissors ")

function RPS(){
    const choices = ["Rock","Paper","Scissors"]

    const pprbtn = document.getElementById("btn1");
    const rckbtn = document.getElementById("btn2");
    const scibtn = document.getElementById("btn3");

    const resd = document.getElementById("ft")
    const gamecont = document.querySelector(".mb")
    gamecont.appendChild(resd)

    function randind(){
        const compch = Math.floor(Math.random() * choices.length)
        return choices[compch]
    }

    function detwinner(userchoice, computerchoice){
        if (userchoice === computerchoice){
            return "It's a draw!!!"
        }
        else if ((userchoice == "Rock" && computerchoice == "Scissors") ||
                (userchoice == "Paper" && computerchoice == "Rock") ||
                (userchoice == "Scissors" && computerchoice == "Paper")){
                    return "You Win!!!"
        }
        else{
            return "You Lose!!!"
        }
    }

    function playgame(userchoice){
        const comch = randind();
        const res = detwinner(userchoice, comch);
        resd.innerHTML = `Your Choice :&nbsp;<strong>${userchoice}</strong>&nbsp;
                        Computer Choice :&nbsp;<strong>${comch}</strong>&nbsp;
                        Result :&nbsp;<strong>${res}</strong>`
    }

    pprbtn.addEventListener("click" , ()=> playgame("Paper"))
    rckbtn.addEventListener("click" , ()=> playgame("Rock"))
    scibtn.addEventListener("click" , ()=> playgame("Scissors"))
}

RPS();