//Total de pedidos por usuario
db.pedidos.aggregate([
  { $group: { _id: "$usuario_id", total_pedidos: { $sum: 1 } } },
  { $sort: { total_pedidos: -1 } }
])
//Calcula cuántos pedidos ha realizado cada usuario.

//Análisis:
//Permite identificar a los clientes más activos. Esto es útil para estrategias de fidelización o programas de puntos.

// Promedio de precios de productos por categoría
db.pedidos.aggregate([
  { $group: { _id: null, promedio_total: { $avg: "$total" } } }
])

//Análisis:
//Sirve para determinar el ticket promedio del cliente y diseñar estrategias de marketing 
//enfocadas en aumentar ese valor (por ejemplo, ofreciendo combos o descuentos por monto mínimo).

//Total de pedidos por usuario
db.pedidos.aggregate([
  {
    $lookup: {
      from: "productos",
      localField: "producto_id",
      foreignField: "id",
      as: "producto"
    }
  },
  { $unwind: "$producto" },
  {
    $group: {
      _id: "$producto.categoria",
      ingresos_totales: { $sum: "$total" }
    }
  },
  { $sort: { ingresos_totales: -1 } }
])
