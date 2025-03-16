class Veiculo {
    modelo: string;
    capacidade: number;

    constructor(modelo: string, capacidade: number) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }

    calcularConsumo(distancia: number, passageiros?: number): number {
        throw new Error("Método deve ser implementado nas subclasses");
    }
}

class Onibus extends Veiculo {
    consumoPorKm: number;

    constructor(modelo: string, capacidade: number, consumoPorKm: number) {
        super(modelo, capacidade);
        this.consumoPorKm = consumoPorKm;
    }

    calcularConsumo(distancia: number): number {
        return distancia * this.consumoPorKm;
    }
}

class Taxi extends Veiculo {
    taxaPorPassageiro: number;

    constructor(modelo: string, capacidade: number, taxaPorPassageiro: number) {
        super(modelo, capacidade);
        this.taxaPorPassageiro = taxaPorPassageiro;
    }

    calcularConsumo(distancia: number, passageiros: number = 1): number {
        return distancia * this.taxaPorPassageiro * passageiros;
    }
}

const onibus = new Onibus("Mercedes", 50, 2.5);
console.log(`Consumo do ônibus: ${onibus.calcularConsumo(100)} litros`);

const taxi = new Taxi("Toyota", 4, 0.8);
console.log(`Consumo do táxi: ${taxi.calcularConsumo(100, 3)} litros`);
