const express = require('express');
const app = express();

// Ruta /
app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

// Ruta /clientes
app.get('/clientes', (req, res) => {
  res.send('Clientes: Cliente 1, Cliente 2, Cliente 3');
});

// Ruta /productos
app.get('/productos', (req, res) => {
  res.send('Productos: Producto 1, Producto 2, Producto 3');
});

app.listen(5000, () => {
  console.log('Aplicación corriendo en el puerto 5000');
});
