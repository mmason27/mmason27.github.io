let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/selfie1.jpg') {
      myImage.setAttribute('src','images/sadie1.jpg');
    } else {
      myImage.setAttribute('src','images/selfie1.jpg');
    }
}
