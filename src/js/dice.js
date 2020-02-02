/*
 * Dice (https://github.com/alexerlandsson/dice)
 * Copyright 2020 Alexander Erlandsson
 * Licensed under MIT
 */

$(document).ready(function() {
  var history = [];
  var dice = $('#dice__cube');
  var animationSpeed = dice.css('transition-duration').split(',')[0].replace(/[^-\d\.]/g, '') * 1000;

	function randomizeNumber(low, high) {
		var random = Math.floor((Math.random() * high) + low);
		return random;
	}

	function rollDice(side) {
		var currentClass = dice.attr('class').split(' ')[0];
		var newClass = 'show-' + side;

		dice.removeClass();

    if (currentClass == newClass) {
			dice.addClass(newClass + ' show-same');

      // Remove animation class after animation has finished
      setTimeout(function() {
        dice.removeClass('show-same');
      }, animationSpeed);
		} else {
      dice.addClass(newClass);
    }

    history.push(side);
	}

	function soundEffect() {
		var audio = $("#dice__audio")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();
	}

	$('#dice__btn').on('click ', function() {
		var number = randomizeNumber(1, 6);

		if (number == 1) { rollDice('front'); }
		else if (number == 2) { rollDice('back'); }
		else if (number == 3) { rollDice('right'); }
		else if (number == 4) { rollDice('left'); }
		else if (number == 5) { rollDice('top'); }
		else if (number == 6) { rollDice('bottom'); }

		soundEffect();
	});
});
