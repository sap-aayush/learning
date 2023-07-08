// take input gae from the prompt and alert if he cna drive

let age = prompt("enter your age")
age = Number.parseInt(age)

if (age>18) {
    let will = confirm("do you want to drive")
    if(will){
        alert("then go drive")
    }
    else{
        alert("ohk fine sit at home")
    }
}
else if(age>0){
    alert("you are too young to drive")
}
else if (age<0) {
    console.error("invalid age")
}

// write a program to redirect to google.com if  num > 4 entered
// also change the background to yellow if less than 4

let num = prompt("enter the number")
num = Number.parseInt(num)

if (num>4) {
    location.href = "https://instagram.com"
}else{
    document.body.style.background = "yellow"
}