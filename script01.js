
function exercicioL01A() {
    alert("Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.")
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"))
    fahr = (9 * celsius + 160) / 5
    alert(`A temperatura em graus Fahreinheit é de ${fahr}`)
}
function exercicioL01B() {
    let fahr = parseFloat(prompt("Digite a temperatura em graus Fahreinheit:"))
    celsius = (fahr - 32) * (5 / 9)
    alert(`A temperatura em graus Celsius é de ${celsius}`)
}
function exercicioL01C() {
    alert("Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Altura Raio Volume * * 2 π ← ")
    let altura = parseFloat(prompt("Digite a altura do cilíndro:"))
    let raio = parseFloat(prompt("Digite o raio do cilíndro"))
    volume = 3.14 * raio ** 2 * altura
    alert(`O volume do cilíndro é de ${volume.toFixed(2)}.`)
}
function exercicioL01D() {
    alert("Efetuar o cálculo da quantidade de litros de combustível gasta  em uma viagem, utilizando um  automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto  (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a  distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da  distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula  LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade  média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a  quantidade de litros (LITROS_USADOS) utilizada na viagem.")
    let tempo = parseFloat(prompt("Digite o tempo gasto na viagem em minutos:"))
    tempod = tempo / 60
    let velocidade = parseFloat(prompt("Digite a velocidade média do veículo durante a viagem:"))
    distancia = tempod * velocidade
    litros = distancia / 12
    alert(`Na viagem, foram gastos ${tempo} minutos para percorrer ${distancia}km, com a velocidade média de ${velocidade}km/h e ${litros.toFixed(2)} litros de combustível utilizados.`)
}

function exercicioL01E() {
    alert("Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula   PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).")
    let valor = parseFloat(prompt("Digite o valor inicial da prestação:"))
    let taxa = parseFloat(prompt("Digite a taxa cobrada pelo atraso da prestação em porcentagem:"))
    let atraso = parseInt(prompt("Digite à quantos meses a prestação está atrasada:"))
    valorFinal = valor + (valor * taxa / 100) * atraso
    alert(`O valor final da prestação será de R$${valorFinal.toFixed(2)}`)
}


function exercicioL01F() {
    alert("Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de  forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados")
    let valor1 = prompt("Digite o primeiro valor:")
    let valor2 = prompt("Digite o segundo valor:")
    valor3 = valor1
    valor1 = valor2
    valor2 = valor3
    alert(`O primeiro valor virou ${valor1} e o segundo virou ${valor2}.`)
}
function exercicioL01G() {
    alert("Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na   utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,  devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim  C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída. ")
    let A = parseInt(prompt("Digite o valor de A:"))
    let B = parseInt(prompt("Digite o valor de B:"))
    let C = parseInt(prompt("Digite o valor de C:"))
    let D = parseInt(prompt("Digite o valor de D:"))
    alert(`A soma de A com B é: ${A + B}`)
    alert(`A soma de A com C é: ${A + C}`)
    alert(`A soma de A com D é: ${A + D}`)
    alert(`A soma de B com C é: ${B + C}`)
    alert(`A soma de B com D é: ${B + D}`)
    alert(`A soma de C com D é: ${C + D}`)
    alert(`A multiplicação de A com B é: ${A * B}`)
    alert(`A multiplicação de A com C é: ${A * C}`)
    alert(`A multiplicação de A com D é: ${A * D}`)
    alert(`A multiplicação de B com C é: ${B * C}`)
    alert(`A multiplicação de B com D é: ${B * D}`)
    alert(`A multiplicação de C com D é: ${C * D}`)
}
function exercicioL01H() {
    alert("Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula  VOLUME  COMPRIMENTO * LARGURA * ALTURA. ")
    let altura = parseFloat(prompt("Digite a altura da caixa:"))
    let largura = parseFloat(prompt("Digite a largura da caixa:"))
    let comprimento = parseFloat(prompt("Digite o comprimento da caixa:"))
    volume = altura * largura * comprimento
    alert(`O volume da caixa é de ${volume}.`)
}


