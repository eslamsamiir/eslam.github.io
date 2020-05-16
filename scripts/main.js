let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/restaurant-bar-coffee-shop-royalty-free-thumbnail.jpg') {
      myImage.setAttribute ('src','images/233.jpg');
    } else {
      myImage.setAttribute ('src','images/restaurant-bar-coffee-shop-royalty-free-thumbnail.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  myHeading.textContent = 'Hello, ';
  setUserName();
}
