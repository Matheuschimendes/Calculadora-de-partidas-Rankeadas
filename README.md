# 2️⃣ Desafio Calculadora de partidas Rankeadas

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo
 
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

- Se vitórias for menor do que 10 = Ferro
- Se vitórias for entre 11 e 20 = Bronze
- Se vitórias for entre 21 e 50 = Prata
- Se vitórias for entre 51 e 80 = Ouro
- Se vitórias for entre 81 e 90 = Diamante
- Se vitórias for entre 91 e 100= Lendário
- Se vitórias for maior ou igual a 101 = Imortal

## O que foi incluido

Foram feitas interações com a interface do usuário, assim fazendo com que o próprio insira os pontos adquiridos da vitórias e os da derrota, com isso retornando seus resultados.

    Elementos do DOM: Foram adicionadas referências aos elementos HTML usando document.getElementById para capturar valores de entrada do usuário e para exibir o resultado.

    Atribuição de Valores dos Inputs: A função calcularRankeada agora utiliza document.getElementById("vitorias").value e document.getElementById("derrotas").value para obter os valores inseridos pelo usuário nos campos de entrada com IDs "vitorias" e "derrotas", respectivamente.

    Atualização do Resultado na Página: Em vez de exibir o resultado no console, o saldo de vitórias e o nível alcançado são exibidos no HTML usando document.getElementById("resultado").innerHTML.

    Retorno de Valores: A função continua retornando um objeto contendo o saldo de vitórias e o nível alcançado.

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"