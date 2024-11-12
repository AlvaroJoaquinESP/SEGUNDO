
const prod1=new ProductoSubasta("placa",100);
const prod2=new ProductoSubasta("proce",200);
const prod3=new ProductoSubasta("ram",20);

const subasta=new Subasta();
subasta.agregarProducto(prod1);
subasta.agregarProducto(prod2);
subasta.agregarProducto(prod3);

subasta.agregarPujador("Juan");
subasta.agregarPujador("Jose");
subasta.agregarPujador("Pep");

subasta.realizarPuja("placa","Juan",110);
subasta.realizarPuja("placa","Pep",120);
subasta.realizarPuja("placa","Juan",150);

subasta.realizarPuja("proce","Pep",250);

subasta.realizarPuja("ram","Jose",10);

subasta.mostrarProductos();