let boxes = document.querySelectorAll(".box");
let resetButt = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winnerArray = [
    [0, 1, 2],  
    [3, 4, 5],  
    [6, 7, 8],   
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],  
    [0, 4, 8],  
    [2, 4, 6]   
  ];
  
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;
        checkWinner();
    })
 } )
 const checkWinner =()=>{
for(let pattern of winnerArray){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1===pos2 && pos2 === pos3){
            finish(pos1);
        }
    }
}
 }

 const finish = (winner) =>{
    nomore();
    msg.innerText=`Winner is ${winner}`
    msgContainer.classList.remove("hide");
 }
 const nomore = ()=>{
    for(let box of boxes){
        box.disabled = true; 
    }
}
 const somore = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
 const resetGame =()=>{
somore();
turnO = true;
msgContainer.classList.add("hide")
 }

 newGamebtn.addEventListener("click",resetGame);
 resetButt.addEventListener("click",resetGame);