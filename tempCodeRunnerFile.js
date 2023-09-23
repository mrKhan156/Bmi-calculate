let minutes = document.querySelector('#minutes');
// let seconds = document.querySelector('#seconds');
// let startBtn = document.querySelector('#start');
// let resetBtn = document.querySelector('#reset');
// let pauseBtn = document.querySelector('#pause');

// let min;
// let sec=0;
// let timer = null;
// let watchIsRunning = false ;

// function start(){

//    if(!watchIsRunning){
//     watchIsRunning = true ;
//     timer =  setInterval(()=>{
//         sec++;
//         let {min, second} = getTime(sec);
//         minutes.textContent = min<10? ('0'+ min):min;
//         seconds.textContent = second<10?('0'+second):second;

      
//     },1000)
//    }
 
// }
// function pause(){
//     watchIsRunning = false;
//  clearInterval(timer);
// }

// function reset(){
//     watchIsRunning= false;
// clearInterval(timer);
// min=0;
// sec=0;
// minutes.textContent="00";
// seconds.textContent="00";

// }
// function getTime(sec){
//     min = parseInt(sec/60);
//     let second =parseInt(sec%60);
//     return{
//         min,
//         second
//     }
// }

// startBtn.addEventListener('click',start);
// resetBtn.addEventListener('click',reset);
// pauseBtn.addEventListener('click',pause);