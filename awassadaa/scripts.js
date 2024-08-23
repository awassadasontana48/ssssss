document.getElementById('generateButton').addEventListener('click', function() {
    // Get the value from the input field
    const number = parseInt(document.getElementById('numberInput').value);
    
    // Check if the number is valid
    if (isNaN(number) || number < 1) {
        alert('Please enter a valid number greater than 0');
        return;
    }
    
    // Generate the multiplication table
    let resultHTML = `<h2> ${number}</h2>`;
    for (let i = 1; i <= 12; i++) {
        resultHTML += `<p>${number} x ${i} = ${number * i}</p>`;
    }
    
    // Display the result
    document.getElementById('result').innerHTML = resultHTML;
});