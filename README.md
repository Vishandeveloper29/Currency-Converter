
# 💱 Currency Converter

A clean, responsive web app that converts between 35+ world currencies in real time using live exchange rates.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features

- 🔄 **Real-time conversion** — fetches live exchange rates via the [ExchangeRate API](https://www.exchangerate-api.com/)
- 🌍 **35+ currencies** — USD, EUR, INR, JPY, GBP, CNY, and many more
- 🚩 **Country flags** — dynamically updates flags using the [Flags API](https://flagsapi.com/)
- ⇄ **Swap button** — instantly swap the From/To currencies and reconvert
- 📱 **Responsive design** — works on desktop and mobile

---

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required — just a modern web browser.

### Installation

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
```

Then open `index.html` in your browser, or use a local development server:

```bash
# Using VS Code Live Server, or:
npx serve .
```

---

## 🗂️ Project Structure

```
currency-converter/
├── index.html      # App markup
├── style.css       # Styles
└── script.js       # Currency logic & API calls
```

---

## 🔧 How It Works

1. The user enters an amount and selects source and target currencies from dropdowns.
2. On clicking **CONVERT** (or on page load / swap), the app fetches the latest rates from:
   ```
   https://api.exchangerate-api.com/v4/latest/{FROM_CURRENCY}
   ```
3. The converted amount is calculated and displayed below the button.
4. Country flags update automatically whenever a currency is changed.

---

## 🌐 Supported Currencies

| Code | Country | Code | Country |
|------|---------|------|---------|
| USD  | United States | EUR | European Union |
| INR  | India | GBP | United Kingdom |
| JPY  | Japan | CNY | China |
| AUD  | Australia | CAD | Canada |
| BRL  | Brazil | MXN | Mexico |
| ... | *(and 25+ more)* | | |

---

## 📡 APIs Used

| API | Purpose |
|-----|---------|
| [ExchangeRate API](https://www.exchangerate-api.com/) | Live exchange rate data |
| [Flags API](https://flagsapi.com/) | Country flag images |

---

## 🙌 Acknowledgements

- Exchange rates provided by [ExchangeRate-API](https://www.exchangerate-api.com/)
- Flag icons by [FlagsAPI](https://flagsapi.com/)
