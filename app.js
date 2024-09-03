let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
   if (!started) {
       console.log("game is started");
       started = true;
       levelUp();
   }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randInd = Math.floor(Math.random() * 4);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq); 
    btnFlash(randBtn);
}

function checkAns(idx) {
if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML=`Game over ! your score was <b>${level}</b> ..... Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
setTimeout(function() {
    document.querySelector("body").style. backgroundColor="white";
},150 );
    reset();
}
}

function btnPress() {
    
   let btn=this;
   userflash(btn);



  userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}