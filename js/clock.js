const clock = document.querySelector("h2#clock");
function getClock() {
  const date = new Date();
  const f = function (val) {
    return String(val).padStart(2, "0");
  };
  clock.innerText = `${f(date.getHours())}:${f(date.getMinutes())}:${f(
    date.getSeconds()
  )}`;
}
setInterval(getClock, 1000);
