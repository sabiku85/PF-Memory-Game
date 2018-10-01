const picsArray = ['images/bananas.png', 'images/birdy.png', 'images/coconut.png', 'images/eggplant.png', 'images/elephant.png', 'images/mushroom.png', 'images/olives.png', 'images/pineapples.png', 'images/bananas.png', 'images/birdy.png', 'images/coconut.png', 'images/eggplant.png', 'images/elephant.png', 'images/mushroom.png', 'images/olives.png', 'images/pineapples.png'];

const cardsArray = ['#card1', '#card2', '#card3', '#card4', '#card5', '#card6', '#card7', '#card8', '#card9', '#card10', '#card11', '#card12', '#card13', '#card14', '#card15', '#card16'];

function shuffleAndAssign() {
  picsArray.sort(function() {
    return 0.5 - Math.random()
  });

  let wtf = $('.card').css({
    'backgroundImage': 'images/bananas.png'
  });
  console.log(wtf);

  // console.log(picsArray);

  // for (let i = 0; i < cardsArray.length; i++) {
  //   let cardId = cardsArray[i];
  //   console.log(cardId);
  //   // let wtf = $('.card').css({
  //   'backgroundImage': 'pic'
  // });
  // console.log(wtf);

}

//   for (let j = 0; j < cardsArray.length - 1; j++) {
//     let cardId = cardsArray[j];
//     console.log(cardId);
//   }
// }
// $('.card').each(function() {
//   console.log(this);
//   let pic = "";
//   for (let i = 0; i < picsArray.length; i++) {
//     pic = picsArray[i];
//     console.log(pic);
//     $(this).css({
//       'backgroundImage': 'pic'
//     });
//   }
// });

// let wtf = $('.cards').each(function(j) {
//   $('.card').css({
//     "background-image": "pic"
//   });
// });
// console.log(wtf);


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
$('.card').on('click', rotateCardAndShowPic);