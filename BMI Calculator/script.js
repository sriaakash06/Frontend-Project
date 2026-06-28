function bmiResult(){
    let res1=parseFloat(document.getElementById("height").value);
    let res2=parseFloat(document.getElementById("weight").value);
    let val=res2/((res1/100)*(res1/100)) ;
    document.getElementById("bmi").textContent=val.toFixed(2);
 
    let result="";
    if(val<18.5){
        result="Underweight";
        
    }
    else if(val>=18.5 && val<25){
        result="Normal Weight";
    }
    else{
        result="Overweight";
    }
    document.getElementById("status").textContent=result;
}