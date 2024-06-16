function sendPostRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./users/displayproduct.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        generateProductHTML(xhr.responseText);
        console.log(xhr.responseText);
      }
    };
    xhr.send("action=displayallproducts");
  }
  
  function generateProductHTML(response) {
    var productContainer = document.getElementById("productContainer");
  
    var productList = JSON.parse(response);
    productList.forEach((product) => {
      var productHTML = `
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full ">
    <div class=" rounded-lg shadow-md overflow-hidden mb-4 bg-white p-4">
        <a onclick="products(${product.id})" class="block relative h-48">
            <img src="./uploads/${product.product_image}" alt="${product.product_name}" class="object-cover object-center w-full h-full rounded-3xl  p-4">
        </a>
        <div class="mt-4 bg-white">
            <h3 class="text-[#00493E] text-md text-center tracking-widest uppercase font-semibold mb-1">
                ${product.product_category}
            </h3>
            <h2 class="text-[#00493E] text-lg font-bold text-center">
                ${product.product_name}
            </h2>
            <p class="mt-1 text-blue-600 text-center"> ${product.product_price} DT</p>
        </div>
    </div>
</div>

        `;
      productContainer.innerHTML += productHTML;
    });
  }
  
  sendPostRequest();
  