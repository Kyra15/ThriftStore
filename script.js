function activateButton(button) {
    button.classList.toggle('active');
}

document.getElementById('min-input').addEventListener('blur', function() {
    const value = parseFloat(this.value);
    if (!isNaN(value)) {
        this.value = value.toFixed(2);
    }
    validateMinMax();
});

document.getElementById('max-input').addEventListener('blur', function() {
    const value = parseFloat(this.value);
    if (!isNaN(value)) {
        this.value = value.toFixed(2);
    }
    validateMinMax();
});

function validateMinMax() {
    const valueMin = parseFloat(document.getElementById('min-input').value);
    const valueMax = parseFloat(document.getElementById('max-input').value);
    const minWarning = document.getElementById('min-warning');

    if (valueMin > valueMax) {
        minWarning.style.display = "flex";
    } else {
        minWarning.style.display = "none";
    }
}

var selected = [];
var finalArray = [];

function filterSelection(c) {
    if (c === "all") {
        selected = [];
    } else {
        const index = selected.indexOf(c);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(c);
        }
    }
    applySelectionFilter();
}

var selectedSize = [];

function filterSize(c) {
    if (c === "all") {
        selectedSize = [];
    } else {
        const index = selectedSize.indexOf(c);
        if (index > -1) {
            selectedSize.splice(index, 1);
        } else {
            selectedSize.push(c);
        }
    }
    applySizeFilter();
}

function applySelectionFilter() {
    const items = document.getElementsByClassName("item-box");
    finalArray = [];

    for (let i = 0; i < items.length; i++) {
        if (selected.length === 0 || selected.some(cat => items[i].className.includes(cat))) {
            finalArray.push(items[i]);
        }
    }
    priceSelection();
}

function applySizeFilter() {
    const items = document.getElementsByClassName("item-box");
    const filteredBySize = [];

    for (let i = 0; i < items.length; i++) {
        if (selectedSize.length === 0 || selectedSize.some(size => items[i].className.includes(size))) {
            filteredBySize.push(items[i]);
        }
    }

    finalArray = finalArray.filter(item => filteredBySize.includes(item));
    priceSelection();
}

function priceSelection() {
    const minPrice = parseFloat(document.getElementById('min-input').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-input').value) || Infinity;
    const items = document.getElementsByClassName('item-box');

    finalArray = finalArray.filter(item => {
        const priceText = item.getElementsByClassName('item-price')[0].textContent;
        const itemPrice = parseFloat(priceText.replace('$', ''));
        return itemPrice >= minPrice && itemPrice <= maxPrice;
    });

    compareLists();
}

function compareLists() {
    const uniqueArray = Array.from(new Set(finalArray));

    clearItems();
    uniqueArray.forEach(item => AddCat(item, "show-item"));
}

function clearItems() {
    const items = document.getElementsByClassName('item-box');
    for (let item of items) {
        RemoveCat(item, "show-item");
    }
}

function AddCat(element, name) {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    arr2.forEach(cat => {
        if (!arr1.includes(cat)) {
            element.className += " " + cat;
        }
    });
}

function RemoveCat(element, name) {
    let arr1 = element.className.split(" ");
    name.split(" ").forEach(cat => {
        arr1 = arr1.filter(item => item !== cat);
    });
    element.className = arr1.join(" ");
}

// Uncomment if needed
// document.getElementById('searchbar').addEventListener('input', lookUp);
function lookUp() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    const items = document.getElementsByClassName('item-box');

    Array.from(items).forEach(item => {
        if (!item.innerHTML.toLowerCase().includes(input)) {
            RemoveCat(item, "show-item");
        } else {
            AddCat(item, "show-item");
        }
    });
}
