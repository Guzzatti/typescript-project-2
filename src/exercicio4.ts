class Item {
    constructor(public nome: string, public preco: number) {}
}

class Pedido {
    numero: number;
    itens: Item[];
    descricao: string;

    constructor(numero: number, descricao: string) {
        this.numero = numero;
        this.descricao = descricao;
        this.itens = [];
    }

    adicionarItem(item: Item): void {
        this.itens.push(item);
    }

    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }
}

class PedidoDelivery extends Pedido {
    private taxaEntrega: number;

    constructor(numero: number, descricao: string, taxaEntrega: number) {
        super(numero, descricao);
        this.taxaEntrega = taxaEntrega;
    }

    calcularTotal(): number {
        return super.calcularTotal() + this.taxaEntrega;
    }
}

const item1 = new Item("Hambúrguer", 25.0);
const item2 = new Item("Refrigerante", 10.0);

const pedido1 = new Pedido(1, "Pedido presencial");
pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);
console.log(`Total do pedido presencial: R$${pedido1.calcularTotal().toFixed(2)}`);

const pedido2 = new PedidoDelivery(2, "Pedido delivery", 5.0);
pedido2.adicionarItem(item1);
pedido2.adicionarItem(item2);
console.log(`Total do pedido delivery: R$${pedido2.calcularTotal().toFixed(2)}`);
