const button = document.querySelector(".sub");
button.addEventListener("submit", fn);
function fn(event) {
  const login = document.querySelector("log").value;
  const pass = document.querySelector("pass").value;
  const div = document.querySelector("div");

  if (!true) {
    event.preventDefaut();
    div.innerText = "Vedi pravilnoyyy";
  }
}
