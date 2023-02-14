const elSpan = document.querySelector("span#text");
const elRange = document.querySelector("input#font-size-control");

elRange.addEventListener("input", (even) => {
  elSpan.style.fontSize = even.currentTarget.value + "px";
});
