import "./style.css";

const app = (document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`);

const link = document.querySelector('[data-js="link"]');

link.addEventListener("click", () => {
  const element = document.getElementById("app");
  element.classList.toggle("appHidden");
});
