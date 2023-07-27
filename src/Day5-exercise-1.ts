// Day 5 - Exercise 1

interface ItemCart{
  id  : number;
  title: string;
  variantId?: number;
}

function addToCart(item: ItemCart) {
  console.log(`Adding "${item.title}" to cart.`);
}

addToCart({id: 1, title: 'shoes'});
