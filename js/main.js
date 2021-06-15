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
	// if (keyCode === 39) {
	// 	// move the player to the right
	// 	game.player.moveRight();
	// }
	// if (keyCode === 37) {
	// 	// move the player to the left
	// 	game.player.moveLeft();
	// }
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
}