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
