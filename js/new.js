const picsArray = ['images/bananas.png', 'images/birdy.png', 'images/coconut.png', 'images/eggplant.png', 'images/elephant.png', 'images/mushroom.png', 'images/olives.png', 'images/pineapples.png', 'images/bananas.png', 'images/birdy.png', 'images/coconut.png', 'images/eggplant.png', 'images/elephant.png', 'images/mushroom.png', 'images/olives.png', 'images/pineapples.png'];

const cardsArray = ['#card1', '#card2', '#card3', '#card4', '#card5', '#card6', '#card7', '#card8', '#card9', '#card10', '#card11', '#card12', '#card13', '#card14', '#card15', '#card16'];

function shuffleAndAssign() {
  picsArray.sort(function() {
    return 0.5 - Math.random()
  });
  // console.log(picsArray);
  for (let i = 0; i < picsArray.length - 1; i++) {
    let pic = picsArray[i];
    $(cardsArray).each(function(j) {
      $(this).css({
        "background": "pic no-repeat center /cover"
      });
    });

    // console.log(pic);
    // $('.cards').each(
    //   $('.card').css({
    //     "background": "pic no-repeat center /cover"
    //   })
    // );
    // for (let j = 0; j < cardsArray.length - 1; j++) {
    //   console.log(cardsArray);
    //   console.log(cardsArray[j]);

    //   $(cardsArray[j]).each(
    //     $(cardsArray[j]).css({
    //       "background": "pic no-repeat center /cover"
    //     })
    //   );
    // }
  }
}

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
$('#start').on('click', shuffleAndAssign);
$('.document').on('click', '.card', rotateCardAndShowPic);