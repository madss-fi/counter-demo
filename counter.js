let counterElement = document.getElementById("counterValue");

function onIncrement(){
    let previousValue=counterElement.textContent;
    let updatedValue = parseInt(previousValue)+1;

    if(updatedValue>0){
        counterElement.style.color="green";
    }
    else if(updatedValue<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
    counterElement.textContent = updatedValue;

}
function onDecrement(){
    let previousValue=counterElement.textContent;
    let updatedValue = parseInt(previousValue)-1;

    if(updatedValue>0){
        counterElement.style.color="green";
    }
    else if(updatedValue<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
    counterElement.textContent = updatedValue;

}
function onReset(){
    let counterValue=0;
    counterElement.textContent = counterValue;
    counterElement.style.color="black";

}