function exercicioL01I() {
    alert("Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo. ")
    let valor1 = parseInt(prompt("Digite o primeiro termo:"))
    let valor2 = parseInt(prompt("Digite o segundo termo:"))
    quadradodif = valor1 ** 2 - 2 * valor1 * valor2 + valor2 ** 2
    alert(`O resultado do quadrado da diferença do primeiro valor pelo segundo valor é ${quadradodif}.`)
}


function exercicioL01J() {
    alert("Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares  disponível com o usuário, para que seja apresentado o valor em moeda brasileira. ")
    let cotacao = parseFloat(prompt("Digite a cotação do dolar para o real:"))
    let dolar = parseFloat(prompt("Digite quantos dolares você possuí:"))
    conversao = dolar * cotacao
    alert(`Com essa quantidade de dolares você consegue R$${conversao}.`)
}

function exercicioL01K() {
    alert("Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em  real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível  com o usuário, para que seja apresentado o valor em moeda americana. ")
    let cotacao = parseFloat(prompt("Digite a cotação do dolar para o real:"))
    let real = parseFloat(prompt("Digite quantos reais você possuí:"))
    conversao = real / cotacao
    alert(`Com essa quantidade de reais você consegue $${conversao}.`)
}

function exercicioL01L() {
    alert("Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos")
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    let valor2 = parseFloat(prompt("Digite o segundo valor:"))
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"))
    somaquadrado = valor1 ** 2 + valor2 ** 2 + valor3 ** 2
    alert(`A soma dos quadrados dos valores é: ${somaquadrado}.`)
}

function exercicioL01M() {
    alert("Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.  ")
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    let valor2 = parseFloat(prompt("Digite o segundo valor:"))
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"))
    quadradosoma = (valor1 + valor2 + valor3) ** 2
    alert(`O quadrado da soma de todos os valores é: ${quadradosoma}.`)
}


function exercicioL02A() {
    alert("Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.")
    let numero1 = parseInt(prompt("Digite o primeiro número: "))
    let numero2 = parseInt(prompt("Digite o segundo número: "))

    if (numero1 > numero2) {
        alert(numero1 + " - " + numero2 + " = " + (numero1 - numero2));
    } else {
        alert(numero2 + " - " + numero1 + " = " + (numero2 - numero1));
    }
}


function exercicioL02B() {
    alert("Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. ")
    var numero = parseInt(prompt("Digite um número para ver seu módulo: "))
    if (numero < 0) {
        numero = numero * -1
    }
    alert("O módulo é " + numero)
}


function exercicioL02C() {
    alert("Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não  foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o  valor da média do aluno para qualquer condição. ")
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let nota3 = parseFloat(prompt("Digite a terceira nota: "))
    let nota4 = parseFloat(prompt("Digite a quarta nota: "))
    media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media < 5) {
        alert("O aluno foi reprovado com a média: " + media)
    } else {
        alert("O aluno foi aprovado com a média: " + media)
    }
}


function exercicioL02D() {
    alert("Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem  dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da  média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.  Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta   condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. ")
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let nota3 = parseFloat(prompt("Digite a terceira nota: "))
    let nota4 = parseFloat(prompt("Digite a quarta nota: "))
    media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7) {
        alert(`O aluno foi aprovado com a média ${media}`)
    } else {
        let exame = parseFloat(prompt("Digite a nota do exame do aluno: "))
        media2 = (media + exame) / 2
        if (media2 >= 5) {
            alert(`O aluno foi aprovado com a média ${media2}`)
        } else {
            alert(`O aluno foi reprovado com a média ${media2}`)
        }
    }
}


