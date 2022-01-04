const products = [{
    "product_name": "Samsung Galaxy S10",
    "image": "images/Mobiles data images/1.jpeg",
    "price": "3000",
    "description": "3 colours black, blue and white it has a 20 mp cam,128 GB / 512 GB storage, supports 5 G"
  },
  {
    "product_name": "Samsung Galaxy J4",
    "image": "images/Mobiles data images/2.jpeg",
    "price": "2500",
    "description": "3 colours gray,blue and white it has a 13 mp,128 GB / 512 GB storage,supports 5 G"
  },
  {
    "product_name": "apple iphone 13",
    "image": "images/Mobiles data images/3.jpeg",
    "price": "15000",
    "description": "4 colours black,red,grey and white it has a 15 mp cam,128 GB / 512 GB storage,supports 5 G"
  },
  {
    "product_name": "apple iphone 13 pro",
    "image": "images/Mobiles data images/4.jpeg",
    "price": "20000",
    "description": "4 colours black,gold,grey and white it has a 15 mp cam,128 GB / 512 GB storage,supports 5 G"
  },
  {
    "product_name": "apple iphone X",
    "image": "images/Mobiles data images/5.jpeg",
    "price": "12000",
    "description": "3 colours black,grey and white it has a 13 mp cam,128 GB / 512 GB storage,supports 4 G"
  },
  {
    "product_name": "Huawei Nova 7 i",
    "image": "images/Mobiles data images/6.jpeg",
    "price": "9000",
    "description": "2 colours red and green it has a 16 mp cam,128 GB storage,supports 5 G"
  },
  {
    "product_name": "Huawei Y9 Prime",
    "image": "images/Mobiles data images/7.jpeg",
    "price": "4500",
    "description": "2 colour blue and black it has a 12 mp cam,128 GB storage,supports 4 G"
  },
  {
    "product_name": "Lenovo K12 Note",
    "image": "images/Mobiles data images/8.jpeg",
    "price": "2750",
    "description": "3 colours black,blue and white it has a 14 mp cam,32 GB / 64 GB / 128 storage,supports 5 G"
  },
  {
    "product_name": "lenovo Z6 Pro",
    "image": "images/Mobiles data images/9.jpeg",
    "price": "2750",
    "description": "2 colours red and black it has a 15 mp cam,64 GB / 128 GB / 512 GB storage,supports 5 G"
  },
  {
    "product_name": "Samsung Galaxy a71",
    "image": "images/Mobiles data images/10.jpeg",
    "price": "2750",
    "description": "3 colours black,blue and white it has a 16 mp cam,64 GB / 128 GB / 512 GB storage,supports 4 G"
  },
  {
    "product_name": "Samsung Galaxy S21",
    "image": "images/Mobiles data images/11.jpeg",
    "price": "5500",
    "description": "2 colours black and white it has a 14 mp cam,128 GB / 512 GB storage,supports 5 G"
  }
]
const sectionCenter = document.querySelector(".product-container");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = products.map(function (item) {
    // console.log(item);
return `<div class="product-card">
                    <form class="product-image" method="POST" action="/mobilePage.html">
                        <span class="discount-tag">50% off</span>
                        <img src="${item.image}" class="product-thumb" alt="">
                        <button class="card-btn" type="submit" href="/mobilePage.html">Open</button>
                    </form>
                    <div class="product-info">
                        <h2 class="product-brand">${item.product_name}</h2>
                        <p class="product-short-des">${item.description} </p>
                        <span class="price">${item.price} L.E</span><span class="actual-price">${item.price * 2} L.E</span>
                    </div>
                </div>`

  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});

// var mobileIndex = 0;

// var button = document.querySelectorAll('.card-btn');
// button.addEventListener("click", ()=>{
//   for (var i = 0; i < button.length; i++) {    
//       button[i].addEventListener('click', ((j) => {         
//       return function() {
//         console.log(j)
//       }
//     })(i))
//   }
  
// })


