// there are 7 tyoes of the data types
// nn bb ss u
// null number bigint bool string symbol undefined

let a = null;
let b = 345;
let c = BigInt("5128682654")+BigInt("662")
let d = true;
let e ="sap"
let f = Symbol("i am a symbol")
let g

console.log(a,b,c,d,e,f,g)
console.log(typeof c)

// primitive data types
const item = {
    "sap" : true,
    "alpha" : false,
    "beta" : 45,
    "alex" : undefined
}

console.log(item["beta"])  // rem the syntax inside the () bracket write the object name and then the item naem in the vertical bracket []