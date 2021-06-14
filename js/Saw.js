class Saw {
	constructor(image) {
		this.image = image;
		this.x = (Math.random() * width);
		this.y = 0;
		this.width = 50;
		this.height = 50;
	}

	collision() {
		// console.log('collision', playerInfo);
		// the center of the saw
		const sawX = this.x + this.width / 2;
		const sawY = this.y + this.height / 2;
		// the center of the player
		const playerX = game.player.x + game.player.width / 2;
		const playerY = game.player.y + game.player.height / 2;
		// if distance between saw and player is smaller to, or equal 50,
		// then there's a collision
		if (dist(sawX, sawY, playerX, playerY) > 50) { // not a collision
			return false;
		} else { // collision
			return true;
		}
	}

	draw() {
		this.y += 5;
		image(this.image, this.x, this.y, this.width, this.height);
	}
}