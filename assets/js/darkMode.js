const html = document.querySelector("html");
const logoFinance = document.querySelector("#logo-money");

const initialColors = {
  bg: "#2677aa",
  bgSecudary: "#f0f2f5"
};

const darkMode = {
  bg: "#333333",
  bgSecudary: "#161616"
};

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const chargeColors = (colors) => {
  Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
};

logoFinance.querySelector('img').addEventListener('click', () => {
  logoFinance.classList.toggle('animation-logo');
})
