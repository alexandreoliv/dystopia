class Bullet {
	constructor(image) {
		this.image = image;
		this.x = (game.boss.x - 128 + 15);
		this.y = game.boss.y + 35;
		this.width = 45;
		this.height = 21;
	}

	collision() {
		// console.log('collision', playerInfo);
		// the center of the saw
		const bulletX = this.x + this.width / 2;
		const bulletY = this.y + this.height / 2;
		// the center of the player
		const playerX = game.player.x + game.player.width / 2;
		const playerY = game.player.y + game.player.height / 2;
		// if distance between saw and player is smaller to, or equal 50,
		// then there's a collision
		if (dist(bulletX, bulletY, playerX, playerY) > 50) { // not a collision
			return false;
		} else { // collision
			return true;
		}
	}

	draw() {
		this.x -= 15;
		image(this.image, this.x, this.y, this.width, this.height);
	}
}