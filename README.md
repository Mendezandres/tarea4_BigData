# Taller MongoDB – Tienda Online

Este repositorio contiene el desarrollo del taller de bases de datos NoSQL utilizando MongoDB.  
El caso de estudio corresponde a una **tienda en línea** con nueve colecciones principales:

- `clientes`
- `productos`
- `pedidos`
- `items_pedido`
- `carritos`
- `reseñas`
- `categorias`
- `direcciones`
- `transacciones`
---

## 📁 Estructura del repositorio

tarea4_BigData/

├── datos/ # Datos usados para cargar en MongoDB
├── scripts/ # consultas Mongo
├── documentacion/ # Informe formal del proyecto
└── README.md # Este archivo


---

## 🚀 Scripts incluidos

### ✔ Generador de datos (mackaroo)
`https://www.mockaroo.com/`


Cada script incluye las consultas solicitadas en el taller.

---

## 🗄 Importación de datos a MongoDB

Ejecutar:

```bash
mongoimport --db tienda_online --collection usuarios --file datos/clientes.json --jsonArray
mongoimport --db tienda_online --collection productos --file datos/productos.json --jsonArray
mongoimport --db tienda_online --collection pedidos --file datos/pedidos.json --jsonArray
mongoimport --db tienda_online --collection usuarios --file datos/items_pedido.json --jsonArray
mongoimport --db tienda_online --collection productos --file datos/carrito.json --jsonArray
mongoimport --db tienda_online --collection pedidos --file datos/reseñas.json --jsonArray
mongoimport --db tienda_online --collection usuarios --file datos/categorias.json --jsonArray
mongoimport --db tienda_online --collection productos --file datos/direcciones.json --jsonArray
mongoimport --db tienda_online --collection pedidos --file datos/transacciones.json --jsonArray

