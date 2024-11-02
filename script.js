function activateButton(button) {
    button.classList.toggle('active');
}

document.getElementById('min-input').addEventListener('blur', function() {
    const value = parseFloat(this.value);
    if (!isNaN(value)) {
        this.value = value.toFixed(2);
    }
    minMaxCheck();
});

document.getElementById('max-input').addEventListener('blur', function() {
    const value = parseFloat(this.value);
    if (!isNaN(value)) {
        this.value = value.toFixed(2);
    }
    minMaxCheck();
});

function minMaxCheck() {
    const valueMin = parseFloat(document.getElementById('min-input').value);
    const valueMax = parseFloat(document.getElementById('max-input').value);
    const priceWarning = document.getElementById('price-warning');

    if (valueMin > valueMax) {
        priceWarning.style.display = "flex";
    } else {
        priceWarning.style.display = "none";
    }
}


var finalArray = [];
var finalArray1 = [];
var finalArray2 = [];
var finalArray3 = [];

var selected = [];
var selectedSize = [];

filterSelection("all");
filterSize("all");
priceSelection();

function filterSelection(c) {
    if (c == "all") {
        selected = [];
    } else {
        const index = selected.indexOf(c);
        if (index > -1) {
            selected.splice(index, 1);
        } else {
            selected.push(c);
        }
      }

    var x = document.getElementsByClassName("item-box");
    finalArray1 = [];

    if (selected.length == 0) {
        for (let i = 0; i < x.length; i++) {
            finalArray1.push(x[i]);
        }
    } else {
        for (let i = 0; i < x.length; i++) {
            if (selected.some(cat => x[i].className.indexOf(cat) > -1)) {
                finalArray1.push(x[i]);
            }
        }
    }

    console.log("Filtered items:", finalArray1);
    console.log("Selected categories:", selected);

    compareLists();
}


function filterSize(c) {
    if (c == "all") {
        selectedSize = [];
    } else {
        const index = selectedSize.indexOf(c);
        if (index > -1) {
            selectedSize.splice(index, 1);
        } else {
            selectedSize.push(c);
        }
      }

    var x = document.getElementsByClassName("item-box");
    finalArray2 = [];

    if (selectedSize.length == 0) {
        for (let i = 0; i < x.length; i++) {
            finalArray2.push(x[i]);
        }
    } else {
        for (let i = 0; i < x.length; i++) {
            if (selectedSize.some(cat => x[i].className.indexOf(cat) > -1)) {
                finalArray2.push(x[i]);
            }
        }
    }

    console.log("Filtered items 2:", finalArray2);
    console.log("Selected categories 2:", selectedSize);

    compareLists();
}


function priceSelection() {
    var min_price = parseFloat(document.getElementById('min-input').value) || 0;
    var max_price = parseFloat(document.getElementById('max-input').value) || Infinity;
    let items = document.getElementsByClassName('item-box');

    finalArray3 = [];
    for (i = 0; i < items.length; i++) {
        let priceText = items[i].getElementsByClassName('item-price')[0].textContent;
        let it_price = parseFloat(priceText.replace('$', ''));

        if (it_price <= max_price && it_price >= min_price) {
            if (!finalArray3.includes(items[i])) {
                finalArray3.push(items[i]);
            }
        }
    }

    console.log("Filtered items 3:", finalArray3);

    compareLists();
}


function compareLists() {
    finalArray = finalArray1.filter(value => finalArray2.includes(value) && finalArray3.includes(value));
    console.log("finalarray", finalArray);
//    https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
    const counts = {};
    finalArray.forEach(function(i) { counts[i] = (counts[i]||0) + 1;});

    clearItems();

    finalArray.forEach(item => AddCat(item, "show-item"));
}

function clearItems() {
    const items = document.getElementsByClassName('item-box');
    for (let item of items) {
        RemoveCat(item, "show-item");
    }
}

function AddCat(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveCat(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Uncomment to get it to search while typing i js dont rly need it rn
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
