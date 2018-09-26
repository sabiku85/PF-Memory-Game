function showCards() {
  console.log('ok');
  $('.welcome').addClass('hidden');
  $('.card').removeAttr('hidden');
}

$('#start').on('click', showCards);