function exercicioL02E() {
    alert("Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de  segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.")
    let A = parseFloat(prompt("Digite o valor de A:"))
    let B = parseFloat(prompt("Digite o valor de B:"))
    let C = parseFloat(prompt("Digite o valor de C:"))
    delta = B ** 2 - 4 * A * C
    if ((delta >= 0) && (A != 0)) {
        delta = Math.sqrt(delta)
        X1 = (-B + delta) / (2 * A)
        X2 = (-B - delta) / (2 * A)
        alert(`A primeira raiz tem valor ${X1} e a segunda ${X2}.`)
    } else {
        alert(`A equação não possuí raizes reais.`)
    }
}


function exercicioL02F() {
    alert("Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.")
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    let valor2 = parseFloat(prompt("Digite o segundo valor:"))
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"))
    if ((valor1 > valor2) && (valor2 > valor3)) {
        alert(`Os números em ordem crescente são: ${valor3}, ${valor2}, ${valor1}`)
    } else {
        if ((valor1 > valor3) && (valor3 > valor2)) {
            alert(`Os números em ordem crescente são: ${valor2}, ${valor3}, ${valor1}`)
        } else {
            if ((valor2 > valor1) && (valor1 > valor3)) {
                alert(`Os números em ordem crescente são: ${valor3}, ${valor1}, ${valor2}`)
            } else {
                if ((valor2 > valor3) && (valor3 > valor1)) {
                    alert(`Os números em ordem crescente são: ${valor1}, ${valor3}, ${valor2}`)
                } else {
                    if ((valor3 > valor1) && (valor1 > valor2)) {
                        alert(`Os números em ordem crescente são: ${valor2}, ${valor1}, ${valor3}`)
                    } else {
                        if ((valor3 > valor2) && (valor2 > valor1)) {
                            alert(`Os números em ordem crescente são: ${valor1}, ${valor2}, ${valor3}`)
                        }
                    }
                }
            }
        }
    }
}


function exercicioL02G() {
    alert("Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.")
    let valor1 = parseInt(prompt("Digite o primeiro valor:"))
    let valor2 = parseInt(prompt("Digite o segundo valor:"))
    let valor3 = parseInt(prompt("Digite o terceiro valor:"))
    let valor4 = parseInt(prompt("Digite o quarto valor:"))
    if ((valor1 % 3 == 0) && (valor1 % 2 == 0)) {
        alert(`O valor ${valor1} é divisível por 2 e 3.`)
    }
    if ((valor2 % 3 == 0) && (valor2 % 2 == 0)) {
        alert(`O valor ${valor2} é divisível por 2 e 3.`)
    }
    if ((valor3 % 3 == 0) && (valor3 % 2 == 0)) {
        alert(`O valor ${valor3} é divisível por 2 e 3.`)
    }
    if ((valor4 % 3 == 0) && (valor4 % 2 == 0)) {
        alert(`O valor ${valor4} é divisível por 2 e 3.`)
    }
}


function exercicioL02H() {
    alert("Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.")
    let valor1 = parseInt(prompt("Digite o primeiro valor:"))
    let valor2 = parseInt(prompt("Digite o segundo valor:"))
    let valor3 = parseInt(prompt("Digite o terceiro valor:"))
    let valor4 = parseInt(prompt("Digite o quarto valor:"))
    let valor5 = parseInt(prompt("Digite o cinco valor:"))
    if ((valor1 > valor2) && (valor1 > valor3) && (valor1 > valor4) && (valor1 > valor5)) {
        maior = valor1
    } else {
        if ((valor2 > valor1) && (valor2 > valor3) && (valor2 > valor4) && (valor2 > valor5)) {
            maior = valor2
        } else {
            if ((valor3 > valor1) && (valor3 > valor2) && (valor3 > valor4) && (valor3 > valor5)) {
                maior = valor3
            } else {
                if ((valor4 > valor1) && (valor4 > valor2) && (valor4 > valor3) && (valor4 > valor5)) {
                    maior = valor4
                } else {
                    if ((valor5 > valor1) && (valor5 > valor2) && (valor5 > valor3) && (valor5 > valor4)) {
                        maior = valor5
                    }
                }
            }
        }
    }
    if ((valor1 < valor2) && (valor1 < valor3) && (valor1 < valor4) && (valor1 < valor5)) {
        menor = valor1
    } else {
        if ((valor2 < valor1) && (valor2 < valor3) && (valor2 < valor4) && (valor2 < valor5)) {
            menor = valor2
        } else {
            if ((valor3 < valor1) && (valor3 < valor2) && (valor3 < valor4) && (valor3 < valor5)) {
                menor = valor3
            } else {
                if ((valor4 < valor1) && (valor4 < valor2) && (valor4 < valor3) && (valor4 < valor5)) {
                    menor = valor4
                } else {
                    if ((valor5 < valor1) && (valor5 < valor2) && (valor5 < valor3) && (valor5 < valor4)) {
                        menor = valor5
                    }
                }
            }
        }
    }
    alert(`O maior valor é ${maior} e o menor ${menor}.`)
}



