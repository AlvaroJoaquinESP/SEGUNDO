document.querySelector("#formulary").addEventListener("submit", (ev) => {
  let con1 = document.querySelector("#password").value;
  let con2 = document.querySelector("#confirmed").value;

  if (con1 != con2 || !esSegura(con1)) {
    ev.preventDefault();
    alert("adios");
  }
});

const esSegura = (con1) => {
  const mayusculas = /[A-Z]/.test(con1);
  const minusculas = /[a-z]/.test(con1);
  const numeros = /[0-9]/.test(con1);

  return mayusculas && minusculas && numeros;
};
