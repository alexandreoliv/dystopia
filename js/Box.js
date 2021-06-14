class Box {
	constructor(image) {
		this.image = image;
		this.x = width;
		this.y = (Math.random() * height) / 1.5;
		this.width = 70;
		this.height = 60;
	}

	collision(playerInfo) {
		// console.log('collision', playerInfo);
		// the center of the box
		const boxX = this.x + this.width / 2;
		const boxY = this.y + this.height / 2;
		// the center of the player
		const playerX = playerInfo.x + playerInfo.width / 2;
		const playerY = playerInfo.y + playerInfo.height / 2;
		// if distance between box and player is smaller to, or equal 50,
		// then there's a collision
		if (dist(boxX, boxY, playerX, playerY) > 50) { // not a collision
			return false;
		} else { // collision
			return true;
		}
	}

	draw() {
		this.x -= 5;
		image(this.image, this.x, this.y, this.width, this.height);
	}
}