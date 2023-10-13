const http = require('node:http')
const fs = require('node:fs')


const server = http.createServer((req, res) => {
  let text = `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>logica-programacion-2</title>
  </head>
  <body>
    <script>
      function calculo(){
        let celsius = parseFloat(document.getElementById("celsius").value)
        let fahrenheit = ((celsius * 9/5) + 32).toString()
        let kelvin = (celsius + 273).toString()
        let element = document.createElement("p")
        let text = "Grados en Kelvin: " + kelvin  + "; "  + "Grados en Farenheit: " + fahrenheit
        element.appendChild(document.createTextNode(text))
        const respuesta = document.body.appendChild(element)
      }
    </script>
    <label for="celsius">Ingrese los grados Celcius:</label>
    <input type="text" id="celsius" name="celsius">
    <button onclick="calculo()">Calcular</button>
  </body>
  </html>`
  let html = fs.appendFile('./index.html', text, (err) => {
    if (err) throw err
    console.log('Creado')
  })
  fs.readFile('./index.html', (err, data) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write(data)
    return res.end(html)
  })
  
})

server.listen(0, () => {
  console.log(`El servidor está escuchando en el puerto http://localhost:${server.address().port}`)
})