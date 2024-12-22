let shoppingList = [];


function addItem() {
    const inputField = document.querySelector('input[type="text"]');
    const itemName = inputField.value.trim();


    if (itemName === "") {
        alert("Please enter a valid item name.");
        return;
    }


    if (shoppingList.length >= 7) {
        alert("The shopping list is full. Please remove an item from the list.");
        return;
    }


    shoppingList.push(itemName);
    updateShoppingList();
    inputField.value = "";
}


function removeItem() {

    if (shoppingList.length === 0) {
        alert("No item is in the list. Please add an item to the list.");
        return;
    }


    shoppingList.pop();
    updateShoppingList();
}


function updateShoppingList() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";


    shoppingList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });
}
