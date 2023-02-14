const elInput = document.querySelector("input#name-input");
const elSpanOutput = document.querySelector("span#name-output");

const handleChangeSpan = (even) => {
  const nameUser = even.currentTarget.value;
  if (!nameUser) return (elSpanOutput.textContent = "Anonymous");
  elSpanOutput.textContent = nameUser;
};

elInput.addEventListener("input", handleChangeSpan);
