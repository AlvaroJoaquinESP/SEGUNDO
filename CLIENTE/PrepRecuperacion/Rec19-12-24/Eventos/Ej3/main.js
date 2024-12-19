
document.querySelector("#formulary").addEventListener("submit", (ev) => {
    let password = document.querySelector("#password").value;
  if (!esSegura(password)) {
    alert("Contraseña inválida")
    ev.preventDefault();
  }

});
const esSegura = (password) => {
  const may = /[A-Z]/.test(password);
  const min = /[a-z]/.test(password);
  const num = /[0-9]/.test(password);
  const esp = /["$%=*]/.test(password);
  const spa = /[ ]/.test(password);

  return may && min && num && esp && !spa;
};
