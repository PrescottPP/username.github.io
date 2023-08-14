let myImage = document.querySelector("img");
myImage.onclick = function () {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === 'images/googleimage.jpeg') {
		myImage.setAttribute("src", "images/googlemore.jpeg");
		
	} else {
		myImage.setAttribute("src", "images/googleimage.jpeg");
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了a，" + storedName;
}


function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}

myButton.onclick = function () {
	setUserName();
}
