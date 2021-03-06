class Item {
	constructor(item) {
		this.image = item.src;
		this.name = item.name;
		this.health = item.health;
		this.score = item.score;
		this.life = item.life;
		this.width = item.width;
		this.height = item.height;
		this.x = width;
		this.y = random(300, height - 100);
	}

	collision(playerInfo) {
		// the center of the item
		const itemX = this.x + this.width / 2;
		const itemY = this.y + this.height / 2;
		// the center of the player
		const playerX = playerInfo.x + playerInfo.width / 2;
		const playerY = playerInfo.y + playerInfo.height / 2;
		// if distance between item and player is smaller to, or equal 50,
		// then there's a collision
		if (dist(itemX, itemY, playerX, playerY) > 70) { // not a collision
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