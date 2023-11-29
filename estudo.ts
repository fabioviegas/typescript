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

const tuplaNomeada: [x: number, y: number] = [12.0, 14.0];

