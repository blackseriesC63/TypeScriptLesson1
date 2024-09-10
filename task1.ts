interface Item {
  name: string;
  price: number;
}

let shoppingCart: Item[] = [];

function addItem(name: string, price: number): string {
  const item: Item = { name, price };
  shoppingCart.push(item);
  return `${name} added to cart. Price is $${price}.`;
}

function calculateTotalCost(cart: Item[]): number {
  return cart.reduce((total, item) => total + item.price, 0);
}

console.log(addItem("iPhone 15Pro", 1200));
console.log(addItem("AirPods", 200));
console.log(addItem("Charger", 20));

const totalCost = calculateTotalCost(shoppingCart);
console.log(`Total cost: $${totalCost}`);
