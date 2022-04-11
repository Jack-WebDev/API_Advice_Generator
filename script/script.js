const dieContainer = document.querySelector(".dice__container");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      (document.querySelector(
        ".advice_number"
      ).innerHTML = `Advice #${data.slip.id}`);

      (document.querySelector(
        ".advice_body"
      ).innerHTML = `<q>${data.slip.advice}</q>`);
    });
}

dieContainer.addEventListener("click", () => {
  dieContainer.classList.toggle("active");

  getAdvice();
});
