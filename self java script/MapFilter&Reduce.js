// map simply performs any operations on the elements of the array and then returns it

// map creates a new array not modify the intial one

const a = [1 ,-26 ,3 , 5 , 45 ,67]

let arr = a.map ((value) =>{
    return value*value
})

// filter returns only those values which satisfy the condition

let brr = a.filter((value) =>{
    return value<10
})

// reduce simply reduces an array to a simple vlaue by repeatedly performing an operations on the elemnts

let crr = [1,2,3, 5, 6,1]
const reduce_func = (h1,h2)=>{
    return h1+h2
}
let drr = crr.reduce(reduce_func)
console.log(drr)