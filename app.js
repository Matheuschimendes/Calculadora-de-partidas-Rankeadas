
// Exemplo de utilização da função


//A função interage com o Document Object Model (DOM) para obter valores de elementos HTML. Ela busca valores de campos de entrada com os IDs "vitorias" e "derrotas" usando document.getElementById("ID") e os converte para números inteiros usando parseInt().
function calcularRankeada(){

    let vitorias = parseInt(document.getElementById("vitorias").value)
    let derrotas = parseInt(document.getElementById("derrotas").value)

    //calcula o saldo de vitórias subtraindo o número de derrotas do número de vitórias.
    // let saldoVitorias = document.getElementById("resultado").innerHTML = vitorias - derrotas
    let saldoVitorias = vitorias - derrotas;

    let nivel = '' 
   

    //Usando estruturas condicionais (if...else if...else), a função verifica em qual faixa de quantidade de vitórias o jogador se encaixa e atribui um nível correspondente (Ferro, Bronze, Prata, etc.) à variável nivel.
    if( vitorias < 10){
        nivel = "Ferro"
    }else if( vitorias>= 11 && vitorias <= 20){
        nivel = "Bronze"
    }else if( vitorias >= 21 && vitorias <= 50){
        nivel = "Prata"
    }else if( vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro"
    }else if( vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante"
    }else if( vitorias >= 91 && vitorias <=100){
        nivel = "Lendário"
    }else {
        nivel = "Imortal"
    }

    

    //O resultado, composto pelo saldo de vitórias e o nível determinado, é exibido no HTML. Ele é atribuído ao elemento com o ID "resultado" usando document.getElementById("resultado").innerHTML.
    document.getElementById("resultado").innerHTML = `O Herói tem saldo de <span>${saldoVitorias}</span> está no nível <span>${nivel}</span>`

    return {saldoVitorias, nivel} // A função retorna um objeto contendo o saldo de vitórias e o nível alcançado.
    
}

//Validação de campos
function validation(){
    let vitorias = document.getElementById("vitorias").value;
    let derrotas = document.getElementById("derrotas").value;

    if(vitorias !== '' && derrotas !== ''){
        calcularRankeada();
    } else if(vitorias == ''){
        alert("Preencha o campo de vitórias.");
        
    } else if(derrotas == ''){
        alert("Preencha o campo de Derrotas.");
        
    }
}