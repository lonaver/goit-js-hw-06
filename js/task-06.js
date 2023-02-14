const elValidationInput = document.querySelector("input#validation-input");

const handleInputBlur = (even) => {
  const lengthSymbols = even.currentTarget.value.length;
  const defaultLength = Number(even.currentTarget.dataset.length);
  if (lengthSymbols === defaultLength) {
    elValidationInput.classList.add("valid");
    elValidationInput.classList.remove("invalid");
  } else {
    elValidationInput.classList.add("invalid");
    elValidationInput.classList.remove("valid");
  }
};

elValidationInput.addEventListener("blur", handleInputBlur);
