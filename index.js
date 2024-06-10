let countvalue=document.querySelector("#value-html")


const increment=() =>{
    // get the value from ui
    let value=parseInt(countvalue.innerText);  
    // update the value
    value=value +5;
    countvalue.innerText=value;
}


const decrement=()=>{
        // get the value from ui
        let value=parseInt(countvalue.innerText);  
        // update the value
        value=value -5;
        countvalue.innerText=value;

}