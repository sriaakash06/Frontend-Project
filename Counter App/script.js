 let count=0;

function increment(){
    count++;
    document.getElementById("change").textContent=count;

}

function decrement(){
    count--;
    document.getElementById("change").textContent=count;
}

function reset(){
    count=0;
    document.getElementById("change").textContent=count;
}