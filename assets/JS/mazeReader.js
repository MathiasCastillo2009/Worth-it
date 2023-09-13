// Este script imprime las coordenadas de los muros extraidas desde laberinto.txt en el navegador.
// Copiar las coordenadas y pegarlas como valor de la variable patronLaberinto en assets/js/laberinto.js
function dataToArray(data) {
    let lines = data.split("\r\n");

    let rows = [];
    lines.forEach(line => {
        rows.push(line.split("\t"));
    })
    return rows;
}

function arrayToCoordinates(data) {
  let cord = [];
  document.write("[")
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            if (data[i][j] == "2") {
                cord.push([j, i]);
              document.write("[" + j +","+ i + "], ");
            }
        }
    }
  document.write("]")
}
// capturar la lista cord
async function readFile(filePath) {
    const response = await fetch(filePath);
    const data = await response.text();
   
   let arr = dataToArray(data);
   arrayToCoordinates(arr);
}

readFile("../data/laberinto.txt");