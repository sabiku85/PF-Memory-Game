const picsArray = ['images/bananas.png', 'images/birdy.png', 'images/coconut.png', 'images/eggplant.png', 'images/elephant.png', 'images/mushroom.png', 'images/olives.png', 'images/pineapples.png', 'images/bananas.png', 'images/birdy.png', 'images/coconut.png', 'images/eggplant.png', 'images/elephant.png', 'images/mushroom.png', 'images/olives.png', 'images/pineapples.png'];


function showCards() {
  // console.log('ok');
  $('.welcome').addClass('hidden');
  $('.card').removeAttr('hidden');
}

function rotateCardAndShowPic() {
  // console.log('ok');
  $(this).toggleClass('rotate');
}

$('#start').on('click', showCards);
$('.card').on('click', rotateCardAndShowPic);