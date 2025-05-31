import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n======= Menu de Exercícios =======");
    console.log("1 - Soma de dois números");
    console.log("2 - Verificar se é par ou ímpar");
    console.log("3 - Calcular média de três notas");
    console.log("4 - Converter Celsius para Fahrenheit");
    console.log("5 - Mostrar números pares de 1 a 20");
    console.log("6 - Ler 5 números e exibir");
    console.log("7 - Encontrar maior número em um array");
    console.log("8 - Contar vogais em uma string");
    console.log("9 - Calculadora simples (+ - * /)");
    console.log("10 - Ordenar array em ordem crescente");
    console.log("11 - Classe Pessoa (nome e idade)");
    console.log("12 - Classe Aluno herdando de Pessoa");
    console.log("13 - Interface Veiculo e classe Carro");
    console.log("14 - Tabuada de um número");
    console.log("15 - Calculadora de IMC");
    console.log("16 - Validador de senha");
    console.log("17 - Jogo de adivinhação");
    console.log("18 - Contar palavras em uma string");
    console.log("0 - Sair");
    console.log("==================================\n");

    rl.question('Escolha um exercício (0 a 18): ', (resposta) => {
        const opcao = parseInt(resposta);

        switch (opcao) {
            case 1:
                console.log("\n--- Exercício 1: Soma de dois números ---\n");
                // Pede o primeiro número
                rl.question('Digite o primeiro número: ', (num1) => {
                    // Pede o segundo número
                    rl.question('Digite o segundo número: ', (num2) => {
                        // Converte para número e soma
                        const resultado = parseFloat(num1) + parseFloat(num2);
                        console.log(`A soma de ${num1} + ${num2} = ${resultado}`);
                        afterExercise();
                    });
                });
                break;

            case 2:
                console.log("\n--- Exercício 2: Verificar se é par ou ímpar ---\n");
                rl.question('Digite um número: ', (numero) => {
                    const num = parseInt(numero);
                    // Verifica se o resto da divisão por 2 é zero
                    if (num % 2 === 0) {
                        console.log(`${num} é um número PAR`);
                    } else {
                        console.log(`${num} é um número ÍMPAR`);
                    }
                    afterExercise();
                });
                break;

            case 3:
                console.log("\n--- Exercício 3: Calcular média de três notas ---\n");
                rl.question('Digite a primeira nota: ', (nota1) => {
                    rl.question('Digite a segunda nota: ', (nota2) => {
                        rl.question('Digite a terceira nota: ', (nota3) => {
                            // Converte para número e calcula a média
                            const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
                            console.log(`Média das notas: ${media.toFixed(2)}`);
                            // Verifica se foi aprovado
                            if (media >= 7) {
                                console.log('Situação: APROVADO');
                            } else {
                                console.log('Situação: REPROVADO');
                            }
                            afterExercise();
                        });
                    });
                });
                break;

            case 4:
                console.log("\n--- Exercício 4: Converter Celsius para Fahrenheit ---\n");
                rl.question('Digite a temperatura em Celsius: ', (celsius) => {
                    // Fórmula: F = (C × 9/5) + 32
                    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
                    console.log(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);
                    afterExercise();
                });
                break;

            case 5:
                console.log("\n--- Exercício 5: Mostrar números pares de 1 a 20 ---\n");
                console.log('Números pares de 1 a 20:');
                // Loop de 1 a 20, mostra apenas os pares
                for (let i = 1; i <= 20; i++) {
                    if (i % 2 === 0) {
                        console.log(i);
                    }
                }
                afterExercise();
                break;

            case 6:
                console.log("\n--- Exercício 6: Ler 5 números e exibir ---\n");
                lerCincoNumeros();
                break;

            case 7:
                console.log("\n--- Exercício 7: Encontrar maior número em um array ---\n");
                // Array de exemplo
                const arrayNumeros = [15, 7, 23, 4, 18, 12, 9];
                console.log('Array:', arrayNumeros);
                // Encontra o maior número usando Math.max
                const maiorNumero = Math.max(...arrayNumeros);
                console.log(`Maior número: ${maiorNumero}`);
                afterExercise();
                break;

            case 8:
                console.log("\n--- Exercício 8: Contar vogais em uma string ---\n");
                rl.question('Digite uma frase: ', (frase) => {
                    const vogais = 'aeiouAEIOU';
                    let contador = 0;
                    // Percorre cada letra da frase
                    for (let i = 0; i < frase.length; i++) {
                        if (vogais.includes(frase[i])) {
                            contador++;
                        }
                    }
                    console.log(`A frase "${frase}" tem ${contador} vogais`);
                    afterExercise();
                });
                break;

            case 9:
                console.log("\n--- Exercício 9: Calculadora simples ---\n");
                rl.question('Digite o primeiro número: ', (num1) => {
                    rl.question('Digite o segundo número: ', (num2) => {
                        rl.question('Digite a operação (+, -, *, /): ', (operacao) => {
                            const n1 = parseFloat(num1);
                            const n2 = parseFloat(num2);
                            let resultado: number;
                            
                            switch (operacao) {
                                case '+':
                                    resultado = n1 + n2;
                                    break;
                                case '-':
                                    resultado = n1 - n2;
                                    break;
                                case '*':
                                    resultado = n1 * n2;
                                    break;
                                case '/':
                                    if (n2 !== 0) {
                                        resultado = n1 / n2;
                                    } else {
                                        console.log('Erro: Divisão por zero!');
                                        afterExercise();
                                        return;
                                    }
                                    break;
                                default:
                                    console.log('Operação inválida!');
                                    afterExercise();
                                    return;
                            }
                            console.log(`${n1} ${operacao} ${n2} = ${resultado}`);
                            afterExercise();
                        });
                    });
                });
                break;

            case 10:
                console.log("\n--- Exercício 10: Ordenar array em ordem crescente ---\n");
                const arrayDesordenado = [64, 34, 25, 12, 22, 11, 90];
                console.log('Array original:', arrayDesordenado);
                // Ordena usando o método sort()
                const arrayOrdenado = [...arrayDesordenado].sort((a, b) => a - b);
                console.log('Array ordenado:', arrayOrdenado);
                afterExercise();
                break;

            case 11:
                console.log("\n--- Exercício 11: Classe Pessoa ---\n");
                // Definindo a classe Pessoa
                class Pessoa {
                    nome: string;
                    idade: number;
                    
                    constructor(nome: string, idade: number) {
                        this.nome = nome;
                        this.idade = idade;
                    }
                    
                    apresentar(): void {
                        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
                    }
                }
                
                // Criando e testando a classe
                const pessoa1 = new Pessoa('João', 25);
                const pessoa2 = new Pessoa('Maria', 30);
                
                pessoa1.apresentar();
                pessoa2.apresentar();
                afterExercise();
                break;

            case 12:
                console.log("\n--- Exercício 12: Classe Aluno herdando de Pessoa ---\n");
                // Classe pai
                class PessoaBase {
                    nome: string;
                    idade: number;
                    
                    constructor(nome: string, idade: number) {
                        this.nome = nome;
                        this.idade = idade;
                    }
                    
                    apresentar(): void {
                        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
                    }
                }
                
                // Classe filha que herda de Pessoa
                class Aluno extends PessoaBase {
                    curso: string;
                    
                    constructor(nome: string, idade: number, curso: string) {
                        super(nome, idade); // Chama o construtor da classe pai
                        this.curso = curso;
                    }
                    
                    estudar(): void {
                        console.log(`${this.nome} está estudando ${this.curso}`);
                    }
                    
                    // Sobrescrevendo o método apresentar
                    apresentar(): void {
                        super.apresentar();
                        console.log(`Curso: ${this.curso}`);
                    }
                }
                
                // Testando as classes
                const aluno1 = new Aluno('Ana', 20, 'Engenharia');
                aluno1.apresentar();
                aluno1.estudar();
                afterExercise();
                break;

            case 13:
                console.log("\n--- Exercício 13: Interface Veiculo e classe Carro ---\n");
                // Definindo a interface
                interface Veiculo {
                    marca: string;
                    modelo: string;
                    ano: number;
                    acelerar(): void;
                    frear(): void;
                }
                
                // Classe que implementa a interface
                class Carro implements Veiculo {
                    marca: string;
                    modelo: string;
                    ano: number;
                    
                    constructor(marca: string, modelo: string, ano: number) {
                        this.marca = marca;
                        this.modelo = modelo;
                        this.ano = ano;
                    }
                    
                    acelerar(): void {
                        console.log(`${this.marca} ${this.modelo} está acelerando!`);
                    }
                    
                    frear(): void {
                        console.log(`${this.marca} ${this.modelo} está freando!`);
                    }
                    
                    mostrarInfo(): void {
                        console.log(`Carro: ${this.marca} ${this.modelo} (${this.ano})`);
                    }
                }
                
                // Testando
                const meuCarro = new Carro('Toyota', 'Corolla', 2022);
                meuCarro.mostrarInfo();
                meuCarro.acelerar();
                meuCarro.frear();
                afterExercise();
                break;

            case 14:
                console.log("\n--- Exercício 14: Tabuada de um número ---\n");
                rl.question('Digite um número para ver a tabuada: ', (numero) => {
                    const num = parseInt(numero);
                    console.log(`\nTabuada do ${num}:`);
                    // Loop de 1 a 10
                    for (let i = 1; i <= 10; i++) {
                        console.log(`${num} x ${i} = ${num * i}`);
                    }
                    afterExercise();
                });
                break;

            case 15:
                console.log("\n--- Exercício 15: Calculadora de IMC ---\n");
                rl.question('Digite seu peso (kg): ', (peso) => {
                    rl.question('Digite sua altura (m): ', (altura) => {
                        const pesoNum = parseFloat(peso);
                        const alturaNum = parseFloat(altura);
                        // Fórmula: IMC = peso / (altura²)
                        const imc = pesoNum / (alturaNum * alturaNum);
                        
                        console.log(`Seu IMC é: ${imc.toFixed(2)}`);
                        
                        // Classificação do IMC
                        if (imc < 18.5) {
                            console.log('Classificação: Abaixo do peso');
                        } else if (imc < 25) {
                            console.log('Classificação: Peso normal');
                        } else if (imc < 30) {
                            console.log('Classificação: Sobrepeso');
                        } else {
                            console.log('Classificação: Obesidade');
                        }
                        afterExercise();
                    });
                });
                break;

            case 16:
                console.log("\n--- Exercício 16: Validador de senha ---\n");
                rl.question('Digite uma senha: ', (senha) => {
                    let valida = true;
                    const problemas: string[] = [];
                    
                    // Verifica o tamanho mínimo
                    if (senha.length < 8) {
                        valida = false;
                        problemas.push('Deve ter pelo menos 8 caracteres');
                    }
                    
                    // Verifica se tem número
                    if (!/\d/.test(senha)) {
                        valida = false;
                        problemas.push('Deve ter pelo menos um número');
                    }
                    
                    // Verifica se tem letra maiúscula
                    if (!/[A-Z]/.test(senha)) {
                        valida = false;
                        problemas.push('Deve ter pelo menos uma letra maiúscula');
                    }
                    
                    // Verifica se tem letra minúscula
                    if (!/[a-z]/.test(senha)) {
                        valida = false;
                        problemas.push('Deve ter pelo menos uma letra minúscula');
                    }
                    
                    if (valida) {
                        console.log('✅ Senha VÁLIDA!');
                    } else {
                        console.log('❌ Senha INVÁLIDA!');
                        console.log('Problemas encontrados:');
                        problemas.forEach(problema => console.log(`- ${problema}`));
                    }
                    afterExercise();
                });
                break;

            case 17:
                console.log("\n--- Exercício 17: Jogo de adivinhação ---\n");
                jogarAdivinhacao();
                break;
                
            case 18:
                console.log("\n--- Exercício 18: Contar palavras em uma string ---\n");
                rl.question('Digite uma frase: ', (frase) => {
                    // Remove espaços extras e divide por espaços
                    const palavras = frase.trim().split(/\s+/);
                    // Filtra palavras vazias
                    const palavrasValidas = palavras.filter(palavra => palavra.length > 0);
                    
                    console.log(`A frase "${frase}" tem ${palavrasValidas.length} palavras`);
                    console.log('Palavras encontradas:', palavrasValidas);
                    afterExercise();
                });
                break;

            case 0:
                console.log("\nSaindo... Até mais!\n");
                rl.close();
                break;

            default:
                console.log("\nOpção inválida. Tente novamente.\n");
                menu();
                break;
        }
    });
}

