// Shift Cash drawer tracker


function createCashDrawer(storeName, openingBalance) {
    const drawer = { storeName, balance: openingBalance, trasaction: [] };

    recordSale(drawer, "Pandesal", 200);

    return drawer;
}


function recordSale(drawer, itemName, amount) {
    const updateBalance = drawer.balance - amount;
    drawer.balance = updateBalance;
    drawer.trasaction.push = itemName;

    if (amount >= 100) {
        const note = "High Value Sale";
        console.log(note);
        drawer.highSale = note;
    }

    // console.log(note); 
    return drawer;
}

console.log(createCashDrawer("Jes", 2000));