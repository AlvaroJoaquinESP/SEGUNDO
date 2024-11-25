const p1 = new Personaje("Junior", 150, 50, 20)
const p2 = new Personaje("Cristian", 200, 100, 50)

const arena = new Batalla(p1, p2)



arena.iniciar()

arena.mostrarResultado()