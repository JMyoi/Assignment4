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
      image: 'https://media.istockphoto.com/id/1124532572/vector/big-smile-emoticon-with-thumbs-up.jpg?s=612x612&w=0&k=20&c=9DJwHpzMgBAkAYFAPVIvkjNKNN8tHZPlVFy5-d1uLjc=',
      title: 'Smile',
      quote: 'If You are sad just smile',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ckSd1NpjK5Hsb_zx7Pl9Q6fKwxufBU3OOA&usqp=CAU',
      title: 'be happy',
      quote: 'why be sad if you can be happy',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxOYka3wsOY8duZsCOM6HhxD4Gkxlxh0Pfw&usqp=CAU',
      title: 'never',
      quote: 'don\'t give up',
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
  