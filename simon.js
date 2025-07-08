let gameseq = [];
let userseq = [];

let btns = ["red", "green", "yellow", "blue"];

let started = false;
let level = 0;


let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game has started");
        started = true;

        levelup();
    }
});

function gameflash(btn) {
 btn.classList.add("flash");
 setTimeout(() => {
    btn.classList.remove("flash");
 }, 300);
}

function userflash(btn) {
 btn.classList.add("userflash");
 setTimeout(() => {
    btn.classList.remove("userflash");
 }, 300);
}

function levelup() {
    userseq = [];
    level++;
    h3.innerText = `level ${level}`;
    
    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randbtn);
    // console.log(randcolor);
    gameseq.push(randcolor);
    console.log(gameseq)
    gameflash(randbtn);
};

function checkAns(idx){
    // console.log(`current level : ${level}`);
    
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length) {
            setTimeout(levelup, 500);
        }
        

    }
    else {
        h3.innerHTML = `Game Over! <b>Your score was ${level}. <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },700);
        reset();
    }
}


function btnpress() {
    // console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}