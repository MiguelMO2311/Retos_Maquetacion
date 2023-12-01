
const travels = [];

function addNewTravel() {
    const nameInput = document.getElementById('name').value;
    const originInput = document.getElementById('origin').value;
    const destinationImput = document.getElementById('destination').value;
    const numPeopleImput = document.getElementById('numPeople').value;
    const dateImput = document.getElementById('date').value;

    const newTravel = {
        name: nameInput,
        origin: originInput,
        destination: destinationImput,
        numPeople: numPeopleImput,
        date: dateImput,
    };
    // console.log (newTravel)
    travels.push(newTravel);
    console.log(travels);
}

function filterTravels() {

    const filteredList = travels.filter(travel => {
        const destinationTolowerCase = travel.destination.toLowerCase();
        const destinationCondition = destinationTolowerCase === 'canarias' ||
            destinationTolowerCase === 'mallorca' || destinationTolowerCase === 'galicia';
        return destinationCondition;
    })

    displayTravels(filteredList)
}

const travelsList = document.getElementById('travel-list');


function displayTravels(list) {
    list.forEach(travel => {
        const listElement = document.createElement('li');
        listElement.textContent = `${travel.name} - ${travel.origin} - ${travel.destination} - ${travel.numPeople} - ${travel.date}`;
        travelsList.appendChild(listElement);
    })
};
