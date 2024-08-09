const btnEl=document.getElementById("btn");
const pfval=document.getElementById("result");
const res=document.getElementById("Condition");
function profilethevalues(){
    const ht=document.getElementById("height").value/100;

    const wt=document.getElementById("weight").value;
    const val=(wt)/(ht*ht);
    pfval.value=val;
    if(val<18.5)
    {
        res.innerText="UnderWeight";
    }
    else if(val>=18.5&&val<=24.9){
        res.innerText="normalWeight";
    }
    else if(val>=25&&val<=29.9)

    {
        res.innerText="OverWeight"
    }
    else if(val>=30){
        res.innerText="obese";
    }
}   





btnEl.addEventListener("click",profilethevalues)