class Bullet {
	constructor(image, x, y, w, h, direction) {
		this.image = image;
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.direction = direction;
	}

	collision(person) {
		// the center of the saw
		const bulletX = this.x + this.width / 2;
		const bulletY = this.y + this.height / 2;
		// the center of the player
		const personX = person.x + person.width / 2;
		const personY = person.y + person.height / 2;
		// if distance between saw and player is smaller to, or equal 50,
		// then there's a collision
		if (dist(bulletX, bulletY, personX, personY) > 50) { // not a collision
			return false;
		} else { // collision
			return true;
		}
	}

	draw() {
		if (this.direction === 'left') // boss is shooting
			this.x -= 15;
		if (this.direction === 'right') // player is shooting
			this.x += 15;
		image(this.image, this.x, this.y, this.width, this.height);
	}
}