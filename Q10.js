const store = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'T-shirt', category: 'Apparel' },
    { name: 'Coffee Maker', category: 'Kitchen Appliances' },
    { name: 'Running Shoes', category: 'Footwear' },
    { name: 'Notebook', category: 'Stationery' }
];

function filterByCategory(category) {
    return function(products) {
        return products.filter(item => item.category === category);
    };
}

// Example usage:

// Create a filter function for 'Electronics'
const filterElectronics = filterByCategory('Footwear');

// Use the filter function to get products in the 'Electronics' category
const electronicsProducts = filterElectronics(store);

console.log(electronicsProducts);