// Função para o exercício 6
function lerCincoNumeros() {
    const numeros: number[] = [];
    let contador = 0;
    
    function lerNumero() {
        if (contador < 5) {
            rl.question(`Digite o ${contador + 1}º número: `, (num) => {
                numeros.push(parseFloat(num));
                contador++;
                lerNumero(); // Chama recursivamente
            });
        } else {
            console.log('Números digitados:', numeros);
            afterExercise();
        }
    }
    lerNumero();
}

// Função para o exercício 17
function jogarAdivinhacao() {
    // Gera número aleatório entre 1 e 100
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    
    console.log('Tente adivinhar o número entre 1 e 100!');
    
    function jogar() {
        rl.question('Digite seu palpite: ', (palpite) => {
            const numero = parseInt(palpite);
            tentativas++;
            
            if (numero === numeroSecreto) {
                console.log(`🎉 Parabéns! Você acertou em ${tentativas} tentativas!`);
                console.log(`O número era ${numeroSecreto}`);
                afterExercise();
            } else if (numero < numeroSecreto) {
                console.log('📈 Muito baixo! Tente um número maior.');
                jogar();
            } else {
                console.log('📉 Muito alto! Tente um número menor.');
                jogar();
            }
        });
    }
    jogar();
}

function afterExercise() {
    console.log("");
    rl.question('Quer continuar? (s/n): ', (answer) => {
        if (answer.toLowerCase() === 's') {
            console.log('\n-------------------------------------\n');
            menu();
        } else {
            console.log("\nEncerrando o programa. Até mais!\n");
            rl.close();
        }
    });
}

// Inicia o menu
menu();
