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
		this.y += this.velocity;
		// if the player moves out of the screen on the bottom
		if (this.y >= height - this.height) {
			// we reset the y to its starting position
			this.y = height - this.height;
		}
		image(game.playerImage, this.x, this.y, this.width, this.height);
	}

	jump() {
		this.velocity = - 10;
	}

	moveLeft() {
		if (this.x > 0) { // if the player is not at the edge
		  this.x -= 10;
		}
	}
	
	moveRight() {
	if (this.x < 1216 - this.width) { // if the player is not at the edge
		this.x += 5;
		}
	}

	runLeft() {
		if (this.x > 0) { // if the player is not at the edge
			this.x -= 30;
		}
	}
	
	runRight() {
	if (this.x < 1216 - this.width) { // if the player is not at the edge
		this.x += 15;
		}
	}
}