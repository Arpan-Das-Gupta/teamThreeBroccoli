function sendEmail() {
    let index = localStorage.getItem('foundItemIndex');
    lostItems.splice(index, 1);
    alert('Email has been sent to the person who lost the item.');
    localStorage.removeItem('foundItemIndex');
    window.location.href = 'lost-items.html';
}


window.onload = () => {
    let index = localStorage.getItem('foundItemIndex');
    if (index !== null) {
        let item = lostItems[index];
        document.getElementById('foundMessage').innerHTML = `
            <strong>Type:</strong> ${item.productType} <br>
            <strong>Name:</strong> ${item.productName} <br>
            Status: <strong>Found</strong>
        `;
    } else {
        document.getElementById('foundMessage').innerText = 'No item selected.';
    }
};
