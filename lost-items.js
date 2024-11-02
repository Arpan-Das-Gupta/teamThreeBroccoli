let lostItems = [
    { productType: 'Wallet', productName: 'Brown Leather Wallet', found: false },
    { productType: 'Phone', productName: 'iPhone 12', found: false },
    { productType: 'Keys', productName: 'Car Keys', found: true },
    { productType: 'Book', productName: 'Math Textbook', found: false }
];

function sortItems() {
    return lostItems.sort((a, b) => a.productName.localeCompare(b.productName));
}

function displayLostItems() {
    const listElement = document.getElementById('lostItemsList');
    listElement.innerHTML = ''; 

    let sortedItems = sortItems();
    
    sortedItems.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Type:</strong> ${item.productType} <br>
            <strong>Name:</strong> ${item.productName} <br>
            <label>
                Found: <input type="checkbox" onchange="markAsFound(${index})" ${item.found ? 'checked' : ''}>
            </label>
            <button onclick="openFoundPage(${index})">Mark as Found</button>
            <hr>
        `;
        listElement.appendChild(listItem);
    });
}

function markAsFound(index) {
    lostItems[index].found = !lostItems[index].found;
}

function openFoundPage(index) {
    localStorage.setItem('foundItemIndex', index);
    window.location.href = 'found-item.html';
}

function refreshList() {
    displayLostItems();
}

window.onload = () => {
    displayLostItems();
};
