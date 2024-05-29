const mainEl = document.querySelector('main');

console.log(mainEl);

// Setting the Back color using our var method to grab an item from the root
 mainEl.style.backgroundColor = "var(--main-bg)";


// Creating an HTML Element
 const h1 = document.createElement("H1")

// Attaching text to our h1 we created 
 h1.innerHTML = "DOM Manipulation";

 // Appending my H1 I created to my main container
 mainEl.appendChild(h1);

// Add a class name to an html element 
mainEl.classList.add("flex-ctr");

const topmenuEl = document.querySelector("#top-menu");

// set the height to 100%
topmenuEl.style.height = "100%";

topmenuEl.style.backgroundColor = "var(--top-menu-bg)";

topmenuEl.classList.add("flex-around");

const menuLinks = [
    {text: "about", href: "/about"},
    {text: "catalog", href: "/catalog"},
    {text: "orders", href: "/orders"},
    {text: "account", href: "/account"},
];

menuLinks.forEach((link) => {
    // Create Anchor Element
    const aElement = document.createElement("a");
    // added href
    aElement.href = link.href
    // added text content
    aElement.textContent = link.text;
    // appended to topmenu element
    topmenuEl.appendChild(aElement);
});

