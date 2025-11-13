// Inserción de documentos
db.usuarios.insertOne({
  nombre: "Carlos Ruiz",
  correo: "carlos@gmail.com",
  direccion: "Cra 10 #45-23",
  telefono: "3119876543",
  fecha_registro: "2024-05-01"
})

// Seleccion de un documento
db.productos.find({ categoria: "Electrónica" })
//Muestra todos los productos pertenecientes a la categoría "Electrónica"

// Actualizar stock de un producto
db.productos.updateOne(
  { nombre: "G Pro" },
  { $set: { stock: 30 } }
)

// Eliminar un usuario inactivo
db.usuarios.deleteOne({ activo: false })
