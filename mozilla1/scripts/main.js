document.querySelector('h1').onclick=function(){
    alert('Ouch! Stop poking me!');
}
var myImage = document.querySelector('img');
myImage.onclick=function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc==='images/harden.jpg'){
        myImage.setAttribute('src','images/harden2.jpg');
    }else{
        myImage.setAttribute('src','images/harden.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setPosterName(){
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Welcome '+myName;
}
if(!localStorage.getItem('name')){
    setPosterName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome '+storedName;
}
myButton.onclick = function(){
    setPosterName();
}