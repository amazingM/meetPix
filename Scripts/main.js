let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/Pixel-main.JPG') {
      myImage.setAttribute('src','Images/Pixel-main-2.jpeg');
    } else {
      myImage.setAttribute('src','Images/Pixel-main.JPG');
    }
}
