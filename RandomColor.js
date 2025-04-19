document.addEventListener("DOMContentLoaded" , () => {
    
    // Function to generate a random color & aapply it to background.
    const colorChange = () => {
        // Use math.random & convert to hexadecimal to display code of color.
        const randomNum = Math.floor(Math.random() * 1677215);
        console.log(randomNum);

        // Comvert the decimal into hexadecimal string & pad it with leading zeros if necessary.
        const randomCode = "#" + randomNum.toString(16);

        // Change the background color of the body to the random color code.
        document.body.style.backgroundColor = randomCode;

        document.getElementById("colorCode").innerText = randomCode;

        // Directly copy the color so that you can paste and use.
        navigator.clipboard.writeText(randomCode);
    }
    // Add event listener button so that the colorChange function runs when button is clicked.
    document.getElementById("btn").addEventListener("click" , colorChange);
    // Initial Call so that color displays when open the page.
    colorChange();

    
});

