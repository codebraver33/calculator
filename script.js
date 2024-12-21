let Input=document.getElementById('input');
let Output=document.getElementById('output');

function appendToDisplay(value){
    Input.innerHTML+=value;
}
function Clear(){
    Input.innerHTML='';
    Output.innerHTML='0';
}
function Calculate(){
    let out=eval(Input.innerHTML)
    Output.innerHTML=out;
}
function Del(){
    Input.innerHTML=Input.innerHTML.substring(0,Input.innerHTML.length -1)
}