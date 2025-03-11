use("pizzeria")

// db.pizzas.insertMany([
//     {
//         "nombre": "Pizza Margarita",
//         "ingredientes": ["mozzarella", "tomate", "albahaca"],
//         "precio": 12.5,
//         "calorias": 700,
//         "puntuacion": 4.8,
//         "ventas": 300,
//         "tipo_masa": "fina",
//         "tiempo_preparacion": 15,
//         "tamaño": "mediana",
//         "chef": {
//             "nombre": "Juan",
//             "años_experiencia": 10
//         },
//         "fecha_creacion": 2001
//     },
//     {
//         "nombre": "Pizza Pepperoni",
//         "ingredientes": ["mozzarella", "tomate", "pepperoni"],
//         "precio": 18.0,
//         "calorias": 1000,
//         "puntuacion": 4.6,
//         "ventas": 300,
//         "tipo_masa": "normal",
//         "tiempo_preparacion": 20,
//         "tamaño": "grande",
//         "chef": {
//             "nombre": "Juan",
//             "años_experiencia": 12
//         },
//         "fecha_creacion": 2005
//     },
//     {
//         "nombre": "Pizza Vegetariana",
//         "ingredientes": ["mozzarella", "tomate", "pimiento", "champiñones", "cebolla", "espinaca"],
//         "precio": 15.0,
//         "calorias": 750,
//         "puntuacion": 4.7,
//         "ventas": 250,
//         "tipo_masa": "fina",
//         "tiempo_preparacion": 18,
//         "tamaño": "mediana",
//         "chef": {
//             "nombre": "Juan",
//             "años_experiencia": 15
//         },
//         "fecha_creacion": 2003
//     },
//     {
//         "nombre": "Pizza 4 Quesos",
//         "ingredientes": ["mozzarella", "cheddar", "parmesano", "roquefort", "tomate"],
//         "precio": 19.5,
//         "calorias": 1100,
//         "puntuacion": 4.9,
//         "ventas": 500,
//         "tipo_masa": "fina",
//         "tiempo_preparacion": 25,
//         "tamaño": "familiar",
//         "chef": {
//             "nombre": "Juan",
//             "años_experiencia": 20
//         },
//         "fecha_creacion": 2000
//     },
//     {
//         "nombre": "Pizza Hawaiana",
//         "ingredientes": ["mozzarella", "tomate", "piña", "jamón"],
//         "precio": 16.0,
//         "calorias": 950,
//         "puntuacion": 4.2,
//         "ventas": 150,
//         "tipo_masa": "normal",
//         "tiempo_preparacion": 20,
//         "tamaño": "grande",
//         "chef": {
//             "nombre": "Juan",
//             "años_experiencia": 18
//         },
//         "fecha_creacion": 2007
//     }
// ]);



// db.pizzas.find()

// 🍕*********EXAMEN ALVARO*********🍕

// 1

// db.pizzas.find({
//     ingredientes : {$size: {$gt: 10}}
// })


// 2

// db.pizzas.find(
//     {"precio": {$gt : 15}},
//     {
//         "_id":0,
//         "nombre":1,
//         "precio":1
//     }
// )


// 3

// db.pizzas.find({
//      $and: [ 
//         {ingredientes : {$eq : "mozzarella"}},
//         {puntuacion : {$gte: 4.5}},
//         {tiempo_preparacion : {$lt: 20}}
//     ]
    
// })


// 4

// db.pizzas.find({
//     $or: [
//         {tipo_masa : "fina"},
//         {ingredientes : {$eq : "pepperoni"}}
//     ]
 
// })


// 5

// db.pizzas.find({
//     $or: [
//         {ventas : {$gt : 500}},
//         {$and: [{calorias : {$gt: 800}},{tamaño: "familiar"}] }
//     ]
// })


// 6

// db.pizzas.updateMany(
//     {ventas : {$gt: 300}},
//     {$set : {clasica: true}}
// )

// db.pizzas.find()


// 7

// db.pizzas.aggregate([{
//     $group: {
//       _id: "$tipo_masa",
//         totalVentas : {$sum: "$ventas"}
//     }
// }])


// 8

// db.pizzas.aggregate([{
//     $group: {
//       _id: "$tamaño",
//       promedioCalorias : {$avg : "$calorias"}
      
//     }
// }])


// 9

// db.pizzas.aggregate([
//     {
//         $match: {
//             fecha_creacion : {$gt : 2000}
//         }   
//     },
//     {
//         $group: {
//             _id: "$tipo_masa",
//             numeroPizzas : {$sum : 1}
//         }
//     }
// ])


// 10 

// db.pizzas.aggregate([
//     // {
//     //     $unwind:"$ingredientes"
//     // },
//     {
//         $group: {
//           _id: "$ingredientes",
//           vecesTotales : {$sum : 1},
//           cantidadTotal: {$avg : "$ingredientes"}
//         }
//     },
//     {
//         $sort: {
//             cantidadTotal: -1
//         }
//     },

//     {
//          $limit : 3
//     }

// ])


// 11 

// db.pizzas.deleteMany({
//     tamaño : "familiar",
//     ingredientes : {$eq : "piña"}
// })
