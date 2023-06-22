// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
let randbutton = document.getElementById('randomize');
let submitButton = document.getElementById('submit');
let imgEl = document.getElementById('poster-image');
let posterTitle = document.getElementById('poster-title');
let posterQuote = document.getElementById('poster-quote');
let quoteInput = document.getElementById('poster-form-quote').value;
let titleInput = document.getElementById('poster-form-title').value;
console.log(typeof quoteInput);
// Array of predefined poster objects
const posters = [
    {
      image: 'https://www.spieltimes.com/wp-content/uploads/2022/09/Narutos-story-of-Pain-is-an-ideological-battle-of-ends-and-means-2-1.jpg',
      title: 'Season 8, Episode 11: "Pain to the World"',
      quote: 'If You Don\'t Share Someone\'s Pain, You Can Never Understand Them, Feel Pain, Contemplate Pain, Accept Pain, Know Pain.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU',
      title: 'Believe',
      quote: 'Believe you can, and you\'re halfway there.',
    },
    {
      image: 'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      title: 'Time',
      quote: 'Don\'t watch the clock; do what it does. Keep going.',
    },
    // Add more poster objects as needed
  ];
  
  // Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
  randbutton.addEventListener("click", generateRandomPoster);
  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked
  submitButton.addEventListener("click",generateCustomPoster);

  // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    let randomIndex = Math.floor(Math.random() * posters.length);
    // TODO: Retrieve the random poster object from the posters array
    // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(posters[randomIndex].image, posters[randomIndex].title, posters[randomIndex].quote);
  }
  
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();
    // TODO: Retrieve the entered quote and author from the input fields
    let quoteInput = document.getElementById('poster-form-quote').value;
    let titleInput = document.getElementById('poster-form-title').value;
    // TODO: Create a custom poster object with the entered values
    let customPoster = {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU',
        title: titleInput,
        quote: quoteInput
    }
    updatePoster(customPoster.image, titleInput, quoteInput);
    // TODO: Call the function to update the DOM with the values from the custom poster object
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    imgEl.setAttribute("src", imageUrl);
    posterTitle.textContent = title;
    posterQuote.textContent = quote;
}
  