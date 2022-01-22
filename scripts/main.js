// kod na klikniencie
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/grzyb.jpg') {
      myImage.setAttribute ('src','images/grzyb2.jpg');
    } else {
      myImage.setAttribute ('src','images/grzyb.jpg');
    }
}
// nazwa