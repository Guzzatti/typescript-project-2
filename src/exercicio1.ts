class Funcionario {
    constructor(
        public nome: string,
        public salario: number,
        public cargo: string
    ) {}

    calcularVencimentos(): number {
        return this.salario;
    }
}

class FuncionarioEfetivo extends Funcionario {
    constructor(
        nome: string,
        salario: number,
        cargo: string,
        public bonusAnual: number
    ) {
        super(nome, salario, cargo);
    }

    calcularVencimentos(): number {
        return this.salario + this.bonusAnual;
    }
}

class FuncionarioTerceirizado extends Funcionario {
    constructor(
        nome: string,
        salario: number,
        cargo: string,
        public custoPorProjeto: number
    ) {
        super(nome, salario, cargo);
    }

    calcularVencimentos(): number {
        return this.salario + this.custoPorProjeto;
    }
}

const funcionario1 = new FuncionarioEfetivo("João", 5000, "Desenvolvedor", 2000);
console.log(`${funcionario1.nome} - Vencimentos: R$${funcionario1.calcularVencimentos()}`);

const funcionario2 = new FuncionarioTerceirizado("Maria", 4000, "Designer", 1500);
console.log(`${funcionario2.nome} - Vencimentos: R$${funcionario2.calcularVencimentos()}`);