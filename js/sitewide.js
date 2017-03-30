var timeoutID;

function delayedHide() {
	timeoutID = window.setTimeout(hideObject, 1000);
}

function hideObject() {
	$("h1").addClass("hidden");
	$("p").addClass("hidden");
}

function fadeOut() {
	$("h1").addClass("fade-out");
	$("p").addClass("fade-out");
}

$('a').click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 

    setTimeout(function(){
         window.location = goTo;
    },1000);       
});

/*
* Basic Count Up from Date and Time
* Author: @mrwigster / trulycode.com
*/

window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('mar,29,2017,12:49:06'); // ****** Change this line!
}
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}

var audio = document.getElementById('init');

function redirectHandler() {
  window.location = 'landing.html';
}

audio.addEventListener('ended', redirectHandler, false);