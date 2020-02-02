/*
 * Dice (https://github.com/alexerlandsson/dice)
 * Copyright 2020 Alexander Erlandsson
 * Licensed under MIT
 */

$(document).ready(function() {
	var history = [];

	function randomizeNumber() {
		var random = Math.floor((Math.random() * 6) + 1);
		return random;
	}

	function rollDice(side) {
		var dice = $('#dice__cube');
		var currentClass = dice.attr('class').split(' ')[0];
		var newClass = 'show-' + side;

		dice.removeClass();

    if (currentClass == newClass) {
			dice.addClass(newClass + ' show-same');
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
		var number = randomizeNumber();

		if (number == 1) { rollDice('front'); }
		else if (number == 2) { rollDice('back'); }
		else if (number == 3) { rollDice('right'); }
		else if (number == 4) { rollDice('left'); }
		else if (number == 5) { rollDice('top'); }
		else if (number == 6) { rollDice('bottom'); }

		soundEffect();
	});
});
