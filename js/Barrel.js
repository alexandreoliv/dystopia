class Barrel {
	constructor(x) {
		this.x = x;
		this.width = 88.5;
		this.height = 119;
		this.y = height - this.height;
	}

	draw() {
		image(game.barrelImage, this.x, this.y, this.width, this.height);
		this.x -= 1.5;
		 // is the barrel is out of the screen (from the left), move it back to the 
		 // end of the screen (from the right)
		if (this.x + this.width < 0) this.x = width;
	}

	// collision() {
	// 	// if distance between barrel and player is 0, there's a collision
	// 	if ((this.x - (game.player.x + game.player.width) <= 1.5) && (game.player.y + game.player.height > this.y)) {
	// 		// console.log('Collision with barrel at position' + this.x);
	// 		game.player.x -= 1.5;
	// 	}
	// }
}