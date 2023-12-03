class Carro {
    private modelo : string;
    private marca : string;
    private ano: number


    public constructor(modelo: string, marca: string, ano: number){
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
    }

    public acelera(){
        console.log(`O ${this.marca} ${this.modelo} ${this.ano} está acelerando!`);
    }
}
export default Carro;

