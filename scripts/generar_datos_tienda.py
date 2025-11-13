# es necesario instalar faker
#pip install faker

import json
import random
import pandas as pd
from faker import Faker

faker = Faker("es_ES")

# Generar datos para usuarios
usuarios = [
    {
        "nombre": faker.name(),
        "email": faker.email(),
        "telefono": faker.msisdn(),
        "ciudad": faker.city(),
        "activo": random.choice([True, False])
    }
    for _ in range(50)
]

# Generar datos para productos
productos = [
    {
        "nombre": faker.word().capitalize() + " " + random.choice(["Pro", "Max", "Lite", "Plus"]),
        "categoria": random.choice(["Electrónica", "Ropa", "Hogar", "Deportes", "Salud"]),
        "precio": round(random.uniform(10_000, 2_000_000), 2),
        "stock": random.randint(1, 500),
        "disponible": random.choice([True, True, False])
    }
    for _ in range(30)
]

# Generar datos para pedidos
pedidos = [
    {
        "usuario": random.choice(usuarios)["email"],
        "producto": random.choice(productos)["nombre"],
        "cantidad": random.randint(1, 5),
        "total": round(random.uniform(20_000, 3_000_000), 2),
        "fecha": str(faker.date_this_year())
    }
    for _ in range(40)
]

# Crear DataFrames
usuarios_df = pd.DataFrame(usuarios)
productos_df = pd.DataFrame(productos)
pedidos_df = pd.DataFrame(pedidos)

# Guardar archivos JSON
usuarios_df.to_json("usuarios.json", orient="records", force_ascii=False, indent=4)
productos_df.to_json("productos.json", orient="records", force_ascii=False, indent=4)
pedidos_df.to_json("pedidos.json", orient="records", force_ascii=False, indent=4)

print("✅ Archivos creados: usuarios.json, productos.json, pedidos.json")
