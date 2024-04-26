let theGame = function () {
    //declaring and initializing variables.
    let turn=0;
    let isGameOver="no";
    let plays= {
        gameArr: [],
    }

    //declaring and initializing DOM varialbes.
    let boxes = document.querySelectorAll(".boxes"); 
    const dialog = document.querySelector("dialog");
    const winText = document.createElement("div");
    const inputPlayerOne = document.querySelector("#playerOne");
    const inputPlayerTwo = document.querySelector("#playerTwo");
    const progress = document.querySelector(".progress");
    let progressText = document.createElement("div");

    //Adds text that's is fist seen on website run.
    progressText.classList.add("text");
    progressText.textContent=`${inputPlayerOne.value}, please make your move!`
    progress.appendChild(progressText);

    //Adds text that tells the first player to make their move if a name has been given. 
    inputPlayerOne.addEventListener("change",()=>{
        progress.removeChild(progressText);
        progressText.textContent=`${inputPlayerOne.value}, please make your move!`
        progress.appendChild(progressText);
    })

    /*Didn't add a code like above for the second palyer's input because 
    the "click" event of the boxes in the TIC-TAC-Toe will take care of that*/

    //xChecker and oChecker are function are for the if-statements below. 
    function xChecker(value) {
        return value === "❌";
    }
    function oChecker(value) {
        return value === "⭕";
    }

    return function logics () {

        //A box is one of the nine parts of the TIC=TAC-TOE. 
        boxes.forEach(box=> {
            box.addEventListener("click", ()=>{

                if (isGameOver==="no" && turn<10 ) {
                if (turn%2===0 && box.innerHTML==="" ) {
                box.innerHTML="❌"
                turn++;
                plays.gameArr[(box.id)-1]="❌";

                //Code that tells who should play next. 
                progress.removeChild(progressText);
                progressText.textContent=`${inputPlayerTwo.value}, please make your move!`
                progress.appendChild(progressText);
                } else if (turn%2===1 && turn<10 && box.innerHTML==="") {
                box.innerHTML="⭕"
                turn++;
                plays.gameArr[(box.id)-1]="⭕";

                progress.removeChild(progressText);
                progressText.textContent=`${inputPlayerOne.value}, please make your move!`
                progress.appendChild(progressText);
                }

                //deconstructed {plays} so that the if-statements aren't too long.    
                const [one, two, three] = plays.gameArr;
                const [, , ,four, five, six] = plays.gameArr;
                const [,,,,,,seven, eight, nine] = plays.gameArr;
                if (
                    [one, two, three].every(xChecker) ||
                    [four, five, six].every(xChecker) ||
                    [seven, eight, nine].every(xChecker) ||
                    
                    [one, five, nine].every(xChecker) ||
                    [three, five, seven].every(xChecker) ||
                        
                    [one, four, seven].every(xChecker) ||
                    [two, five, eight].every(xChecker) ||
                    [three, six, nine].every(xChecker)
                ) {
                    isGameOver="yes";
                    winText.classList.add("text");
                    winText.textContent=`${inputPlayerOne.value} is the winner!`;
                    dialog.appendChild(winText);
                    dialog.showModal();
                } else if (
                    [one, two, three].every(oChecker) ||
                    [four, five, six].every(oChecker) ||
                    [seven, eight, nine].every(oChecker) ||
                            
                    [one, five, nine].every(oChecker) ||
                    [three, five, seven].every(oChecker) ||
                                
                    [one, four, seven].every(oChecker) ||
                    [two, five, eight].every(oChecker) ||
                    [three, six, nine].every(oChecker) 
                ){
                    isGameOver="yes";
                    winText.classList.add("text");
                    winText.textContent=`${inputPlayerTwo.value} is the winner!`;
                    dialog.appendChild(winText);
                    dialog.showModal();
                    console.log("O is the winner")
                } else if(turn===9 && isGameOver==="no") {
                    winText.classList.add("text");
                    winText.textContent=`It was a draw!`;
                    dialog.appendChild(winText);
                    dialog.showModal()
                }
            }
            })
        })
 }        
}();
theGame();

let restart = document.querySelector(".restart");
const dialog = document.querySelector("dialog");
restart.addEventListener("click", ()=> {
    dialog.close();
    location.reload();
})