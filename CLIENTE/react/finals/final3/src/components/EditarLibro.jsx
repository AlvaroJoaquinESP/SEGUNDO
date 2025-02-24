import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function EditarLibro() {
    const datos = useSelector((state) => state.datos.datos);
    const dispatch = useDispatch();
    const {id} = useParams()
    const libro = datos.find(p=>p.id == id)
    console.log(libro)
    return (
        <>
        </>
  )
}

export default EditarLibro