$(document).ready(function() {

var reset = $('.reset');
var start = $('.start');
var moon = $('#moon');
var star = $('.star');
var rocket = $('#rocket');
var rocket2 = $('#rocket2');
var creditslink = $('.credits');
var creditsdiv = $('.creditsdiv');


reset.hide();
start.on('click', launchRocket);
reset.on('click', resetAnimation);
creditslink.on('click', showCredits);

function showCredits () {
creditsdiv.slideToggle();
}

function resetAnimation () {
  reset.hide();
  start.show();
  moon.removeClass('pulse');
  star.removeClass('pulse');
  rocket.removeClass('launch');
  rocket2.removeClass('launch')
  rocket.animate({
       bottom: 0,
       left: 0
     });
  rocket2.animate({
        bottom: 0,
        right: 0
        });
    };

 function launchRocket() {
  moon.addClass('pulse');
  setTimeout(function () {
 star.addClass('pulse')
 }, 1000);

setTimeout(function () {
  rocket.addClass('launch')
  .animate({
     bottom: 900,
     left: 200
   }, 5000)
 }, 2000);

 setTimeout(function () {
   rocket2.addClass('launch2')
   .animate({
      bottom: 900,
      right: 400
    }, 4000)
  }, 6000);

setTimeout(function () {
start.hide();
 reset.show();
 }, 9000);
 };
 });
