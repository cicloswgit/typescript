interface Item{
    name: string;
    price: number;

    itemPurchased(message: string): void;
}

let product1: Item = {
    name: 'Lorena',
    price: 200,

    itemPurchased(message: string){
        console.log(message + ' '+ this.name);
    }
}

product1.itemPurchased('The product was purchased by');