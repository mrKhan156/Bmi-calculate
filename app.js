const weightInput = document.querySelector('#weight-input');
const heightInput = document.querySelector('#height-input');
const calculateBtn = document.querySelector('#btn-success');
const resetBtn = document.querySelector('#btn-reset');
const result = document.querySelector('#dynamic__bmi');
const massage = document.querySelector('#bmi_text');

function calculateBMI(){
 let height ,  weight , bmi;
 height = Number(heightInput.value);
 weight = Number(weightInput.value);
 bmi = weight / (height*height*0.0254*0.0254);
 result.textContent = bmi.toFixed(2);
 let msg = showMsg(bmi);
 massage.textContent = msg;
 
}
function showMsg(bmiValue){
    if(bmiValue<16){
        return"You are sever Thin";
    } else if(bmiValue>=16 && bmiValue<=17){
        return"You are Moderate Thin";
    } else if(bmiValue>=17 && bmiValue<=18.5){
        return"You are mid Thin";
    } else if(bmiValue>=18.5 && bmiValue<=25){
        return"You are Normal";
    } else if(bmiValue>25){
        return"you are overweight";
    }
}

function reset(){
 heightInput.value ="";
 weightInput.value ="";
 result.textContent = "_________";
 massage.textContent ="";
}
function eventHandelar(){
    if(Number(heightInput.value)&&Number(weightInput.value)){
        calculateBMI();
    } else{
        alert("please Enter valid Input");
        reset();
    }
}

calculateBtn.addEventListener('click',eventHandelar);
resetBtn.addEventListener('click',reset);