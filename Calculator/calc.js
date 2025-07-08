let btn = document.querySelectorAll("button");
let inp = document.querySelector("input");

for(let i = 0; i<btn.length; i++) {
   btn[i].addEventListener("click", function() {
     let btnvalue = btn[i].textContent;
    //  console.log(btnvalue);

    if(btnvalue === "C") {
        clearResult();
    } else if(btnvalue === "=") {
        calculateResult();
    } else{
        appendValue(btnvalue);
    }
   });
}

function clearResult() {
    inp.value = "";
}


function calculateResult() {
    inp.value = eval(inp.value);  //eval is a function called evaluate
}

function appendValue(btnvalue) {
    inp.value += btnvalue;
}
