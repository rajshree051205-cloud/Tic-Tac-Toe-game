let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnA= true;//player A

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame =() =>{
    trueA=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)    => {
    box.addEventListener("click" , () =>{
       // console.log("Box wsa clicked");
       if(turnA===true){//playerA
        box.innerText="O";
        turnA=false;
         }
       else{
        box.innerText="X";
        turnA=true;
       }
       box.disabled=true;
    

        checkWinner();
        
 } );
});

const disablBoxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
};
const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
};
const showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablBoxes();
};
const checkWinner = () => {
        for ( let pattern of winPatterns){
           
            let ps1Val=boxes[pattern[0]].innerText;
            let ps2Val=boxes[pattern[1]].innerText;
            let ps3Val=boxes[pattern[2]].innerText;

            if(ps1Val  !="" && ps2Val != "" && ps3Val != ""){
                if(ps1Val === ps2Val && ps2Val===ps3Val && ps3Val===ps1Val){
                    console.log("winner" ,ps1Val);
                    showWinner(ps1Val);
                }
            }
        }
    };

    newGameBtn.addEventListener("click",  resetGame);
      resetBtn.addEventListener("click", resetGame);