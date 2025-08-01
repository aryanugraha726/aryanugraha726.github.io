document.addEventListener('DOMContentLoaded', () => {
    // Get references to our HTML elements
    const mainImage = document.getElementById('main-image');
    const mainText = document.getElementById('main-text');
    const yesButton = document.getElementById('yes-button');
    const loveButton = document.getElementById('love-button');

    // Add what happens when you click the first button
    yesButton.addEventListener('click', () => {
        // Change the text content
        mainText.textContent = "YAY! You're the best girlfriend ever! ❤️";

        // Change the image (replace with another picture of you two!)
        mainImage.src = "https://via.placeholder.com/300/FFC0CB/000000?Text=I+Love+You!";

        // Optional: Hide buttons after clicking
        yesButton.style.display = 'none';
        loveButton.style.display = 'none';
    });

    // Add what happens when you click the second button
    loveButton.addEventListener('click', () => {
        // Change the text content to something else
        mainText.textContent = "I knew it! Sending you all my love today and always! 🥰";

        // Change the image
        mainImage.src = "https://via.placeholder.com/300/C7F2F0/000000?Text=My+Favorite+Person";

        // Optional: Hide buttons after clicking
        yesButton.style.display = 'none';
        loveButton.style.display = 'none';
    });
});