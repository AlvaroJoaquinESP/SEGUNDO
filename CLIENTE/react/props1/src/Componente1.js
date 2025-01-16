import React from "react";

function Componente1(props) {
  console.log(props);
  return (
    <div>
      <p>{props.nombre} - {props.edad}</p>
    </div>
  );
}

export default Componente1;