function exercicioL02I() {
    alert("Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar. ")
    let valor = parseInt(prompt("Digite um valor qualquer:"))
    if (valor % 2 == 0) {
        alert(`O valor é par.`)
    } else {
        alert(`O valor é ímpar.`)
    }
}


function exercicioL02J() {
    alert("Elaborar um programa que efetue a leitura de um valor que esteja entre a faixa de 1 a 9. Após a  leitura do valor fornecido pelo usuário, o programa deverá indicar uma de duas mensagens: 'O  valor está na faixa permitida', caso o usuário forneça o valor nesta faixa, ou a mensagem 'O valor  está fora da faixa permitida', caso o usuário forneça valores menores que 1 ou maiores que 9. ")
    let valor = parseFloat(prompt("Digite um valor qualquer:"))
    if ((valor < 1) || (valor > 9)) {
        alert(`O valor ${valor} está fora da faixa permitida.`)
    } else {
        alert(`O valor ${valor} está na faixa permitida.`)
    }
}

function exercicioL02K() {
    alert("Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua apresentação, caso o valor não seja maior que três.")
    let valor = parseFloat(prompt("Digite um valor qualquer:"))
    if (valor < 3) {
        alert(`O valor ${valor} não é maior que três.`)
    }
}

function exercicioL02L() {
    alert("Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: 'Ilmo Sr.', se o sexo informado como masculino, ou a  mensagem 'Ilma Sra., para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado. ")
    let nome = prompt("Digite o seu nome:")
    let sexo = prompt("Digite o seu sexo (M ou F):")
    if (sexo = "F") {
        alert(`Ilma Sra. ${nome}.`)
    } else {
        alert(`Ilmo Sr. ${nome}.`)
    }
}

function exercicioL03A() {
    alert("Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.")
    let multiplicando = parseInt(prompt("Digite o número a ser multiplicado; "))
    i = 1
    while (i < 11) {
        console.log(`${multiplicando} X ${i} = ${multiplicando * i}`)
        i++
    }
}

function exercicioL03B() {
    alert("Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).")
    let i = 1;
    let soma = 0;
    while (i <= 100) {
        soma += i;
        i++;
    }
    alert(`O resultado da soma obtida dos cem primeiros números inteiros é ${soma}`)
}

function exercicioL03C() {
    alert("Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de  1 até 500. ")
    let i = 1
    let soma = 0
    while (i <= 500) {
        if (i % 2 == 0) {
            soma += i
            i++
        } else {
            i++
        }   
    }
    alert(`O resultado da somatória de todos os números pares no intervalo 1 até 500 é ${soma}.`)
}

function exercicioL03D() {
    alert("Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução  , perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. ") 
    contador = 0
    while (contador <= 20) {
        if (contador%2 == 1){
            console.log(`O valor ${contador} é impar.`)
        }
        contador++
    }
}

function exercicioL03E() {
    alert("Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser  considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). ")
    resultado = 3
    contador = 2
    console.log(`3 elevado a 0 = 1`)
    console.log(`3 elevado a 1 = 3`)
    while (contador <= 15){
        resultado*=3
        console.log(`3 elevado a ${contador} = ${resultado}`)
        contador++
    }
}

