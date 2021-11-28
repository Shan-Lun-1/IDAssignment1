
var i = 0;
var welcome = ["Start Your Crypto Journey With Coinbase Today",
"Buy, sell and exchange cryptocurrency easily and securely"];

function typeTitle() {
    document.querySelector("#title").innerHTML = welcome[0].substring(0,i);
    
    ++i;
    if(i <= welcome[0].length){
        setTimeout(typeWelcome, 30);
        
    }
}

i = 0;
function typeSub(){
    document.querySelector("#sub").innerHTML = welcome[1].substring(0,i);
    ++i;
    if(i <= welcome[1].length){
        setTimeout(typeSub, 30);  
    }
}

function typeWelcome(){
    typeTitle();
    typeSub();
}

function color(x){
    x.style.color = "#226ee1";
}

function colorNormal(x){
    x.style.color = "black";
}

