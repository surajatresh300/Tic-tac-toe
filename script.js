let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () =>{
      turnO=true;
      enableboxes();
      msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwin();
  });
});

const disableboxes=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
}
const enableboxes=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
}
let draw = () =>{
   msg.innerText="Draw, nobody won";
   msgcontainer.classList.remove("hide");
}

const showwinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkwin = () => {
  for (let pattern of winPattern) {
    let p1val = boxes[pattern[0]].innerText;
    let p2val = boxes[pattern[1]].innerText;
    let p3val = boxes[pattern[2]].innerText;

    if (p1val != "" && p2val != "" && p3val != "") {
      if (p1val === p2val && p2val === p3val) {
        console.log("winner", p1val);
        showwinner(p1val);
      }
    }
  }
};
 
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click", resetGame);
