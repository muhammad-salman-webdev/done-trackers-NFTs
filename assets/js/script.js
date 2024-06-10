// Function to create a starry background view
function createStarsView() {
  // Create a div element to hold the stars
  const starsBG = document.createElement("div");
  // Add a class for styling the background
  starsBG.classList.add("stars_BG");

  // Define the number of stars to be created
  const starCount = 500;
  // Get the width and height of the viewport
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Loop to create individual stars
  for (let i = 0; i < starCount; i++) {
    // Create a div element for each star
    const star = document.createElement("div");
    // Add a class for styling the star
    star.classList.add("star");

    // Randomly set the size of the star (between 0 and 2 pixels)
    const size = Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Randomly position the star within the viewport
    star.style.top = `${Math.random() * height}px`;
    star.style.left = `${Math.random() * width}px`;

    // Append the star to the background div
    starsBG.appendChild(star);
  }

  // Append the background div to the body of the document
  document.body.appendChild(starsBG);
}

// Call the function to create the starry background view
createStarsView();