function exercicioL03F() {
    alert("Elaborar um programa que apresente como resultado o valor de uma potência de uma base   qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor  do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do  portuguol (^). ")
    let base = parseInt(prompt("Digite a base da exponênciação:"))
    let expoente = parseInt(prompt("Digite o expoente da exponênciação:"))
    contador = 2
    resultado = base
    if (expoente == 0) {
        alert(`O número ${base} elevado a ${expoente} é igual a 1`)
    } else{
        if (expoente == 1) {
            alert(`O número ${base} elevado a ${expoente} é igual a ${base}`)
        } else{
            while (contador <= expoente){
                resultado = resultado*base
                contador++
            }
            alert(`O número ${base} elevado a ${expoente} é igual a ${resultado}`)
        }
    }
}

function exercicioL03G() {
    alert("Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de   Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza   pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo  valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.")
    atual = 1
    anterior = 0
    i = 0
    console.log("Os 15 primeiros termos da série de Fibonacci são:")
    while (i < 15){
        console.log(atual)
        controle = atual
        atual = atual+anterior
        anterior = controle
        i++
    }
}

function exercicioL03H() {
    alert("Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de  10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O  programa deve apresentar os valores das duas temperaturas. A fórmula de conversão  é  i)  = C  9 +    160  F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. ")
    celsius = 10
while (celsius <= 100){
    fahr = (9*celsius+160)/5
    console.log(`${celsius}ºC = ${fahr}ºF.`)
    celsius+=10
}
}

function exercicioL03I() {
    alert(" Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do  somatório e a média aritmética dos valores lidos.")
    i = 1
soma = 0
while (i <= 10){
    let valor = parseFloat(prompt(`Digite o ${i}º número:`))
    console.log(`${i}º valor digitado foi ${valor}.`)
    soma+=valor
    i++
}
media = soma/10
alert(`A somatória dos valores é de ${soma} e a média é de ${media}.`)
}


function exercicioL03J() {
    alert("Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores  pares situados na faixa numérica de 50 a 70.")
    i = 50
    pares = 0
    soma = 0
    while (i <= 70){
        if (i%2 == 0){
            soma+=i
            pares++
        }
        i++
    }
    media = soma/pares
    alert(`A somatória dos valores pares é de ${soma}, e a média aritmética deles é de ${media}.`)
}

function exercicioL03K() {
    alert("Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,   banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do       nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor  total acumulado da área residencial. ")
    var continua = 0
    areatotal = 0
    while (continua != 'NAO'){
    var comodo = prompt("Digite o nome do cômodo:")
    var largura = parseFloat(prompt("Digite a larguda do cômodo:"))
    var comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))
    area = largura*comprimento
    areatotal+=area
    alert(`A área do(a) ${comodo} é de ${area}`)
    var continua = prompt("Digite SIM para continuar e NAO para parar.")
    }
    alert(`A área total da residência é de ${areatotal}.`)
}



function exercicioL03L() { 
    alert("Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo   seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário. ")
    var valor = parseInt(prompt("Digite um valor inteiro qualquer, para parar, basta digitar um valor negativo."))
var maior = valor
var menor = valor
if (valor < 0){
    alert("Não foram digitados nenhum valor positivo.")
} else{
    while (valor >= 0){
        if (valor > maior){
            maior = valor
        }
        if (valor < menor){
            menor = valor
        }
        var valor = parseInt(prompt("Digite um valor inteiro qualquer, para parar, basta digitar um valor negativo.")) 
    }
    alert(`O maior valor digitado foi o ${maior} e o menor foi o ${menor}.`)
}
}


function exercicioL04A() { 
    alert("Apresentar os quadrados dos números inteiros de 15 a 200. ")
    let i = 15
do {
    console.log(`O valor ${i} ao quadrado é ${i**2}`)
    i++
} while(i <= 200)
}

function exercicioL04B() {
    alert("Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. ")
    i = 1
soma = 0
do{
    if (i % 2 == 0){
        soma+=i
    }
    i++
} while(i <= 500)
alert(`A somatória dos valores pares existentes na faixa de 1 até 500 é ${soma}`)
}


