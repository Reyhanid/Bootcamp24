let result=document.getElementById('input');
let theOutput='';
function display(value){
    theOutput+=value;
    result.value=theOutput;
}
function calcute(){
    try{
        result.value=eval(theOutput);
    }catch{
        result.value='wrong';
        theOutput='';
    }
}
function clearscreen(){
    result.value='';
    theOutput='';
}