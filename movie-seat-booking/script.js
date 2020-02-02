const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)'); // Array of unoccupied seats
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value; // Note: '+' converts string to integer, same as parseInt(movieSelect.value)

// console.log(ticketPrice);

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //console.log(selectedSeats);
    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
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