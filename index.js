const express = require('express')
const app = express()
app.listen(3000, console.log("¡Servidor encendido!"))

app.get("/canciones",(req, res)=>{
  res.send('Hello World!');
});














/* 1. Levantar un servidor local usando Express Js (2 Puntos)
2. Devolver una página web como respuesta a una consulta GET (2 Puntos)
3. Ofrecer diferentes rutas con diferentes métodos HTTP que permitan las operaciones
CRUD de datos alojados en un archivo JSON local (3 Puntos)
4. Manipular los parámetros obtenidos en la URL (1 Puntos)
5. Manipular el payload de una consulta HTTP al servidor (2 Puntos)*/