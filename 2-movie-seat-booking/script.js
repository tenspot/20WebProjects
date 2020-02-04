const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // Array of unoccupied seats
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value; // Note: '+' converts string to integer, same as parseInt(movieSelect.value)
populateUI();

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //console.log(selectedSeats);

    // Get an array of indexes of selected seats
    // const seatsIndex = [...selectedSeats].map(function(seat) {
    //     console.log(...selectedSeats,...seats, seat,[...seats].indexOf(seat)); 
    //     return [...seats].indexOf(seat);
    // });
    // Above can be shortened to...
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    // console.log(seatsIndex);    

    // Store data locally
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}

// Get data from local storagw
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) =>{
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
        
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', e => {
    //console.log(e.target);
    // if seat unoccupied...
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        //console.log(e.target);
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})

// Inital count and total set
updateSelectedCount();