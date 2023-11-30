var exibeMensagem = function(){
    var mensagemForaDoIf = "Caleum";
    if(true){
        var mensagemDentroDoIf = "Alura"
        console.log(mensagemDentroDoIf);
    }
    console.log(mensagemForaDoIf);
    console.log(mensagemDentroDoIf);
}

exibeMensagem(); //saída: Alura, Caleum, Alura

var exibeMensagem = function() {
    if(true) { 
        var escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';

       console.log(escopoBloco); // Alura 
   } 
   console.log(escopoFuncao); // Caelum 
   //console.log(escopoBloco); essa linha contém erro, pois estamos tentando acessar uma variável com escopo de bloco (let) fora do bloco onde ela foi declarada.

    void function(){ 
        const mensagem = 'Alura'; 
        console.log(mensagem); // Alura
        //mensagem = 'Caelum'; essa linha contém erro, pois uma constante não pode ser redefinida. 
    }();
}

const numeros = [1,2,3,4];
numeros.push(5);
console.log(numeros);

//tupla
let tupla: [number, boolean, string];
tupla = [5, false, "TypeScript"];
console.log(tupla)

const tuplaSoLeitura: readonly [boolean, string, number] = [false, "Go", 1];

const tuplaNomeada: [lat: number, lng: number] = [12.0, 14.0];

//Lidando com objetos, o '?' signica que é opcional
const car: {tipo: string, modelo: string, ano: number, quilometragem?: number} = {
    tipo: "Toyota",
    modelo: "Corolla",
    ano: 2020
}

console.log(car.ano);

car.modelo = "Ford";

console.log(car.modelo)

//criando um mapa
const mapaNomeIdade: {[index: string]: number} = {}
mapaNomeIdade.Fabio = 38;
mapaNomeIdade.Jaque = 33;

console.log(mapaNomeIdade)

//Enums representam um grupo de constantes (variáveis imutáveis). Por padrão, o primeiro valor é iniciado com 0
enum Coordenadas {
    Norte,
    Sul,
    Lest,
    Oeste
};
let coordenadaCorrente = Coordenadas.Norte;
console.log(coordenadaCorrente);

//e possível criar enums com valores já definidos
enum timesFutebol {
    Grêmio = 1,
    Inter, 
    Vasco,
    Santos
};

console.log(timesFutebol.Santos);

enum linguagensProgramacao {
    Java = "Java",
    Python = "Python"
};

console.log(linguagensProgramacao.Python);


interface Retangulo {
    altura: number,
    comprimento: number
};

const retangulo: Retangulo = {
    altura: 20,
    comprimento:10
};

//uma interface pode estender a definição de outra
interface RetanguloColorido extends Retangulo{
    cor: string
};

const retanguloVermelho: RetanguloColorido = {
    altura: 10,
    comprimento: 20,
    cor: "Vermelho"
};

console.log(retanguloVermelho)

//Usando '|' podemos dizer que o parâmetro pode ser string ou number
function imprimeStatusCode(code: number | string){
    console.log(`O status é ${code}`)
}

imprimeStatusCode(404);
imprimeStatusCode('404')


// o tipo do valor retornado pela função pode ser definido explicitamente
//Se nenhum tipo de retorno for definido, o TypeScript tentará inferir isso por meio dos tipos das variáveis ​​ou expressões retornadas.

function getTime(): number {
    return new Date().getTime();
}

console.log(getTime())

function multiplicaInteiros(a: number, b: number): number{
    return a * b;
}

//Se nenhum tipo de parâmetro for definido, o TypeScript usará como padrão any
console.log(multiplicaInteiros(4,5));

//Para parâmetos com valores padrão, o valor padrão vem após a anotação de tipo
function logBase10(valor: number, base: number = 10){}

