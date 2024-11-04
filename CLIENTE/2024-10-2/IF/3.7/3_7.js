let aleatorio = Math.round(Math.random() * 2) + 1;

const randomm = (aleatorio) => {
  switch (aleatorio) {
    case 1:
      document.write("You are going to jail");
      break;
    case 2:
      document.write("You arent going to go to jail");
      break;
    default:
      document.write("Someone is looking for you Juan");
  }
};



randomm(aleatorio);