let incvalue = document.getElementById("values");

function increase(){
    let value = incvalue.textContent;
    let inc = parseInt(value) + 1;

    if(inc > 0){
        incvalue.style.color = "green";
    }
    else if(inc < 0){
        incvalue.style.color = "red";
    }
    else{
        incvalue.style.color = "black";
    }
    
    incvalue.textContent = inc;

}

function decrease(){
    let value = incvalue.textContent;
    let inc = parseInt(value) - 1;

    if(inc > 0){
        incvalue.style.color = "green";
    }
    else if(inc < 0){
        incvalue.style.color = "red";
    }
    else{
        incvalue.style.color = "black";
    }
    
    incvalue.textContent = inc;
}

function reset(){
    let value = 0;
    incvalue.textContent = value;
    incvalue.style.color = "black";
}
