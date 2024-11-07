const input = document.querySelector('#input')
const output = document.querySelector('#output')

input.addEventListener('input', () => {
    let val = input.value;
    let out = val*2.2;

    output.innerHTML = out.toFixed(2);
})




// Another Method ............................................


// const input = document.querySelector('#input');
// const output = document.querySelector('#output');

  //Add an event listener to detect input changes  // comment.........
// input.addEventListener('input', () => {
//     let val = parseFloat(input.value); // Convert input value to a number
//     if (!isNaN(val)) { // Check if the input is a number
//         let out = val * 2.2; // Conversion: 1 kg = 2.2 pounds
//         output.innerHTML = out.toFixed(2); // Display result with two decimal places
//     } else {
//         output.innerHTML = "Invalid input"; // Error message for non-numeric input
//     }
// });
