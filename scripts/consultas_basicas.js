1.	Inserción de documentos
//Insertar varios productos:
db.productos.insertMany([
  {
    _id: ObjectId(),
    nombre: "Mouse Gamer Logitech",
    categoria_id: ObjectId(""),
    precio: 160000,
    stock: 15,
    descripcion: "Mouse RGB 8000 DPI",
    fecha_creacion: "19/11/2025",
    estado: "activo"
  },
  {
    _id: ObjectId(),
    nombre: "Teclado Mecánico HyperX",
    categoria_id: ObjectId(""),
    precio: 360000,
    stock: 8,
    descripcion: "Mecánico switches Cherry Red",
    fecha_creacion:"19/11/2025",
    estado: "activo"
  }
])



2.	Selección de documentos
//Consultar todos los clientes: 
db.clientes.find()
//Consultar solo algunos campos: 
db.clientes.find({}, { nombre: 1, email: 1 })
//Consultar productos activos: 
db.productos.find({ estado: "activo" })


3.	Actualización de documentos 
//cambiar el nivel de un cliente: 
db.clientes.updateOne(
  { email: "wtrehearn1@ftc.gov },
  { $set: { nivel_cliente: "gold" } }
)
//Descontar stock de un producto
db.productos.updateOne(
  { nombre: "Mouse Gamer Logitech" },
  { $inc: { stock: -1 } }
)



4.	Eliminación de documentos 
//Borrar un cliente: 
db.clientes.deleteOne({ email: "pkensitt5@ucla.edu" })
//Borrar productos sin stock: 
db.productos.deleteMany({ stock: { $lte: 0 } })

