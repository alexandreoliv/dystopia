const game = new Game();

function preload() {
	background = loadImage('assets/img/landing-background.png');
	game.preload();
}

function setup() {
	createCanvas(1216, 768);
	pause = 0;
	start = 0;
	game.setup();
}

function draw() {
	if (start === 0)
		image(background, 0, 0, width, height);

	if (start === 1) {
		if (isMusic)
			game.backgroundMusic.play();
		game.draw();
	}

	if (start === 2) {
		game.reset();
		image(background, 0, 0, width, height);
		start = 0;
	}
}

function keyPressed() {
	if (keyCode === ENTER) { // enter key
		start = 1;
		isMusic = true;
	}

	if (keyCode === 82) { // r key
		start = 2;
		isMusic = false;
	}
	
	if (keyCode === 80) { // p key
		if (pause === 0) {
			pause = 1;
			game.pause();
			game.backgroundMusic.pause();
			isMusic = false;
		}
		else {
			pause = 0;
			game.pause();
			game.backgroundMusic.play();
			isMusic = true;
		}
	}

	if (keyCode === 32) { // space bar
		if (!pause) // if game is not paused
			game.player.jump();
	}

	if (keyCode === 70) { // f key
		if (!pause) { // if game is not paused
			// go directly to the final stage
			if (game.level < 5) { // prevents player from pressing the key twice
				game.level = 4; // pretend it's the final second of level 4, so that all adjustments are done for the final stage
				game.time = 0;
				game.finalStage();
			}
		}
	}

	if (keyCode === 17) { // Ctrl / Strg key
		if (!pause) { // if game is not paused
			if (game.level === 5 && game.player.lives > 0 && game.boss.health > 0)
				game.player.playerShooting(); // player is shooting
		}
	}

	if (keyCode === 83) { // s key
		if (!pause) { // if game is not paused
			//console.log("Was there sound? " + isMusic)
			if (isMusic && start === 1) {
				game.backgroundMusic.pause();
				isMusic = false;
			}
			else if (!isMusic && start === 1) {
				game.backgroundMusic.play();
				isMusic = true;
			}
			//console.log("Is there sound now? " + isMusic)
		}
	}
}