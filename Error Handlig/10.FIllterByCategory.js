//  Filter by Category.

// Write a function that takes an array of products and returns a function that filters the array by a given product category. The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input.

function filterByCategory(product) {
     return function (category) {
          return product.filter(function (product) {
               return product.category === category;
          });  
     };
};

//   Expected Output 

var Product = [
     {name : "Shirt", category : "Clothing"},
     {name : "Pants", category : "Clothing"},
     {name : "Hat", category : "Accessories"},
     {name : "Sunglasses", category : "Accessories"}
]


 const Clothing = filterByCategory(Product) ("Clothing");

console.log(Clothing);

const Clothing1 = filterByCategory(Product) ("Accessories");

console.log(Clothing1);
