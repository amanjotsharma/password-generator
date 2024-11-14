const countValue=document.querySelector('#counter');
const increment=()=>{
//get the value from ui
let value=parseInt(countValue.innerText);
value=value+1;
//set value
countValue.innerText=value;
};
const decrement=()=>{
    //get the value from ui
    let value=parseInt(countValue.innerText);
    value=value-1;
    //set value
    countValue.innerText=value;
    };