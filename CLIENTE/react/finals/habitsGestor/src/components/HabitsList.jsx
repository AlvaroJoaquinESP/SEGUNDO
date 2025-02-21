import { PropTypes } from "prop-types"
export const HabitsList = ({ state, dispatch }) => {
  
    return (
    <div className="container">
      {state.datos.map((elemento) => {
        return (
          <div className=" col-4 border" key={elemento.dia}>
            <h1>{elemento.dia}</h1>
            <h2>{elemento.habito}</h2>
            <h2>{elemento.nivel_cumplimiento}</h2>
            <button onClick={() => dispatch({type:"delete", payload: elemento.dia})}>Delete </button>
           
          </div>
        );
        
        
      })}
    </div>
  );
};

HabitsList.propTypes = {
    state :PropTypes.array,
    dispatch :PropTypes.func
}

