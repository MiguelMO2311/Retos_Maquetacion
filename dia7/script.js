const chart = [];


class Garment {

    constructor(id, photo, title, text, price) {

        this.id = id;
        this.photo = photo;
        this.title = title;
        this.text = text;
        this.price = price;
    }
}
const dataBase = [
    new Garment(1, './img/pantalones_tallealto.png', 'Pantalon Suelto Gris',
        'Some quick example tet to build on the card title and make up the bulkof cards content', 20),
    new Garment(2, './img/vestido_tunico.png', 'vestido tunico',
        'Some quick example tet to build on the card title and make up the bulkof cards content', 18),
    new Garment(3, './img/falda_print.png', 'Falde Mid Print',
        'Some quick example tet to build on the card title and make up the bulkof cards content', 12),
    new Garment(4, './img/cardigan_largo_rayas.png', 'Cardigan Largo Rayas',
        'Some quick example tet to build on the card title and make up the bulkof cards content', 22),
    new Garment(5, './img/falda_mini_zebra.png', 'Falda Mini Zebra',
        'Some quick example tet to build on the card title and make up the bulkof cards content', 27),
    new Garment(6, './img/mono_overol.png', 'Mono Overol',
        'Some quick example tet to build on the card title and make up the bulkof cards content', 33),
    new Garment(7, './img/vestido_jersey.png', 'Vestido Jersey',
        'Some quick example tet to build on the card title and make up the bulkof cards content', 38),
    new Garment(8, './img/pantalon_ancho.png', 'Pantalon Ancho',
        'Some quick example tet to build on the card title and make up the bulkof cards content', 19),
];
const container = document.getElementById('clothes-container');

// createCards(); *** sustituido por onload en body html ***


function addNewItem(id) {
    chart.push(dataBase.find(item => item.id == id));
    console.log(chart)
}


function totalPrice() {
    let totalPrice = 0;
    chart.forEach(garment => {
        totalPrice += garment.price;
    })
    return totalPrice;
}

function refreshItems() {
    let chartElement = document.querySelector('#listaCarrito');
    chartElement.innerHTML = '';

    chart.forEach(garment => {
        let productElement = document.createElement('li');
        productElement.innerText = `${garment.title}: ${garment.price}€`;
        chartElement.appendChild(productElement);
    })

    const priceCalculation = document.querySelector('#total');
    priceCalculation.textContent = `${totalPrice()}`;
}

function createCards() {
    let htmlCards = '';
    dataBase.forEach(garment => {
        const card =
            `<div class="card" style="width: 16rem; margin:10px;justify-content:center">
  <img src="${garment.photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${garment.title}</h5>
    <p class="card-text">${garment.text}</p>
    <p class="card-text">${garment.price}€</p>
    <button class="btn btn-dark" onclick ="addNewItem(${garment.id})" >Añadir al carrito</button>
  </div>
</div>`
        htmlCards += card;
    })
    container.innerHTML = htmlCards;
}