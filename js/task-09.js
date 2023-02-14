function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elBody = document.querySelector("body");
const btnChangeColor = document.querySelector("button.change-color");
const elSpanColor = document.querySelector("span.color");

const handleChangeColor = () => {
  const randomColor = getRandomHexColor();
  elBody.style.backgroundColor = randomColor;
  elSpanColor.textContent = randomColor;
};

btnChangeColor.addEventListener("click", handleChangeColor);
