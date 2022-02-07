let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog1.jpg') {
      myImage.setAttribute('src','images/dog2.jpg');
    } else {
      myImage.setAttribute('src','images/dog1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName () {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Dogs love you, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dogs love you, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}