function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreateDiv = document.querySelector("button[data-create]");
const btnDestroyDiv = document.querySelector("button[data-destroy]");
const elInputDiv = document.querySelector("#controls input");
const elDivBoxes = document.querySelector("div#boxes");

const START_SIZE = 30;
const STEP_CHANGE_SIZE = 10;

const createBoxes = (amount) => {
  const elements = [];
  let size = START_SIZE;
  for (let i = 0; i < amount; i++) {
    let newDiv = document.createElement("div");
    size = START_SIZE + STEP_CHANGE_SIZE * i;
    newDiv.style.width = size + "px";
    newDiv.style.height = size + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    elements.push(newDiv);
  }
  elDivBoxes.append(...elements);
};

const handleDivs = () => {
  createBoxes(Number(elInputDiv.value));
};

const destroyBoxes = () => {
  elDivBoxes.innerHTML = "";
  elInputDiv.value = 0;
};

btnCreateDiv.addEventListener("click", handleDivs);
btnDestroyDiv.addEventListener("click", destroyBoxes);
