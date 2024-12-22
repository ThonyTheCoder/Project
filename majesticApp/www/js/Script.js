// contact us java starts here
(function(){
   emailjs.init({
     publicKey: "Obbmk7Wvy22ITrUT4",
   });
})();



function sendMail() {
    // Get sender information from form fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if any of the required fields are empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill out all required fields (Name, Email, Message).");
        return; // Stop execution if fields are empty
    }

    // Prepare email parameters including sender information
    let params = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send("service_pxtn9pa", "template_u41sns6", params)
        .then(function(response) {
            console.log("Email sent:", response);
            alert("Message sent successfully!");
        })
       
}
// contact us java ends here



// Home Page Script Starts Here 
$(document).ready(function () {
    // Toggle the navbar menu on smaller screens
    $('#menu-toggle').click(function () {
        $('.navbar').toggleClass('active');
    });

    // Change the text when hovering over the welcome section
    $('#Welcome-Main-Section').hover(
        function () {
            $('#Welcome-Text').text('Explore the Latest in Technology!');
        },
        function () {
            $('#Welcome-Text').text('Welcome to Majestic Tech Solutions');
        }
    );

    // Toggle footer visibility
    $('#footer-toggle').click(function () {
        $('.footer-distributed').toggle();
    });

    // Slide down effect for content on page load
    $('#Content-Pages').hide().slideDown(1000);

    // Change footer background on mouseover
    $('.footer-distributed').hover(
        function () {
            $(this).css('background-color', '#333');
        },
        function () {
            $(this).css('background-color', '#222');
        }
    );
});
// Home Page Script Ends Starts


