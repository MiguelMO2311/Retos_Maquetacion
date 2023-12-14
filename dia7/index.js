// function  addNewGarment () {
//     document.getElementById('hiddenDiv').style.visibility = 'visible';
//     document.getElementById('hiddenDiv').style.opacity = 1;
//     // document.getElementById('parrafo').innerText = 'Hola buenos días';
//     $('#parrafo').text('Hola buenos días');
// }
const garments = [];

function addNewGarment() {
   
    const IdCard = document.getElementById('card.alt').value;
    const imgCard = document.getElementById('card.title').value;
    const titleCard = document.getElementById('card.title').value;
    const textCard = document.getElementById('card.text').value;
    const priceCard = document.getElementById('card.price').value;
}

    const newGarment = {
        title: titleInput,
        price: priceInput,
    };
    // console.log (newGarment)
    garments.push(newGarment);
    console.log(garments);

const garmentsList = document.getElementById('garment-list');


function displayGarments(list) {
    list.forEach(garment => {
        const listElement = document.createElement('li');
        listElement.textContent = `${garment.title} - ${garment.price} `;
        garmentsList.appendChild(listElement);
    })
};
