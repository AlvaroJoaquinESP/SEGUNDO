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
    
    <ul>
      {
        users.map((elemento, indice) => {
            return <li key={indice}>{elemento.id} - {elemento.email} - {elemento.first_name} - {elemento.last_name} - {elemento.avatar}</li>
        })


      }


    </ul>
  
);
}

export default App;
