const picsArray = ['images/bananas.png', 'images/birdy.png', 'images/coconut.png', 'images/eggplant.png', 'images/elephant.png', 'images/mushroom.png', 'images/olives.png', 'images/pineapples.png', 'images/bananas.png', 'images/birdy.png', 'images/coconut.png', 'images/eggplant.png', 'images/elephant.png', 'images/mushroom.png', 'images/olives.png', 'images/pineapples.png'];

function shuffle() {
  picsArray.sort(function() {
    return 0.5 - Math.random()
  });
}

function showCards() {
  // console.log('ok');
  $('.welcome').addClass('hidden');
  $('.card').removeAttr('hidden');
}

function rotateCard() {
  // console.log('ok');
  $(this).toggleClass('rotate');
}

$('#start').on('click', showCards);
$('#start').on('click', shuffle(picsArray));
$('.card').on('click', rotateCard);