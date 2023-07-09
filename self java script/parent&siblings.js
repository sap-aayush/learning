// when we inpect the HTML things then when we click a particular element then it becomes as the $0....
// it maeks us allow that we can aces that by the console through $0

// also there is $1 ... i.e. when we move onn other element then the previous one gets this allocation

// these are the live nd will automatically update if changed

// these node list can be iterated by the for of loop

// children of same parents are sibling

// now the siblings are categorized into 2 parts

// the sibling which come after is the next or right sibling of the first one 

// and similary the first one is the previous or the left sibling of the next one

// the parent is available as the parentNode

let a = document.body.firstChild

console.log(a.parentNode)
console.log(a.parentElement)

// here the parent node and the parent element are different when the child is different

// when the required thing is the node only then the parentnode works
alert(document.documentElement.parentNode) // --> this is the document


// when the required thing is not the node then parentElement return the null
alert(document.documentElement.parentElement) // --> this is the mai HTML , which ain't any type of the ndoe so it returns null

// IF THERE IS ANY UNWANTED EMPTY SPACE THEN IT WILL OCCUR AS...