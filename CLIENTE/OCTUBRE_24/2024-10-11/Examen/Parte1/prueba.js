const c1 = new Contacto();
const c2 = new Contacto();
const c3 = new Contacto();

c1.crearContacto("Álvaro", "666 777 888");
c2.crearContacto("Juan", "666 999 888");
c3.crearContacto("Cipri", "777 111 888");


const ag = new Agenda();

// Insertar c1 y c2.
ag.aniadirContacto(c1);
ag.aniadirContacto(c2);

// Listar los contactos de la agenda.
ag.listarContactos();

// Buscar c1.
ag.buscaContacto("Álvaro");

// Buscar c3.
ag.buscaContacto("Cipri");



















