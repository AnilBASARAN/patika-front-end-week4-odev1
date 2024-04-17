let myName = prompt("İsmini bağışla yüce kişi");
document.querySelector("#myName").innerHTML = myName;

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    

  
    function tellDay(){
        var days = now.getDay();
        if(days == 0) return "Pazartesi";
        if(days == 1) return "Salı";
        if(days == 3) return "Çarşamba";
        if(days == 4) return "Perşembe";
        if(days == 5) return "Cuma";
        if(days == 6) return "Cumartesi";
        if(days == 7) return "Pazar";
        
    }

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be displayed as 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + tellDay();
    
    document.getElementById("myClock").textContent = timeString;
  }
  
  // Call updateClock function every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();