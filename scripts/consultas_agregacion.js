//a) total clientes registrados
db.clientes.aggregate([
  { $count: "total_clientes" }
])


//db.productos.aggregate([
  {
    $group: {
      _id: null,
      precio_promedio: { $avg: "$precio" }
    }
  }
])



//c) Total vendido por pedido
db.items_pedido.aggregate([
  {
    $group: {
      _id: "$pedido_id",
      total_pedido: {
        $sum: { $multiply: ["$cantidad", "$precio_unitario"] }
      }
    }
  }
])



//d). top 5 clientes que mas compraron:
db.pedidos.aggregate([
  {
    $group: {
      _id: "$cliente_id",
      gasto_total: { $sum: "$total" }
    }
  },
  { $sort: { gasto_total: -1 } },
  { $limit: 5 }
])



//f) Ingresos totales por categoría de producto
db.items_pedido.aggregate([
  {
    $lookup: {
      from: "productos",
      localField: "producto_id",
      foreignField: "categoria_id",
      as: "producto"
    }
  },
  { $unwind: "$producto" },
  {
    $lookup: {
      from: "categorias",
      localField: "producto.categoria_id",
      foreignField: "_id",
      as: "categoria"
    }
  },
  { $unwind: "$categoria" },
  {
    $group: {
      _id: "$categoria.nombre",
      ingresos_totales: {
        $sum: { $multiply: ["$cantidad", "$precio_unitario"] }
      }
    }
  },
  { $sort: { ingresos_totales: -1 } }
])


//g) calificación promedio de productos
db.reseñas.aggregate([
  {
    $group: {
      _id: "$producto_id",
      promedio_calificacion: { $avg: "$puntuacion" }
    }
  }
])
/*Análisis
Las calificaciones en promedio permiten:
•	Detectar productos con problemas de calidad.
•	Encontrar productos con excelente reputación.
•	Tomar decisiones como:
      o	retirar productos con muchas reseñas negativas,
      o	reforzar inventario en los mejor valorados,
      o	mejorar descripciones para evitar devoluciones.
Un producto con calificación baja y ventas altas puede indicar un riesgo:
•	venta impulsada por marketing
•	baja satisfacción del cliente*/



