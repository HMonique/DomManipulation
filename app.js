const mainEl = document.querySelector('main');

console.log(mainEl);

// Setting the Back color using our var method to grab an item from the root
 mainEl.style.backgroundColor = "var(--maine-bg)";


// Creating an HTML Elemet
 const h1 = document.createElement("H1")

// Attaching text to our h1 we created 
 h1.innerHTML = "DOM Manipulation";

 // Appending my H1 O created to my main container
 mainEl.appendChild(h1);

// Add a class name to an html element 
mainEl.classList.add("flex-ctr");

const topmenuEl = document.querySelector("#top-menu");

// set the height to 100%

topmenuEl.style.height = "100%"