

  let setNumber=document.getElementById('setNumber');
  let start=document.getElementById('start');
  let stop=document.getElementById('stop');
  let reset=document.getElementById('reset');
  var passtime=0;
  var IntervalID= null;
  
  function stopWatch(){
  var miSec= passtime % 1000;
  var sec = Math.floor((passtime /1000) % 60);
  var min = Math.floor(passtime /(1000*60)%60) ;
  var hour = Math.floor(passtime /(1000*60*60));
  
  var mS = miSec.toString().slice(0,1);
  
  setNumber.innerHTML = `${hour} : ${min} : ${sec} : ${mS}`;
  }
  
  
  start.addEventListener('click',function(){
  start.disabled=true;
  start.style.opacity=0.5;
  stop.disabled=false;
  stop.style.opacity=1.0;
  var pre=Date.now();
  IntervalID = setInterval(function(){
  var nowtime=Date.now();
  passtime += nowtime - pre;
  pre = nowtime;
  stopWatch();
  },100);
  });
  
  
  stop.addEventListener('click',function(){
    clearInterval(IntervalID);
    start.disabled = false;
    start.style.opacity=1.0;
    stop.disabled= true;
});

  reset.addEventListener('click',function(){
    passtime=0;
    start.disabled = false;
    start.style.opacity=1.0;
    stop.disabled= true;
    stopWatch();
    
  });
  
  
    
 
  