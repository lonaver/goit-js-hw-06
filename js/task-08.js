const form = document.querySelector(".login-form");
const handleSubmit = (even) => {
  even.preventDefault();
  const email = even.currentTarget.elements.email.value;
  const password = even.currentTarget.elements.password.value;
  const elForms = { email, password };

  if (elForms.email === "" || elForms.password === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(elForms);
  even.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
