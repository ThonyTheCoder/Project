document.getElementById('btn_button').addEventListener('click', () => {
    // Get the input values
    const billAmount = parseFloat(document.getElementById('Price').value);
    const serviceQuality = document.getElementById('sel_tip').value;
    const numPeople = parseInt(document.getElementById('numPeople').value);

    // Check for invalid inputs
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }
    if (isNaN(numPeople) || numPeople <= 0) {
        alert("Please enter a valid number of people.");
        return;
    }
    if (!serviceQuality) {
        alert("Please select a service quality.");
        return;
    }

    // Set tip percentage based on service quality
    let tipPercentage;
    switch (serviceQuality) {
        case "Outstanding":
            tipPercentage = 30;
            break;
        case "Good":
            tipPercentage = 20;
            break;
        case "It was ok":
            tipPercentage = 15;
            break;
        case "Bad":
            tipPercentage = 10;
            break;
        case "Terrible":
            tipPercentage = 0;
            break;
        default:
            tipPercentage = 0;
    }

    // Calculate the total tip and tip per person
    const totalTip = (billAmount * tipPercentage) / 100;
    const tipPerPerson = totalTip / numPeople;

    // Display the result
    alert(`Tip Amount per Person: $${tipPerPerson.toFixed(2)}`);
});
