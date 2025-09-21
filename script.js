const container = document.querySelector(".container");
const currentValue = document.querySelector(".current-color-value");
const colorInput = document.querySelector("#color-input");
const colorPicker = document.querySelector("#color-picker");
const randomBtn = document.querySelector(".random-btn");
const applyBtn = document.querySelector(".apply-btn");
const copyBtn = document.querySelector(".copy-btn");

const generateRandomHex = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

let changeColor = (color) => {
  container.style.backgroundColor = color;
  currentValue.innerHTML = color;
  localStorage.setItem("bgColor", color);
};

const handleRandomBtn = () => {
  let color = generateRandomHex();
  changeColor(color);
};

const handleApplybtn = () => {
  const color = colorInput.value;
  container.style.backgroundColor = color;
  if (container.style.backgroundColor === "") {
    colorInput.style.border = "2px solid red";
    return;
  } else {
    colorInput.style.border = "2px solid lightseagreen";
    changeColor(color);
  }
};

const copyColor = () => {
  navigator.clipboard.writeText(currentValue.innerText);
  copyBtn.innerText = "Copied!";
  setTimeout(() => (copyBtn.innerText = "Copy Color"), 1000);
};

colorPicker.addEventListener("input", () => {
  const color = colorPicker.value;
  changeColor(color);
});
randomBtn.addEventListener("click", handleRandomBtn);
applyBtn.addEventListener("click", handleApplybtn);
copyBtn.addEventListener("click", copyColor);

window.addEventListener("load", () => {
  let savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    changeColor(savedColor);
  }
});
