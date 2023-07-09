let b = document.body

console.log("first child of b is : ", b.firstChild)
// frist child can be anyhting text comment or...


console.log("first Element child of b is : ", b.firstElementChild)
// this gives the elemnt only.. so element navigation

// so in all the codes which we saw earlier we have to just put the Element 
// in order to make the text and the comment no tto be incuured


const colorBgRed = () => {
    document.body.firstElementChild.style.background = "red"
}