function activateButton(button) {
    button.classList.toggle('active');
}

document.getElementById('min-input').addEventListener('blur', function() {
    const value = parseFloat(this.value);
    if (!isNaN(value)) {
        this.value = value.toFixed(2);
    }
});

document.getElementById('max-input').addEventListener('blur', function() {
    const value = parseFloat(this.value);
    if (!isNaN(value)) {
        this.value = value.toFixed(2);
    }
});

document.getElementById('min-input').addEventListener('blur', function() {
	const value_min = parseFloat(this.value);
  const value_max = parseFloat(document.getElementById('max-input').value);
  const min_warning = document.getElementById('min-warning');

  if (value_min > value_max) {
  		min_warning.style.display = "flex";
  } else {
  		min_warning.style.display = "none";
  }
});


var selected = [];
filterSelection("all")
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
  if (selected.length == 0) {
    for (let i = 0; i < x.length; i++) {
      AddCat(x[i], "show-item");
    }
    return;
  }

  for (let i = 0; i < x.length; i++) {
    RemoveCat(x[i], "show-item");
    if (selected.some(cat => x[i].className.indexOf(cat) > -1)) {
      AddCat(x[i], "show-item");
    }
  }
}

// issues with priority of selection -> if you do clothes + m you'll get
// both the clothes obj and the furniture/toy cuz that's m
// but this isn't super important

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

// this is will make it so search is updated while typing
// but idrc if its used cuz its not super useful
//document.getElementById('searchbar').addEventListener('input', lookUp);
function lookUp() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('item-box');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            RemoveCat(x[i], "show-item");
        }
        else {
            AddCat(x[i], "show-item");
        }
    }
}

function priceSelection() {
    var min_price = parseFloat(document.getElementById('min-input').value) || 0;
    var max_price = parseFloat(document.getElementById('max-input').value) || Infinity;

    let items = document.getElementsByClassName('item-box');
    window.alert("items" + items);

    for (i = 0; i < items.length; i++) {
        let priceText = items[i].getElementsByClassName('item-price')[0].textContent;
        let it_price = parseFloat(priceText.replace('$', ''));
        if (it_price <= max_price && it_price >= min_price) {
            AddCat(items[i], "show-item");
        }
        else {
            RemoveCat(items[i], "show-item");
        }
    }
}
