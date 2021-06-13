class Trap {
	constructor(image) {
		this.image = image;
		this.x = (Math.random() * width);
		this.y = 0;
		this.width = 50;
		this.height = 50;
	}

	collision(playerInfo) {
		// console.log('collision', playerInfo);
		// the center of the trap
		const trapX = this.x + this.width / 2;
		const trapY = this.y + this.height / 2;
		// the center of the player
		const playerX = playerInfo.x + playerInfo.width / 2;
		const playerY = playerInfo.y + playerInfo.height / 2;
		// if distance between trap and player is smaller to, or equal 50,
		// then there's a collision
		if (dist(trapX, trapY, playerX, playerY) > 50) { // not a collision
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