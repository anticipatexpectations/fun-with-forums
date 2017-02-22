const nameArr = [
'Sumerian Finger Painting Forum',
'Cambodian Puzzle Aficionado Forum',
'Mongolian Cheese Cake Factory Workers Forum',
'Croatian Cured Meat Forum',
'Competitive Finnish Tap-Dancing Forum',
'Ecuadorian Underwater Basket Weaving Forum',
'Slovakian Daguerreotype Sellers forum',
'Vietnamese Thumb Wrestling Tactic Forum',
'Ainu Moss Farming Forum',
'Pashtun Didgeridoo Fighting Club Forum',
'Swiss Exorcists For Hire Forum',
'Cosmic Elder Ones Hospice Forum'
];
$( document ).ready(function() {
  $("#forumName").html(nameArr[Math.floor( Math.random() * nameArr.length)])
});
// document.addEventListener("DOMContentLoaded", function(event) {
//   // Random name generator
//   let randomName = function() {
//     document.querySelector('#forumName').textContent = `"${nameArr[Math.floor(Math.random() * nameArr.length)]}"`;
//   };
//   randomName();
// });
