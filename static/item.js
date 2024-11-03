// https://www.w3schools.com/w3css/w3css_slideshow.asp

const item_id = window.location.search.split("=")[1];

//fetch from db
document.addEventListener("DOMContentLoaded", function() {
    fetchFromDB();
});

function fetchFromDB() {
    fetch('temp_db.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('network response error oops ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // have to get only one object based on id
        console.log(item_id)
        const product_data = data.products.find((item) => item.id == item_id);

        if (product_data) {
            console.log("product", product_data.id);
            updateHTML(product_data);
        } else {
            console.log('no product ig idk i need to fix w better error handling');
        }
    })
    .catch(error => {
        console.error('error fix it ig:', error);
    });

}


function updateHTML(product) {
    console.log(product);
    document.getElementById("item-name").textContent = product.name;
    document.getElementById("item-price").textContent = product.price;
    document.getElementById("item-details").textContent = product.description;
    document.getElementById("item-categories").textContent = product.categories;

    product.images.forEach(createImage);
    showDivs(slideIndex);
}

function createImage(img_url) {
    const newImg = document.createElement('img');
    newImg.className = "item-slideshow";
    newImg.src = `images/${img_url}`;
    document.getElementById("item-slides-container").appendChild(newImg);
}


var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("item-slideshow");

  if (n > x.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex-1].style.display = "block";
  document.getElementById("slide-num").textContent = slideIndex;
  document.getElementById("total-slides").textContent = x.length;
}
