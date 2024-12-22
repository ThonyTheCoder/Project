document.addEventListener("DOMContentLoaded", function() {
    function updatePrice(laptopDiv, basePrice) {
        // Pricing based on CPU, RAM, and Display
        const cpuPrice = {
            "i5-1335U": 250,
            "i5-1340P": 280,
            "i7-1355U": 380,
            "i7-1360P": 400,
            "i5-13500H": 350,
            "i7-13700H": 450,
            "r5-7540U": 350,
            "r7-7840U": 450,
            "r5-7640HS": 250,
            "r7-7840HS": 350,
            "M2-8Core": 400,
            "M2-10Core": 500,
            "Ryzen9-7940HS": 200,
            "Ryzen7-7840HS":150,
            "Ryzen5-7640HS":350,
            "i7-155H":250,
            "i9-185H":430,
            "M1": 300
        };

        const ramPrice = {
            "16GB": 60,
            "32GB": 120,
            "24GB": 90,
            "8GB": 30
        };

        const displayPrice = {
            "2240x1400": 100,
            "2560x1600": 150,
            "2880x1800-90Hz": 180,
            "2880x1800-120Hz": 200,
            "2560x1664": 140,
            "3072x1920-NonTouch": 220,
            "3072x1920-Touch": 250,
            "1920x1200": 120,
            "1920x1200-Touch": 160,
            "2880x1800": 250
        };

        // Get selected options for CPU, RAM, and Display
        const cpu = laptopDiv.querySelector('select[name="CPU"]').value;
        const ram = laptopDiv.querySelector('select[name="RAM"]').value;
        const display = laptopDiv.querySelector('select[name="Display"]').value;

        // Calculate the updated price based on selected options
        const updatedPrice = basePrice + (cpuPrice[cpu] || 0) + (ramPrice[ram] || 0) + (displayPrice[display] || 0);

        // Get the price div to update the display
        const priceDiv = laptopDiv.querySelector('.laptop-prices');
        const basePriceElement = priceDiv.querySelector('p');

        // Check if the updated price paragraph already exists
        let updatedPriceElement = priceDiv.querySelector('.updated-price');

        if (!updatedPriceElement) {
            // If it doesn't exist, create it
            updatedPriceElement = document.createElement('p');
            updatedPriceElement.classList.add('updated-price'); // Add a class to identify the updated price element
            priceDiv.appendChild(updatedPriceElement);
        }

        // Update the text content of the updated price paragraph
        updatedPriceElement.textContent = `$${updatedPrice}`;

        // Cross out the base price
        basePriceElement.style.textDecoration = "line-through";
    }

    // Event listener for the "Save" button to trigger the price update
    const saveButtons = document.querySelectorAll('.btnSave');
    saveButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission

            const laptopDiv = button.closest('.display-information'); // Find the closest laptop div
            const basePriceText = laptopDiv.querySelector('.laptop-prices p').textContent; // Get the base price text
            const basePrice = parseInt(basePriceText.replace('$', '').replace(',', ''), 10); // Convert to number

            updatePrice(laptopDiv, basePrice); // Call updatePrice to calculate and update the price
        });
    });
});
