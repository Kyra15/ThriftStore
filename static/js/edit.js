// https://www.w3schools.com/w3css/w3css_slideshow.asp

const item_id = window.location.search.split("=")[1];

//fetch from db
document.addEventListener("DOMContentLoaded", function() {
    fetchFromDB();
});


// https://www.w3schools.com/jsref/api_fetch.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function fetchFromDB() {
    fetch('/productsdb')
    .then(response => {
        if (!response.ok) {
            throw new Error('network response error oops ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // have to get only one object based on id
        console.log(item_id)
        const product_data = data.find((item) => item.id == item_id);

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
    document.getElementById("item-stock").textContent = product.stock;

    let tags = product.tags.replace(/['"\[\]]/g, "").split(", ");
    let images = product.images.replace(/['"\[\]]/g, "").split(", ");
    console.log(images);
    tags.forEach((tag, index) => addTag(tag, index, tags.length));
    images.forEach(createImage);
    // file upload for the photo
    showDivs(slideIndex);
}

function addTag(str, ind, tags_len) {
    title_str = toTitleCase(str);
    if (ind == tags_len-1) {
        document.getElementById("item-categories").textContent += title_str + " ";
    } else {
        document.getElementById("item-categories").textContent += title_str + ", "
    }
}

function createImage(img_url) {
    const newImg = document.createElement('img');
    newImg.className = "item-slideshow";
    newImg.src = `static/images/${img_url}`;
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


function saveChanges() {
    const updateData = {
      "name": document.getElementById("item-name"),
      "price": document.getElementById("item-price"),
      "type": document.getElementById("item-type"),
      "description": document.getElementById("item-details"),
      "tags": ["small", "shirt", "monkey", "clothes"],
      "size": "sz-" + document.getElementById("item-size").replace("+", ""),
      "stock": 50,
      "images": ["blue thumbs up.png", "blue wow.png"]
    }
    fetch("http://localhost:4201/products/" + item_id, {
    method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Update successful:', data);
        })
        .catch(error => {
            console.error('Error updating data:', error);
        });
}

window.onload = checkAccess;
