import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"
export const HabitsList = ({ state, dispatch }) => {
  
    return (
    <div className="container m-2">

      <h1 className="text-center bg-success-subtle rounded-3">HABITS LIST</h1>
      <div className="row gap-4">
      {state.datos.map((elemento) => {
        return (
          <div className=" col-4 border p-2" key={elemento.dia}>
            <h1>{elemento.dia}</h1>
            <h2>{elemento.habito}</h2>
            <h2>{elemento.nivel_cumplimiento}</h2>
            <button onClick={() => dispatch({type:"delete", payload: elemento.dia})}>Delete </button>
           
          </div>
        );
        
      })}
      </div>
      <Link to="/add" className="btn btn-danger rounded-3 m-2">Add Habit</Link>
    </div>
  );
};

HabitsList.propTypes = {
    state :PropTypes.array,
    dispatch :PropTypes.func
}

