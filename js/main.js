const game = new Game();
let isSound = false;

function preload() {
	game.preload();
}

function setup() {
	createCanvas(1216, 768);
	game.setup();
}

function draw() {
	game.draw();
}

function keyPressed() {
	if (keyCode === 32) {
		// jump
		game.player.jump();
	}

	if (keyCode === 70) { // f key
		// go directly to the final stage

		if (game.level < 5) { // prevents player from pressing the key twice
			game.level = 4; // pretend it's the final second of level 4, so that all adjustments are done for the final stage
			game.time = 0;
			game.finalStage();
		}
	}

	if (keyCode === 17) {
		if (game.level === 5 && game.lives > 0 && game.boss.health > 0) // Ctrl / Strg key
			game.player.playerShooting(); // player is shooting
	}

	if (keyCode === 83) { // s key
		//this.music.play();
		console.log(isSound)
		if (isSound) {
			game.backgroundMusic.pause();
			isSound = false;
		}
		else {
			game.backgroundMusic.play();
			isSound = true;
		}
	}
}