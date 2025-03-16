class ContaBancaria {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number = 0) {
        this.numero = numero;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    sacar(valor: number): boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
            return true;
        } else {
            console.log("Saque não permitido. Saldo insuficiente.");
            return false;
        }
    }
}

class ContaCorrente extends ContaBancaria {
    limiteChequeEspecial: number;

    constructor(numero: string, saldo: number = 0, limiteChequeEspecial: number = 0) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valor: number): boolean {
        if (valor > 0 && this.saldo + this.limiteChequeEspecial >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado (Cheque Especial incluído). Novo saldo: R$${this.saldo.toFixed(2)}`);
            return true;
        } else {
            console.log("Saque não permitido. Limite de cheque especial excedido.");
            return false;
        }
    }
}

class ContaPoupanca extends ContaBancaria {
    taxaJuros: number;

    constructor(numero: string, saldo: number = 0, taxaJuros: number = 0.01) {
        super(numero, saldo);
        this.taxaJuros = taxaJuros;
    }

    aplicarJuros(): void {
        const juros = this.saldo * this.taxaJuros;
        this.saldo += juros;
        console.log(`Juros de R$${juros.toFixed(2)} aplicados. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
}

const contaCorrente = new ContaCorrente("12345", 1000, 500);
contaCorrente.sacar(1300);
contaCorrente.depositar(200);

const contaPoupanca = new ContaPoupanca("67890", 2000, 0.02);
contaPoupanca.aplicarJuros();
