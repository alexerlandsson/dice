$( document ).ready(function() {
	var previous;

	function randomizeNumber() {
		//Randimizes a number between 1 and 6
		var random = Math.floor((Math.random() * 6) + 1);
		return random;
	}

	function rollDice(side) {
		//Removes old class and adds the new
		var dice = $('#dice__cube');
		var currentClass = dice.attr('class');
		var newClass = 'show-' + side;

		dice.removeClass();
		dice.addClass(newClass);
	}

	function soundEffect() {
		var audio = $("#dice__audio")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();
	}

	$('#dice__btn').on('click ', function() {
		//Function triggered on dice dragstop
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
