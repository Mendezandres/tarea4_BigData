//1. Igualdad : 
db.clientes.find({ estado: "activo" })

//2. mayor que: 
db.productos.find({ precio: { $gt: 300000 } })

//3. menor o igual que: 
db.productos.find({ stock: { $lte: 100 } })


//4. Operador $and, buscar productos caros y con poco stock:
db.productos.find({
  $and: [
    { precio: { $gt: 200000 } },
    { stock: { $lt: 90 } }
  ]
})



//5. Operador $or, buscar clientes gold o platinum
db.clientes.find({
  $or: [
    { nivel_cliente: "gold" },
    { nivel_cliente: "platinum" }
  ]
})



//6. Operador $in, buscar productos de varias categorías
db.productos.find({
  categoria_id: { $in: [
    ObjectId("691e20c9fc13ae337f541061"),
    ObjectId("691e20c9fc13ae337f541067")
  ]}
})



//7. búsqueda textual (se crea el índice)
db.productos.createIndex({ nombre: "text" })
db.productos.find({
  $text: { $search: "gamer" }
})


