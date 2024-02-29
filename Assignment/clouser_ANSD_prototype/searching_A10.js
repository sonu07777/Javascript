function filterByCategory(products) {
    return function (category) {
      return products.filter(function (product) {
        return product.category === category;
      });
    };
  }
  
  // Expected Output
  
  var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];
  
  // var clothingProducts = filterByCategory(products)("Clothing");
  
  // console.log(clothingProducts);
  // Output: [{name: "Shirt", category: "Clothing"}, {name: "Pants", category: "Clothing"}]
// -----------------------------------------------------------------

function test(array){
  return function test1(age){
    return array.filter(function(array){
      let b = array.name;1
      return b.startsWith("s");
    });
  }
}
const aaa=[{name:"sonu",age:24},{name:"raja",age:24},{name:"satya",age:34},{name:"rajesh",age:90}];
// console.log(aaa[1].age);
console.log(test(aaa)("s"));
// test(aaa)("s")


  