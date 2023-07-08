// create a snake water gun ...where you ask to enter the S, W or G . then the computer should be able to randomly generate S,W,G and declare win or loss using alert

// the snake get hit by gun and gun sinks in water and the snake drinks water

let a = prompt("enter 1 for snake, 2 for gun and 3 for water")
a = Number.parseInt(a)

let b  = Math.random() * 3
if (a!=b) {
    if ((a==1 && b==2) || (a==2 && b==3) || (a==3 && b==1)) {
        alert("you lost")
    } else if((b==1 && a==2) || (b==2 && a==3) || (b==3 && a==1)){
        alert("you won")
    }
}

while(a==b){
    a = prompt("enter 1 for snake, 2 for gun and 3 for water")
    a = Number.parseInt(a)

    if (a!=b) {
        if ((a==1 && b==2) || (a==2 && b==3) || (a==3 && b==1)) {
            alert("you lost")
        } else if((b==1 && a==2) || (b==2 && a==3) || (b==3 && a==1)){
            alert("you won")
        }
    }
}