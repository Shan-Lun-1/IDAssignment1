/*Navigation bar */

function dropdownNav(){
    var x = document.getElementById("dropdown");
    var y = document.getElementById("products");
    if (x.style.visibility == "hidden"){
     x.style.visibility = "visible";
     y.style.zIndex = '-1';
    } else{
      x.style.visibility = "hidden";
      x.style.zIndex = '2';
    }
 }

 /*========Home Page========*/
/*Welcome Text*/
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

/*change color of link when hover */

function color(x){
    x.style.color = "#226ee1";
}

function colorNormal(x){
    x.style.color = "black";
}

/*========Contact Page========*/
/*Text box will appear if user chose others*/
function optionOthers(option){
    var x = document.getElementById("other");
    var y =  document.getElementById("other-tag")
    if(option=="Others"){
      x.setAttribute("required",true);
      x.style.display = "block";
      y.style.visibility = "visible";
    } else{
      x.style.display = "none";
      y.style.visibility = "hidden";
    }
}


/*Generate message with form data*/

let submitform = document.getElementById('fsubmit');


submitform.addEventListener("click", function(e){
    e.preventDefault();
    const valid = ['false','false','false'];
    let name = document.getElementById('fname').value;
    let email = document.getElementById('femail').value;
    let area = document.getElementById('area').value;

    if(name.trim() == ""){
        document.getElementById('name-valid').innerHTML = `Please enter your name`;
    }else{
        document.getElementById('name-valid').innerHTML = ``;
        valid[0] = 'true';
    }

    if(valid[1] == 'false'){
        if(email.trim() == ""){
            document.getElementById('email-valid').innerHTML = `Please enter your email`;
        }else if((email.indexOf("@") == -1 || email.indexOf("@") == email.length -1) 
        || (email.indexOf('.') == -1 || email.indexOf('.') == email.length -1) || 
        email.length > 320) {
            document.getElementById('email-valid').innerHTML = `Please enter a valid email`;
        }else{
            document.getElementById('email-valid').innerHTML = ``;
            valid[1] = 'true';
        }
    }

    if(area == ""){
        console.log(area);
        document.getElementById('option-valid').innerHTML = `Please select an option`;
    }else{
        document.getElementById('option-valid').innerHTML = ``;
        valid[2] = 'true';
    }
    
    let text = "";
    text += `Hi ${name}, our team looks forward to reading your message regarding"${area}". We will get back to you as soon as possible through your email: ${email}. Have a great day ahead.` ;
    if ((valid[0] == valid[1]) && (valid[1] == valid[2]) && (valid[2] == 'true')){
      
        alert(text);
        name = document.getElementById('fname').value = '';
        email = document.getElementById('femail').value = '';
        area = document.getElementById('area').value = '';
        other = document.getElementById('other').value = '';
        desc = document.getElementById('desc').value = '';

        submitform.style.backgroundColor = "green";
        submitform.innerHTML = `Message Sent`;
    }





    
    
    
});

