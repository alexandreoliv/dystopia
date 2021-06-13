class Obstacle {
	constructor(image) {
		this.image = image;
		this.x = width;
		this.y = (Math.random() * height) / 2.5;
		this.width = 50;
		this.height = 50;
	}

	collision(playerInfo) {
		console.log('collision', playerInfo);
		// the center of the obstacle
		const obstacleX = this.x + this.width / 2;
		const obstacleY = this.y + this.height / 2;
		// the center of the player
		const playerX = playerInfo.x + playerInfo.width / 2;
		const playerY = playerInfo.y + playerInfo.height / 2;
		// if distance between obstacle and player is smaller to, or equal 50,
		// then there's a collision
		if (dist(obstacleX, obstacleY, playerX, playerY) > 50) { // not a collision
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