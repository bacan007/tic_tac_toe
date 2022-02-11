var tablero = [["","",""],["","",""],["","",""]];
var marca = "x";
var marcas = [];

function marcar(id, fila, columna){
    
    tablero[fila, columna] = marca;

    if(marcas.length > 1)
    {
        var idx = marcas.indexOf(id);
    
        console.log(idx);

        if (idx > -1) {
            return;
        }
    }

    marcas.push(id);

    var img = document. createElement('img');
    
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
    

    for (var i = 0; i < 3; i++) {
        var conteo = 0;
        for (var j = 0; j < 3; j++) {
            if(tablero[i][j] == marcaJ){
        
                conteo++;

                if(conteo == 3){
                    alert('ganador jugador ' + marcaJ);
                    return;
                }
            }
        }
    }
}

function verificarColumnas(marcaJ){
    
    for (var i = 0; i < 3; i++) {
        var conteo = 0;
        for (var j = 0; j < 3; j++) {
            if(tablero[j][i] == marcaJ){
        
                conteo++;

                if(conteo == 3){
                    alert('ganador jugador ' + marcaJ);
                    return;
                }
            }
        }
    }
}

function verificarDiagonalPrincipal(marcaJ){
    
    var conteo = 0;

    for (var i = 0; i < 3; i++) {
        
        for (var j = 0; j < 3; j++) {
            
            if(i == j && tablero[i][j] == marcaJ){
        
                conteo++;

                if(conteo == 3){
                    alert('ganador jugador ' + marcaJ);
                    return;
                }
            }
        }
    }
}

function verificarDiagonalSecundaria(marcaJ){
    
    var conteo = 0;

    for (var i = 0; i < 3; i++) {
        
        for (var j = 0; j < 3; j++) {
            if((i + j == 2) && tablero[i][j] == marcaJ){
        
                conteo++;

                if(conteo == 3){
                    alert('ganador jugador' + marcaJ);
                    return;
                }
            }
        }
    }

}
