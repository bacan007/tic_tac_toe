var tablero = [];
var marca = "x";
var marcas = [];

function iniciarJuego(){
    location.reload();
}

function marcar(id, indice){
    
    tablero[indice] = marca;

    if(marcas.length > 1)
    {
        var idx = marcas.indexOf(id);
    
        console.log(idx);

        if (idx > -1) {
            return;
        }
    }

    marcas.push(id);

    var img = document.createElement('img');
    img.style.width = "100px";
    img.className = "center";
    
    img.src = marca + ".png";

    document.getElementById(id).appendChild(img);
    
    verificarFilas(marca);
    verificarColumnas(marca);
    verificarDiagonalPrincipal(marca);
    verificarDiagonalSecundaria(marca);

    if(marca == "x"){
        marca = "o";
    }else{
        marca = "x";
    }
    
}

function verificarFilas(marcaJ){
    
    var esValido = false;

    if(tablero[0] == marcaJ && tablero[1] == marcaJ && tablero[2] == marcaJ){
        esValido = true;
    }else if(tablero[3] == marcaJ && tablero[4] == marcaJ && tablero[5] == marcaJ){
        esValido = true;
    }
    else if(tablero[6] == marcaJ && tablero[7] == marcaJ && tablero[8] == marcaJ){
        esValido = true;
    }

    if(esValido){
        alert('ganador jugador ' + marcaJ);
    }
}

function verificarColumnas(marcaJ){
    
    var esValido = false;

    if(tablero[0] == marcaJ && tablero[3] == marcaJ && tablero[6] == marcaJ){
        esValido = true;
    }else if(tablero[1] == marcaJ && tablero[4] == marcaJ && tablero[7] == marcaJ){
        esValido = true;
    }
    else if(tablero[2] == marcaJ && tablero[5] == marcaJ && tablero[8] == marcaJ){
        esValido = true;
    }

    if(esValido){
        alert('ganador jugador ' + marcaJ);
    }
}

function verificarDiagonalPrincipal(marcaJ){
    
    var esValido = false;

    if(tablero[0] == marcaJ && tablero[4] == marcaJ && tablero[8] == marcaJ){
        esValido = true;
    }

    if(esValido){
        alert('ganador jugador ' + marcaJ);
    }
}

function verificarDiagonalSecundaria(marcaJ){
    
    var esValido = false;

    if(tablero[2] == marcaJ && tablero[4] == marcaJ && tablero[6] == marcaJ){
        esValido = true;
    }

    if(esValido){
        alert('ganador jugador ' + marcaJ);
    }

}
