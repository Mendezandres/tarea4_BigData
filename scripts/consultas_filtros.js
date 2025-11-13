// Usuarios registrados después de cierta fecha
db.usuarios.find({ fecha_registro: { $gt: "2024-01-01" } })

//Productos con precio entre 100,000 y 500,000
db.productos.find({ precio: { $gte: 100000, $lte: 500000 } })

//Pedidos con cantidad mayor a 3
db.pedidos.find({ cantidad: { $gt: 3 } })
// Identifica los pedidos grandes o con múltiples unidades.
