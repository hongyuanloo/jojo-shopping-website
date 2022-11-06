let cart22 = {
  items: [
    {
      title: "title",
      price: "price",
      image: "images[0]",
      quantity: 1,
      category: "category.name",
    },
    {},
  ],
  totalQuantity: 3,
  totalPrice: 500,
};

let cartInit = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

let cartItems, setCartItems;
let cart, setCart;

let insert = `/categories/1`;
let new1 = `https://api.escuelajs.co/api/v1${insert}/products`;
let all = `https://api.escuelajs.co/api/v1/products`;
let categor1 = `https://api.escuelajs.co/api/v1/categories/1/products`;

console.log("aa: ", new1);
console.log("bb: ", categor1);
console.log("cc: ", new1 === categor1);
