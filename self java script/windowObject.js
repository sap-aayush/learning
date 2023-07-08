// window is a global object so we can write window in before of all the things that we come over

// for eg
window.console.log("hiii")

// DOM is document object model... i.e. it makes the document object of the html page as a JS representation

console.log(document)  // prints th whole html as JS

console.log(document.body)  // prints th whole body as JS

document.body.style.background = "yellow" // we change the styles too


// BOM is the browser object model... i.e. redirects the things to diff browser

// eg.
location.href = "https://codewithharry.com"