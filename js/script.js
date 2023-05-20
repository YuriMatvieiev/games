// Get all elements with the class "page__stars"
const stars = document.querySelectorAll('.page__stars');

// Loop through each element
stars.forEach(star => {
    // Get the value of the "data-stars" attribute
    const dataStars = star.dataset.stars;

    // Convert the value to a number
    const numStars = parseInt(dataStars);

    // Loop through the child elements (li) and update the class based on the number of stars
    star.querySelectorAll('li').forEach((li, index) => {
        if (index < numStars) {
            li.classList.add('icon-star');
            li.classList.remove('icon-star-empty');
        } else {
            li.classList.add('icon-star-empty');
            li.classList.remove('icon-star');
        }
    });
});

// Hide the iframe on page load
const iframeContainer = document.querySelector('.page__iframe');
iframeContainer.classList.add('hidden');

// Show the iframe in fullscreen when the button is clicked
const playButton = document.querySelector('.page__button');
playButton.addEventListener('click', () => {
    iframeContainer.classList.remove('hidden');
    iframeContainer.classList.add('fullscreen');
});

// Hide the iframe when the lobby button is clicked
const lobbyButton = document.querySelector('#lobbyButtonWrapper-hit-area');
lobbyButton.addEventListener('click', () => {
    iframeContainer.classList.add('hidden');
    iframeContainer.classList.remove('fullscreen');
});