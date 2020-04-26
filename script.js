const submit = document.getElementById('submit');
const numberInput = document.getElementById('number');
const displayFact = document.getElementById('display-fact')


//Event listener 
submit.addEventListener('click', getFact)

function getFact() {
    let number = numberInput.value
    fetch(`http://numbersapi.com/${number}`)
    .then(response => response.text())
    .then (data => {
        displayFact.innerHTML = data;
    })


}