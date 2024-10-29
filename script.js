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
