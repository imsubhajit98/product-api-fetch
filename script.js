fetch("https://dummyjson.com/products").then((response)=> response.json()).then((data)=>{
  let primeData = data.products;
  let divv = document.getElementById('divv'); // this stores the main div element where we gonaa display our cards

  // to loop over a primeData array of objects
  for (let i = 0; i < primeData.length; i++) {
    const element = primeData[i];
    let categoryy = element.category;
    let idd = element.id;
    let brandd = element.brand;
    let titlee = element.title;
    let descriptionn = element.description;
    let pricee = element.price;
    let discountPercentagee = element.discountPercentage;
    let stockk = element.stock;
    let ratingg = element.rating;
    let imageArr = element.images;
    let imagee = imageArr[0];
    let imagee1 = imageArr[1];
    let imagee2 = imageArr[2];

    let spann = document.createElement("span");

    spann.innerHTML = 
    `<div id="card" class="card border border-dark border-3 border-opacity-25" style="width: 20rem;height:48rem;">

                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${imagee}" class="d-block w-100"  width="100%" height="180" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="${imagee1}" class="d-block w-100"  width="100%" height="180" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="${imagee2}" class="d-block w-100"  width="100%" height="180" alt="...">
                          </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                  </div>






    
  
    <div class="card-body" id="card-body">
      <h3 class="card-title">${brandd}</h3>
      <p class="card-text text-capitalize"> <b>Category:</b> ${categoryy}</p>
      <p class="card-text text-capitalize"> <b>id:</b> ${idd}</p>
      <p class="card-text text-capitalize"> <b>Model/Title:</b> ${titlee}</p>
      <p class="card-text text-capitalize fst-italic"> <b>Description:</b> ${descriptionn}</p>
      <p class="card-text text-capitalize"> <b>Price:</b> ${pricee}$</p>
      <p class="card-text text-capitalize"> <b>Special Discount for you:</b> ${discountPercentagee}%</p>
      <p class="card-text text-capitalize"> <b>Ratings:</b> ${ratingg}</p>
      <p class="card-text text-capitalize fw-semibold" id="card-text"><i>Only ${stockk} items remain in stock. Hurry up before stock gets exausted!!!<i></p>
      <a class="btn btn-primary">Buy Now</a>
    </div>
  </div>`
    divv.appendChild(spann);
  }
  
  console.log(primeData);

})