In this project, you will create a motivational poster generator where users can view random posters or create their own custom posters. The project will focus on manipulating the DOM using JavaScript to update the poster content dynamically. You will also implement event handling to generate random posters and handle custom poster creation.

Requirements:

HTML Structure:

    Create an HTML file with a basic structure including a <head> and <body> section.
    Include a <header> element with a title for your project.
    Create a <section> element with a class of "poster" to display the generated or user-customized posters.
    Add an <img> element with an id of "poster-image" to display the poster image.
    Include a <h2> element with an id of "poster-title" to display the poster title.
    Add a <h3> element with an id of "poster-quote" to display the poster quote.
    Include a <button> element with an id of "randomize" to generate a random poster when clicked.
    Add an <input> element with an id of "poster-form-quote" to allow users to enter custom text for the poster quote.
    Include an <input> element with an id of "poster-form-author" to allow users to enter custom text for the poster author.
    Create a <button> element with an id of "submit" to generate a custom poster when clicked.

CSS Styling:

    Define appropriate styles for the header, poster section, image, title, quote, buttons, and input elements.
    Make sure the poster section is visually distinct and has enough space to display the posters.
    Use CSS to center align the buttons and inputs within their respective containers.
    Apply styles to match the visual layout of the hang-in-there-boilerplate repository.

Random Poster Generation:

    Define an array of predefined poster objects with properties for the image source, title, and quote.
    Implement JavaScript logic to select a random poster object from the array when the "Randomize" button is clicked.
    Update the poster image, title, and quote in the DOM with the values from the selected poster object.

Custom Poster Creation:

    Implement JavaScript logic to create a custom poster when the "Submit" button is clicked.
    Retrieve the text entered by the user in the "poster-form-quote" and "poster-form-author" input elements.
    Update the poster quote and author in the DOM with the entered text.