let personajes = document.getElementById("personajes").getContext("2d");
let Mapa = document.getElementById("Mapa").getContext("2d");

// tamaños de sprites
const sizePixel = 10;
const sizePacman = 2;
const sizeEnemy = 2;
const sizeFood = 1;

let canvaswidth = document.getElementById("Mapa").width/sizePixel;
let canvasheight = document.getElementById("Mapa").height/sizePixel
// position
var xPacman = 2;
var yPacman = 2;

function drawPacman(){
    let size = sizePixel*sizePacman;
    let x = sizePixel*xPacman;
    let y = sizePixel*yPacman;
    let radio = size/2

    //dibujando pacman
    personajes.beginPath();
    personajes.moveTo(x,y);
    personajes.arc(x,y,radio,0.25*Math.PI,1.75*Math.PI);
    personajes.fillStyle = "yellow";
    personajes.strokeStyle = "black";
    personajes.stroke();
    personajes.fill();

    let radioOjo = radio/7.5;
    let ojoY = y-4*radioOjo;

    personajes.moveTo(175,225);
    personajes.beginPath();
    personajes.arc(x,ojoY,radioOjo,0,2*Math.PI);
    personajes.fillStyle = "black";
    personajes.strokeStyle = "white";
    personajes.stroke();
    personajes.fill();
}
function drawEnemy(x,y,color){
    let size = sizePixel*sizeEnemy;
    x = sizePixel*x + sizePixel/2;
    y = sizePixel*y + sizePixel/4;
    let radio = size/2;
    
    //dibujando enemigos
    personajes.beginPath();
    personajes.arc(x,y,radio,Math.PI,0);
    personajes.moveTo(x+radio,y);
    personajes.lineTo(x+radio,y+0.75*size);
    personajes.lineTo(x+0.5*radio,y+0.5*size);
    personajes.lineTo(x,y+0.75*size);
    personajes.lineTo(x-0.5*radio,y+0.5*size);
    personajes.lineTo(x-radio,y+0.75*size);
    personajes.lineTo(x-radio,y);
    personajes.fillStyle = color;
    personajes.fill();

    //dibujando ojos
    personajes.beginPath();
    personajes.ellipse(x-0.5*radio, y,0.25*radio,0.5*radio,0,0,2*Math.PI);
    personajes.ellipse(x+0.5*radio, y,0.25*radio,0.5*radio,0,0,2*Math.PI);
    personajes.fillStyle = "white";
    personajes.fill();
}
function drawFood(x,y,color){
    let size = sizePixel*sizeFood;
    x = sizePixel*x;
    y = sizePixel*y;

    personajes.beginPath();
    personajes.rect(x-size,y-size,size,size);
    personajes.fillStyle = color;
    personajes.fill();

}

function drawWall(){
    for (let i=0;i<patronLaberinto.length; i++){
        let leftX = patronLaberinto[i][0]*sizePixel;
        let topY = patronLaberinto[i][1]*sizePixel;
        Mapa.beginPath();
        Mapa.rect(leftX,topY,sizePixel,sizePixel);
        Mapa.fillStyle = "blue";
        Mapa.strokeStyle = "white";
        Mapa.fill();
        Mapa.stroke();
    }
}

drawWall();

function movepacmantoright(){
    if(xPacman<canvaswidth -1){
        xPacman += 1;
    }

}

function movepacmantoleft(){
    if(xPacman>1){
        xPacman -= 1;
    }
}

function movepacmanup(){
    if(yPacman<1){
        yPacman -= 1;
    }
}


function movepacmandown(){
    if(yPacman<canvasheight -1){
        yPacman += 1;
    }
}

window.onkeydown = function(e){
    if(e.code == "ArrowRight"){
        movepacmantoright();
    }
    else if(e.code == "ArrowLeft"){
        movepacmantoleft();
    }
    else if(e.code == "ArrowUp"){
        movepacmanup();
    }
    else if(e.code == "ArrowDown"){
        movepacmandown();
    }
    drawGame();
}
function drawGame(){
    personajes.clearRect(0,0,500,500);
    drawPacman();
}


