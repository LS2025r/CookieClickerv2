let cookies = 0;
let getCookies = 1;
let cursorCount = 0;
let cursorCost = 15;
let cookiesPerSec = 0;
let doubleCost = 20;

const cookieButton = document.querySelector("#cookie-button");
const cookieCount = document.querySelector("#cookie-count");
const cookiesPerSecond = document.querySelector("#cookies-per-second");
const upgradeButton = document.querySelector("#buy-cursor");
const upgradeNumber = document.querySelector("#grandma-count");
const doubleButton = document.querySelector("#buy-double-cookie");
const doubleNumber = document.querySelector("#double-cookie-count");

cookieButton.addEventListener("click", () => {
  cookies += getCookies;
  cookieCount.textContent = cookies;
});

upgradeButton.addEventListener("click", () => {
  if (cookies >= cursorCost) {
    cookies -= cursorCost;
    cursorCount += 1;
    upgradeNumber.textContent = cursorCount;
    cookieCount.textContent = cookies;
    cookiesPerSec = cursorCount;
    cookiesPerSecond.textContent = `per sec: ${cookiesPerSec}`;
    cursorCost = Math.floor(cursorCost * 1.15);
    upgradeButton.querySelector(".cost").textContent = `${cursorCost} cookies`;
  } else {
    alert("Not Enough Cookies");
  }
});

doubleButton.addEventListener("click", () => {
  if (cookies >= doubleCost) {
    cookies -= doubleCost;
    getCookies *= 2;
    doubleNumber.textContent = Number(doubleNumber.textContent) + 1;
    cookieCount.textContent = cookies;
    doubleCost = Math.floor(doubleCost * 2.5);
    doubleButton.querySelector(".cost-db").textContent =
      `${doubleCost} cookies`;
  } else {
    alert("Not Enough Cookies");
  }
});

setInterval(() => {
  cookies += cookiesPerSec;
  console.log(cookies);
  if (cookies < Infinity) {
    cookieCount.textContent = cookies;
  } else {
    cookies = 0;
  }
}, 1000);

cookiesPerSecond.textContent = `per sec: ${cookiesPerSec}`;