function exercicioL04C() {
    alert("Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o  número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a  instrução se  , perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o  próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1. ")
    i = 1
alert("Resultados no console do navegador.")
console.log(`Os números divisíveis por 4 que são menores de 200 são:`)
do {
    if (i % 4 == 0){
        console.log(`O valor ${i} é divisível por 4.`)
    }
    i++
} while (i <= 200)
 }
 

function exercicioL04D() { 
    alert("Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de  trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um grão de  trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro  quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos),   no terceiro quadro colocam-se 4 grãos (tendo neste momento 7 grãos), no quarto colocam-se 8   grãos (tendo-se então 15 grãos) até atingir o sexagésimo quarto (64o) quadro. Utilize variáveis do    tipo real  como acumuladores. ")
    i = 1
var soma = 1
var total = 0
do{
    total+=soma
    soma+=soma
    i++
}while (i <= 64)
alert(`O somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrex é de ${total}.`)
}


function exercicioL04E() { 
    alert("Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido. ")
    i1 = 1
total = 0
do{
    var valor = parseInt(prompt(`Digite o ${i1}º valor:`))
    i2 = valor
    fatorial = 1
    do{
        fatorial*=i2
        i2--
    }while (i2 > 1)
    total+=fatorial
    alert(`O fatorial do ${valor} é ${fatorial}`)
    i1++
} while (i1 <= 15)
alert(`A somatoria de todos os fatoriais é de ${total}`)
}

function exercicioL04F() { 
    alert("Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o  total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras  dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve  parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da  média. ")
    i = 0
total = 0
var valor = parseFloat(prompt("Digite um valor:"))
if (valor < 0 ){
    alert("Não foram inseridos nenhum valor positivo")
} else{
    do{
        total+=valor
        i++
        var valor = parseFloat(prompt("Digite outro valor: (para parar, digite um valor negativo.)"))
    } while (valor >= 0)
}
if (total == 0){
    alert(`Foram inseridos ${i} números, sua somatória foi 0 e não foi possível calcular a sua média.`)
} else {
    media = total/i
    alert(`Foram inseridos ${i} números, sua somatória foi ${total} e a sua média foi ${media}`)
}
}


function exercicioL04G() { 
    alert("Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10. ")
    i1 = 10
fatorial = 1
i2 = i1
total = 0
do{
    if (i2 % 2 == 1){
        do{
            fatorial*=i2
            i2--
        } while (i2 >= 1)
        total+=fatorial
        fatorial = 1
    }
    i1--
    i2 = i1
} while (i1 >= 1)
alert(`A soma dos fatoriais dos números impares é ${total}.`)
}

function exercicioL04H() {
    alert("Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do    nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área    do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar   calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor  total acumulado da área residencial. ")
    total = 0
    cont = 0
    do{
        let nome = prompt("Digite o nome do cômodo:")
        let largura = parseFloat(prompt("Digite a largura do cômodo:"))
        let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))
        area = comprimento*largura
        alert(`A area do(a) ${nome} é de ${area}.`)
        total+=area
        var cont = prompt(`Gostaria de inserir mais cômodos? NAO para encerrar e SIM para continuar:`)
    } while (cont != "NAO")
    alert(`A área total da residencia é de ${total}.`)
 }


function exercicioL04I() { 
    alert("Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo  seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo  usuário.")
    var valor = parseFloat(prompt("Digite um valor positivo:"))
    if (valor < 0){
        alert("Você encerrou o programa sem inserir nada.")
    } else{
        menor = valor, maior = valor
        do{
            if(menor > valor){
                menor = valor
            }
            if(maior < valor){
                maior = valor
            }
            var valor = parseFloat(prompt("Digite outro valor (para encerrar digite um valor negativo):"))
        } while (valor >= 0)
        alert(`O maior valor digitado foi o ${maior} e o menor foi o ${menor}.`)
    }
}

