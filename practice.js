let boxes = document.querySelectorAll(".box");
let showWinner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");
let resetGameBtn = document.querySelector("#reset-btn");

let turnO = true;

let winPatterns = [[0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],]



 boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
       turn(box);
       checkWinner();
    })
})

 const turn = (box) =>{
    if(turnO){
        box.innerText = "O";
        turnO = false;
       }else{
        box.innerText = "X";
        turnO = true;
        }
 }

checkWinner = ()=>{
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 !="" && posVal2 !="" &&  posVal3){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                winner(posVal1);
            }
        }
    }
}
 winner = (win) =>{
   msg.innerText = `Congratulation , winner is ${win}`
   showWinner.classList.remove("hide");
   disabledBoxes();
 }

disabledBoxes = () =>{
 for(let box of boxes){
    box.disabled = true;
 }
}
 
enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
 
resetbtn = () =>{
    turnO = true;
    enabledBoxes();
    showWinner.classList.add("hide");
}

newGameBtn.addEventListener("click",resetbtn);
resetGameBtn.addEventListener("click",resetbtn);





















