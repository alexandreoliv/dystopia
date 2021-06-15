class Boss {
	constructor() {
		this.width = 78;
		this.height = 140;
		this.x = width - this.width;
		this.y = height - this.height;
	}

	draw() {
		image(game.bossImage, this.x, this.y, this.width, this.height);
	}

	// collision() {
	// 	// if distance between barrel and player is 0, there's a collision
	// 	if ((this.x - (game.player.x + game.player.width) <= 1.5) && (game.player.y + game.player.height > this.y)) {
	// 		// console.log('Collision with barrel at position' + this.x);
	// 		game.player.x -= 1.5;
	// 	}
	// }
}