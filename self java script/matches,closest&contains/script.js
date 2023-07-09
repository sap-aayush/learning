console.log("hii")

let id1 = document.getElementById("id1")
console.log(id1)

console.log(id1.matches(".class")) // this is false
console.log(id1.matches(".box")) // this is true

// element.matches(css) checks if the element matches the given css selector


console.log(sp1.closest(".box")) 
// element.closest(css)   --> this search for the closest element if not then go its parent again if not then its parent

console.log(id1.contains(sp1))  // true

// thus element1.contain(element2) returns true when the element2 is inside the element1 else false