function exercicioL04J() {
    alert("Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.  Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético  DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve  apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. ")
    let valor1 = parseFloat(prompt("Digite o Numerador:"))
    let valor2 = parseFloat(prompt("Digite o Denominador:"))
    numerador = valor1
    i = 0
    do{
        valor1-=valor2
        i++
    } while (valor1 >= valor2)
    alert(`O resultado da divisão inteira do ${numerador}/${valor2} é ${i}`)
 }


function exercicioL05A() {
    alert("Apresentar os quadrados dos números inteiros de 15 a 200. ")
    for (i=15; i<=200; i++){
        console.log(`${i} ao quadrado é igual a ${i**2}.`)
    }
 }

function exercicioL05B() {
    alert("Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.")
    let valor = parseInt(prompt("Digite um valor e veja sua taboada de 1 até 10:"))
    for (i=1; i<=10; i++){
        console.log(`${valor} X ${i} = ${valor*i}`)
    }
 }


function exercicioL05C() {
alert("Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).")
    soma = 0
for (i=1; i<=100; i++){
    soma+=i
}
alert(`A soma dos cem primeiros números inteiros é de ${soma}.`)
 }

function exercicioL05D() { 
alert("Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.")
    soma = 0
for (i=1; i<=500; i++){
    if (i % 2 == 0) {
        soma+=i
    }
}
alert(`A soma dos números pares de 1 até 500 e ${soma}`)
}


function exercicioL05E() { 
  alert("Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução  , perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. ")
    console.log("Todos os valores impares no intervalo de 0 até 20 são:")
for (i=0; i <= 20; i++){
    if (i%2 != 0){
        console.log(i)
    }
}
}


function exercicioL05F() { 
   alert("Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o   número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a   instrução se  , perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o  próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.")
    console.log("Todos os valores divisiveis por 4 no intervalo 1 até 200 são:")
    for (i=1; i<=200; i++){
        if (i%4 == 0){
            console.log(i)
        }
    }
}


function exercicioL05G() {
  alert("Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser  considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que  neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). ")
    console.log("3 elevado a 0 = 1")
console.log("3 elevado a 1 = 3")
resultado = 3
for (i=2; i <=15; i++){
    resultado*=3
    console.log(`3 elevado a ${i} = ${resultado}`)
}
 }


function exercicioL05H() {
  alert("Elaborar um programa que apresente como resultado o valor de uma potência de uma base  qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor  do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do  portuguol (^).")
    let base = parseInt(prompt("Digite a base da exponenciação:"))
let expoente = parseInt(prompt("Digite o expoente da exponenciação:"))
if (expoente == 0){
    alert(`${base} elevado a 0 = 1`)
}
if (expoente == 1){
    alert(`${base} elevado a 1 = ${base}`)
}
resultado = 1
for (i=1; i<= expoente; i++){
    resultado*=base
}
alert(`${base} elevado a ${expoente} = ${resultado}.`)
 }


function exercicioL05I() {
 alert("Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de  Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza  pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo  valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo  é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. ")
    console.log("Os quinze primeiros valores da série de Fibonacci são:")
valor = 1
anterior = 0
for (i=1; i<=15; i++){
    console.log(valor)
    controle = valor
    valor+=anterior
    anterior=controle
}
 }

function exercicioL05J() { 
    alert("Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de   10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O   programa deve apresentar os valores das duas temperaturas. A fórmula de conversão   é   = C   9 + 160  F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. ")
    for (celsius = 10; celsius <= 100; celsius+=10){
        fahr=(9*celsius+160)/5
        console.log(`${celsius}ºC = ${fahr}ºF`)
    }
}

function exercicioL05K() { 
    alert("Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares  situados na faixa numérica de 1 a 10. ")  
    fatorial = 1
for (i=10; i>=1; i--){
    if (i%2 != 0){
        for (i2=i; i2>=1; i2--){
            fatorial*=i2
        }
        console.log(`O fatorial de ${i} é ${fatorial}`)
        fatorial = 1
    }
}
}






