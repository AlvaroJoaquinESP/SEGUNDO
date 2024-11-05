document.querySelector("#formulary").addEventListener("submit", (ev) => {
  let pass1 = document.querySelector("#contrasenia1").value;
  let pass2 = document.querySelector("#contrasenia2").value;

  if (pass1 != pass2 || !esSegura(pass1)) {
    ev.preventDefault();
    alert("Adios Juan");
  } 
});

const esSegura = () => {
  const pass = document.querySelector("#contrasenia1").value;
  const may = /[A-Z]/.test(pass);
  const min = /[a-z]/.test(pass);
  const num = /[0-9]/.test(pass);

  return may && min && num;
};
