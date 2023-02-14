const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector("#value");
let counterValue = Number(spanValue.textContent);

const handleDecrementValue = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};
const handleIncrementValue = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};

btnDecrement.addEventListener("click", handleDecrementValue);
btnIncrement.addEventListener("click", handleIncrementValue);
