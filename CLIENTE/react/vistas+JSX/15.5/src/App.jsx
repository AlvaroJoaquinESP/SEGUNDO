import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
  ];
  return (
    <div className="card">
      {/*Recorre la lista de usuarior*/}

      {users.map((elemento, indice) => {
        return (
          <div
            className="card"
            style={{ width: "15rem", margin: "1rem" }}
            key={indice}
          >
            <img
              src={elemento.avatar}
              className="card-img-top"
              alt="User avatar"
            />
            <div className="card-body">
              <h5 className="card-title">
                {elemento.first_name} -{elemento.last_name}
              </h5>
              <p className="card-text">{elemento.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
