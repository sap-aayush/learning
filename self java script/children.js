// the tags and the divs and so on which come under the other and so on... self under stood....
// the parents the children and then thir children and siblings so on....


// now for the acessing the elements there are various methods

// one thing to be noted is that th empty spaces are also included in the children and the siblings

console.log(document.body.firstChild)  // gives the first child
console.log(document.body.lastChildChild)  // gives the last child

// childNodes --> this takes all the child nodes

//the following are always true
element.childNodes[0] === element.firstChild
element.childNodes[element.childNodes.length-1] === element.lastChild

// minus 1 as the indexing from 0 starts

// ussuallyt it seems that they are the array they ain't ... they are the nodes list


// to convert to array --> Array.from()