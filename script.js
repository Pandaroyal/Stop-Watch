const hour = document.querySelector('.hours');
const min = document.querySelector('.minutes');
const sec =  document.querySelector('.seconds');
const msec =  document.querySelector('.mili-seconds');

const control = document.getElementById("start");
let h=0,m=0,s=0,ms=0;
console.log("hello");
control.addEventListener("click",()=>{
    if(control.textContent==='START'){
        control.innerHTML="STOP";
        start();
    }else{
        control.innerHTML="START";
        clearInterval(action);
    }
});

document.getElementById('reset').addEventListener("click",()=>{
    hour.innerHTML = "0";
    min.innerHTML = "0";
    sec.innerHTML = "0";
    msec.innerHTML = "0";
    h=m=s=ms=0;
    clearInterval(action);
    control.innerHTML="START";
})
function start(){
   action =  setInterval(()=>{
        msec.innerHTML= ""+ms;
        if(ms>99){
            ms=0;
            s++;
            msec.innerHTML= ""+ms;
            sec.textContent=""+s;
        }else{
            ms++;
        }
        if(s>59){
            s=0;
            m++;
            sec.innerHTML= ""+s;
            min.textContent=""+m;
        }
        if(m>59){
            m=0;
            h++;
            min.textContent=""+m;
            hour.innerHTML=""+h;
        }
        if(h>22){
            clearInterval(action);
        }
    },10)
}

