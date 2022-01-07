let myFirstName = prompt("Lütfen adınızı giriniz...","") ;
let myName = document.querySelector("#myName")
myName.innerHTML = `${myFirstName}`

function showTime(){
   var date = new Date();
   var h = date.getHours(); 
   var m = date.getMinutes(); 
   var s = date.getSeconds(); 
   var session = date.getDay();
   var dayString;
   (session === 1)? dayString="Pazartesi":
   (session === 3)? dayString="Salı":
   (session === 4)? dayString="Çarşamba":
   (session === 5)? dayString="Perşembe":
   (session === 2)? dayString="Cuma":
   (session === 6)? dayString="Cumartesi": "Pazar"
   
   if(h == 0){
       h = 12;
   }
   
   if(h > 12){
       h = h - 12;
       session = "PM";
   }
   
   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;
   
   var time = `${h}:${m}:${s} ${dayString}`;
   document.getElementById("myClock").innerHTML = time;
  /* document.getElementById("myClock").textContent = time; */
   
   setTimeout(showTime, 1000);
   
}
showTime();