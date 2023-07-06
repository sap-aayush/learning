//  .toString --> this changes the array to the string

let a = [1, 2, 3, 4]

let b = a.toString()  // b is now a string
console.log(b)

//  .join  --> joins the elements of the array by the jointer gave

let c = a.join("_") // all elements join by the  _
console.log(c)

// pop and push are same the SQL.... read in c/c++

a.pop()  // removes the last element

a.push(69)  // enters an element at the last

let r = a.shift()  // removes the forst elelmtn and return it


// similarly the unshift add the eleemtns at the beginning 
let q = a.unshift(43)


// delete simply delete the arrray elements
delete a[2] //...

// delete does not change the length of the array just element deletes

// two arrays can be concatenated by the concat

// let array = arr1.concat(arr2)

// or like many can be concat too

// let newArray = arr1.cocat(arr2, arr 3)


// sorting the array
let num = [551, 23, 98 , 1 , 0 , 75 , -3, -8]
num.sort()
// this sorting is done as per the alphabetical order i.e. the first digit of the number and then further 
console.log(num)

// in order to make it ascending or the descending we can use compare function

let compare = (a,b) =>{
    return a-b      // if the descending then the b-a will be written
}

num.sort(compare)
console.log(num)


// num.reverse() -->reverse the array

// splice is used to add the elements 
// it has 4 arguments viz; the index from where to add then the number of items to replace and then the items

num.splice(2,3, 1022, 1023, 1024)