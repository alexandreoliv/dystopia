class Player {
	constructor() {
		this.velocity = 0;
		this.gravity = 0.2;
		this.width = 78;
		this.height = 140;
		this.x = 0;
		this.y = height - this.height;
		// height is the height of the canvas (provided by p5.js)
	}

	draw() {
		// gravity brings the player down
		this.velocity += this.gravity;
		
		// if distance between barrel and player is 0, there's a collision
		console.log("distance between player and barrel:" + (game.barrel.x - (this.x + this.width)))
		if ((game.barrel.x - (this.x + this.width) < 1.5) &&
			(game.barrel.x - (this.x + this.width) > 0) &&
			(this.y + this.height >= game.barrel.y)) {
				this.x -= 1.5;
		}

		// if the player falls in a barrel, it should stay on top of it
		if (
			(this.x + this.width > game.barrel.x) && // player is after or exactly at the beginning of the barrel
			(this.x <= game.barrel.x + game.barrel.width) // player is before of exactly at the end of the barrel
		   &&
			(this.y + this.height === game.barrel.y) // player is on top of the barrel
		   ) {
			//this.y = game.barrel.y - this.height;
			this.x += 1.5;
		} else {
			this.y += this.velocity;
		}

		// if the player moves out of the screen on the bottom
		if (this.y >= height - this.height) {
			// we reset the y to its starting position
			this.y = height - this.height;
		}

		image(game.playerImage, this.x, this.y, this.width, this.height);
	}

	jump() {
		if (this.y === height - this.height) // player is in the ground
			this.velocity = -10;
	}

	runLeft() {
		if (this.x > 0) { // if the player is not at the edge
			this.x -= 30;
		}
	}
	
	runRight() {
		if (this.x + 15 < 1216 - this.width) { // if the player is not at the right edge
			//if (this.y === height - this.height) { // player is in the ground
				if (
					(this.x + this.width + 15 < game.barrel.x || this.x > game.barrel.x) || // if the player is not too close to barrel
					(this.y + this.height <= game.barrel.y) // player is above or on top of the barrel
					)
					this.x += 15;
			// else { // player is jumping
			// 	if (this.x + this.width + 15 < game.barrel.x || this.x > game.barrel.x) // player is not too close to barrel1
			// 		this.x += 10;
			// }
		}
	}
}