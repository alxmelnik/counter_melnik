let counter = document.querySelector(".counter__value");
let buttons = document.querySelectorAll(".btn");
let adviceMessage = document.querySelector(".advice__message");

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target);

    // console.log(e.target.classList);

    if (e.target.classList.contains("btn--increase")) {
      count++;
    } else if (e.target.classList.contains("btn--reduce")) {
      count--;
    } else {
      count = 0;
    }

    // console.log (count);

    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "#000000";
      adviceMessage.textContent = "Начинай...";
    }

    if (Math.abs(count) > 0) {
      adviceMessage.textContent = "Давай...";
    }

    if (Math.abs(count) >= 5) {
      adviceMessage.textContent = "И долго ты так будешь?";
    }

    if (Math.abs(count) >= 10) {
      adviceMessage.textContent = "Тебя совсем никто не ждет?";
    }

    if (Math.abs(count) >= 15) {
      adviceMessage.textContent = "Ты приёмный";
    }

    counter.textContent = count;
  });
});

