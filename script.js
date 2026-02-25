const api_url = "https://api.exchangerate-api.com/v4/latest/";

const selects = document.querySelectorAll(".currency-row select");
const btn = document.querySelector("#convertbtn");
const swapbtn = document.querySelector("#swap");
const fromselect = document.querySelector(".from select");
const toselect = document.querySelector(".to select");
const msg = document.querySelector("#ratemsg");
const amountInput = document.querySelector("#amount");

const countrylist = {
  USD: "US",
  INR: "IN",
  EUR: "EU",
  AUD: "AU",
  AFN: "AF",
  ALL: "AL",
  AMD: "AM",
  ARS: "AR",
  BDT: "BD",
  BGN: "BG",
  BRL: "BR",
  CAD: "CA",
  CNY: "CN",
  DKK: "DK",
  EGP: "EG",
  GBP: "GB",
  HKD: "HK",
  IDR: "ID",
  JPY: "JP",
  KRW: "KR",
  MXN: "MX",
  MYR: "MY",
  NOK: "NO",
  NZD: "NZ",
  PKR: "PK",
  PLN: "PL",
  RUB: "RU",
  SAR: "SA",
  SEK: "SE",
  SGD: "SG",
  THB: "TH",
  TRY: "TR",
  UAH: "UA",
  VND: "VN",
};

for (let select of selects) {
  for (let code in countrylist) {
    let option = document.createElement("option");
    option.innerText = code;
    option.value = code;

    if (select.name === "from" && code === "USD") {
      option.selected = true;
    }
    if (select.name === "to" && code === "INR") {
      option.selected = true;
    }

    select.append(option);
  }

  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

function updateflag(element) {
  let countrycode = countrylist[element.value];
  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countrycode}/flat/64.png`;
}
async function convertCurrency() {
  let value = Number(amountInput.value);

  if (value <= 0 || isNaN(value)) {
    value = 1;
    amountInput.value = "1";
  }

  msg.innerText = "Converting...";

  try {
    const url = `${api_url}${fromselect.value}`;

    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network error");
    }

    let data = await response.json();

    let rate = data.rates[toselect.value];

    let finalamount = value * rate;

    msg.innerText = `${value} ${fromselect.value} = ${finalamount.toFixed(2)} ${toselect.value}`;
  } catch (error) {
    msg.innerText = "Error fetching data";
    console.log(error);
  }
}
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  convertCurrency();
});

swapbtn.addEventListener("click", () => {
  let temp = fromselect.value;
  fromselect.value = toselect.value;
  toselect.value = temp;

  updateflag(fromselect);
  updateflag(toselect);
  convertCurrency();
});

window.addEventListener("load", () => {
  convertCurrency();
});
