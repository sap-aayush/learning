const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}



// change the card title to the red

let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red"

// or we can get the element by the ID ... but since ID unique this return only 1 element

let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "red"

// now if we wan to apply different styles on different titles
// then we can access all of them by the css query selector


// in place of the querySelectorAll ... All is not used then it guves the first element having that class name

let ctitle = document.querySelectorAll(".card-title")  // here . or # need to used as per class name or Id name
ctitle.style.color[0] = "red"
ctitle.style.color[1] = "blue"
ctitle.style.color[2] = "green"

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "white"

// this query selector can be applied further on the elements 
// no only on the main document

console.log(getElementsByTagname("a"))  // all the anchor tags
// if we want only anchors of the cards

console.log(document.querySelector(".card").getElementsByTagname("a"))  

console.log(document.getElementByName("search"))