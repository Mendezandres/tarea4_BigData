# Taller MongoDB – Tienda Online

Este repositorio contiene el desarrollo del taller de bases de datos NoSQL utilizando MongoDB.  
El caso de estudio corresponde a una **tienda en línea** con tres colecciones principales:

- `usuarios`
- `productos`
- `pedidos`

---

## 📁 Estructura del repositorio

tarea4_BigData/
│
├── datos/ # Datos usados para cargar en MongoDB
├── scripts/ # Scripts de Python y consultas Mongo
├── documentacion/ # Informe formal del proyecto
└── README.md # Este archivo


---

## 🚀 Scripts incluidos

### ✔ Generador de datos (Python)
`scripts/generar_datos_tienda.py`

Genera archivos JSON con más de 100 registros para cada colección.

### ✔ Consultas de MongoDB
- `consultas_basicas.js`
- `consultas_filtros.js`
- `consultas_agregacion.js`

Cada script incluye las consultas solicitadas en el taller.

---

## 🗄 Importación de datos a MongoDB

Ejecutar:

```bash
mongoimport --db tienda_online --collection usuarios --file datos/usuarios.json --jsonArray
mongoimport --db tienda_online --collection productos --file datos/productos.json --jsonArray
mongoimport --db tienda_online --collection pedidos --file datos/pedidos.json --jsonArray
