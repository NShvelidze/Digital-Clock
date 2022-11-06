function digitalClock(){

var realTime =  new Date();

 var H = realTime.getHours();
 var M = realTime.getMinutes();
 var S = realTime.getSeconds();

 var am = H >= 12 ? "PM" : "AM";

 H = (H < 10) ? "0" + H : H;
 M = (M < 10) ? "0" + M : M;
 S = (S < 10) ? "0" + S : S;
 

 hours.innerHTML = H;
 minutes.innerHTML = M;
 seconds.innerHTML = S;
 ampm.innerHTML = am
}

digitalClock();

setInterval(digitalClock, 1000);