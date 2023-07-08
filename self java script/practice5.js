// create an array and take the input from the user and enter it to the array

let arr = [1,2,5, 87]

let a = prompt("enter the number")

a = Number.parseInt(a)  // taking it as the number

arr.push(a)

// keep adding the numbers until 0 is added

while(a!=0){
    a = prompt("enter again")
    a = Number.parseInt(a)
    arr.push(a)
}

// now filter the number which are div by 10

let brr = arr.filter((value)=>{
    if(value%10==0){
        return value
    }
})

// create an array of the square of the givem numbers

let crr = a.map ((value) =>{
    return value*value
})

// use reduce to calculate factorial from the array having n natural no.s

let n =prompt("enter the number you the factorial of")
n = Number.parseInt(n)

let drr = []
for (let i = 0; i < n; i++) {
    drr[i] = i
}

let reduce_factorial=((a,b)=>{
    return a*b
})