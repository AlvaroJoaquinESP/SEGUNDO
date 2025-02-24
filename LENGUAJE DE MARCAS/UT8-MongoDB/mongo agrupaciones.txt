// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
// use("ventas");

// Find a document in a collection.
// db.getCollection("ventas").findOne({

// });


//   db.ventas.aggregate([
//     {
//       $group: {
//         _id: "$categoria",
//         totalVentas: { $sum: { $multiply: ["$precio", "$cantidad"] } }
//       }
//     },
//     {
//       $match: {
//         totalVentas: { $gt: 50 }
//       }
//     }
//   ]);

// db.ventas.aggregate([
//     {
//         $match: {
//         cantidad : {$gt: 5 }
//         }
//     },
//     {
//         $project: {
//           _id:0,  para que no salga el id
//           item:1, 
//           categoria:1,
//           precioTotal:{ $multiply: ["$precio" , "$cantidad"]}
//         }
//     }
// ])

// db.ventas.aggregate([
//     {
//         $group: {
//           _id: "$categoria",
//           ventas: {
//             $gt: 50
//           }
//         }
//     }
// ])