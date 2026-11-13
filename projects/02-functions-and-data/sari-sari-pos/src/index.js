

const inventory = [
    {
        id: 1,
        name: "Lucky Me Pancit Canton",
        price: 18,
        stock: 15,
        category: "Noodles",
    },
    {
        id: 2,
        name: "Coke Mismo 300ml",
        price: 25,
        stock: 6,
        category: "Drinks",
    },
    {
        id: 3,
        name: "Argentina Corned Beef",
        price: 42,
        stock: 5,
        category: "Canned Goods",
    },
    {
        id: 4,
        name: "Jasmine Rice (1kg)",
        price: 58,
        stock: 15,
        category: "Staples",
    },
    {
        id: 5,
        name: "Kopiko Black 3-in-1",
        price: 12,
        stock: 0,
        category: "Coffe",
    },

];

console.log("----------------------------------------------");
console.log("Sari-Sari Store Terminal POS & inventory Manager");
console.log("----------------------------------------------");


console.log("ID | NAME | PRICE | STOCK | CATEGORY")
for (let i = 0; i < inventory.length; i++) {
    console.log(`${inventory[i].id}  | ${inventory[i].name} | ${inventory[i].price} |  ${inventory[i].stock} | ${inventory[i].category}`);
}


function findProductById(inventory, productId) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === productId) {
            return inventory[i]
        }

    }
    return null;


}




function getStockStatus(stock) {
    if (stock < 0 || typeof stock !== "number" || Number.isNaN(stock)) {
        return "Invalid Stock"
    } else if (stock === 0) {
        return "Out of Stock"
    } else if (stock >= 1 && stock <= 5) {
        return "Low Stock"
    } else if (stock > 5) {
        return "In Stock"
    } else {
        return "Invalid inputs"
    }
}




function calculateDiscount(subtotal, isSeniorOrPwd, promoCode) {

    // If `isSeniorOrPwd === true`, discount is **20%** of `subtotal` (Senior/PWD discount always takes priority). 

    const SENIOR_OR_PWD = 0.20;
    const PROMO_CODE_DISCOUNT = 0.10;

    if (isSeniorOrPwd === true) {
        return Number(subtotal * SENIOR_OR_PWD);
    } else if (promoCode === "SUKI10" && subtotal >= 200) {
        return Number(subtotal * PROMO_CODE_DISCOUNT);
    } else {
        return 0
    }

}



function getLowStockReport(inventory) {
    const inventoryLowStock = []
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].stock >= 0 && inventory[i].stock <= 5) {
            inventoryLowStock.push(inventory[i]);
        }
    }

    return inventoryLowStock;
}
// cart is an array of order objects, where each entry has `{ productId, quantity }`

// `cart`: `[{ productId: 1, quantity: 3 }, { productId: 2, quantity: 2 }]`
// , cashTendered, isSeniorOrPwd, promoCode
function checkout(inventory, cart, cashTendered, isSeniorOrPwd, promoCode) {


    let subtotal = 0;
    if (cart.length === 0) return { success: false, message: "Cart is empty" };

    for (let i = 0; i < cart.length; i++) {
        const product = findProductById(inventory, cart[i].productId);
        // Validate cart is not empty

        if (product === null) {
            return { success: false, message: `Product Id ${cart[i].productId}  is not exist ` }
        }
        // Validate quantiy is interger
        if (!Number.isInteger(cart[i].quantity)) return { success: false, message: `Quantity must be Integer. ${cart[i].quantity} ` }
        // Validate if quantity is > 0
        if (cart[i].quantity <= 0) {
            return { success: false, message: `Product quantity is less than 0  ` }
        }
        // Validate if stock is not < to the cart quantity
        if (product.stock < cart[i].quantity)
            return { success: false, message: `Product Id :${cart[i].productId} is Out of Stock ` }

        // Calculate total
        const total = product.price * cart[i].quantity;
        subtotal += total;
    }

    // Calculate Discount
    const discount = calculateDiscount(subtotal, isSeniorOrPwd, promoCode)
    const finalTotal = subtotal - discount;

    // Validate if Cash tendered
    if (typeof cashTendered !== "number" || Number.isNaN(cashTendered) || cashTendered < finalTotal) {
        return { success: false, message: `Cash tendered must be valid number & greater than ${finalTotal}` }
    }

    const change = cashTendered - finalTotal;


    // Update Inventory
    console.log("--------- OFFICIAL RECEIPT---------------");

    cart.forEach(item => {
        const product = findProductById(inventory, item.productId);
        product.stock -= item.quantity;

        console.log(`Product Name : ${product.name}, Quantity:${item.quantity}, Line Total: ${product.price * item.quantity}`);



    });
    console.log(`Subtotal : ${subtotal}`);
    console.log(`Discount : ${discount}`);
    console.log(`Final Total : ${finalTotal}`);
    console.log(`Cash Paid : ${cashTendered}`);
    console.log(`Change : ${change.toFixed(2)}`);

    console.log("---------------------------------------------");
    return { success: true, subtotal, discount, finalTotal, change };

}



const cart = [{ productId: 1, quantity: 1 }, { productId: 3, quantity: 1 }, { productId: 4, quantity: 2 }]



console.log(checkout(inventory, cart, 200, true, ""))
// console.log("Find Product By ID TEST")
// console.log(findProductById(inventory, 1))
// console.log(findProductById(inventory, 5))
// console.log(findProductById(inventory, 6))

// console.log("Stock Status TEST")
// console.log(getStockStatus(inventory[1].category))
// console.log(getStockStatus(inventory[0].stock))
// console.log(getStockStatus(inventory[2].stock))
// console.log(getStockStatus(inventory[4].stock))


// getLowStockReport(inventory)
// console.log("Low Stock Checker TEST")
// console.log(`Inventory low stock `, inventoryLowStock);
// console.log(`Inventory Out of Stock `, inventoryOutOfStock);

// console.log(getLowStockReport(inventory))
// console.log(getLowStockReport(inventory))