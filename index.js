(function () {
  var hour = document.querySelector(".hour");
  var minute = document.querySelector(".minute");
  var second = document.querySelector(".sec");

  var startBtn = document.querySelector(".start");
  var pauseBtn = document.querySelector(".stop");
  var resetBtn = document.querySelector(".reset");

  var countdownTimer = null;
  console.log(countdownTimer);
  startBtn.addEventListener("click", function () {
    // console.log(typeof hour.value);
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      return;
    }

    function startInteravl() {
      startBtn.style.display = "none";
      pauseBtn.style.display = "initial";

      countdowntimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startInteravl();
  });

  function stopInterval(state) {
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
    startBtn.style.display = "initial";
    pauseBtn.style.display = "none";
    console.log(countdownTimer);
    clearInterval(countdowntimer);
  }
  function timer() {
    if (second.value > 60) {
      minute.value = Math.floor(second.value / 60);
      second.value = second.value % 60;
    }
    if (minute.value > 60) {
      hour.value = Math.floor(minute.value / 60);
      minute.value = minute.value % 60;
    }
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      hour.value = "";
      minute.value = "";
      second.value = "";
      stopInterval();
      //   startBtn.style.display = "initial";
      //   pauseBtn.style.display = "none";
    } else {
      if (second.value != 0) {
        second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
      } else if (minute.value != 0 && second.value == 0) {
        second.value = 59;
        minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
      } else if (hour.value != 0 && second.value == 0 && minute.value == 0) {
        minute.value = 60;
        hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
      }
    }
  }

  pauseBtn.addEventListener("click", function () {
    stopInterval("pasue");
  });
})();
