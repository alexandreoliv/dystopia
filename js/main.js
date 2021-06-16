const game = new Game();

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

	if (keyCode === 70) {
		// go directly to the final stage
		game.level = 4; // pretend it's the final second of level 4, so that all adjustments are done for the final stage
		game.time = 0;
		game.finalStage();
	}

	if (keyCode === 17 && game.level === 5 && game.lives > 0) { // Ctrl / Strg key
		// player is shooting
		game.player.playerShooting();
	}

	// if (keyCode === 83) { // s
	// 	game.song.play();	
	// }
}