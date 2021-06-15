class Boss {
	constructor() {
		this.width = 78;
		this.height = 140;
		this.x = width - this.width;
		this.y = height - this.height;
		this.rifle = false;
	}

	draw() {
		image(game.bossImage, this.x, this.y, this.width, this.height);
		if (this.rifle)
			image(game.rifleImage, this.x - 128 + 15, this.y + 30, 128, 48);
	}

	fight() {
		//game.bossImage = loadImage('assets/boss-fight.png');
		this.rifle = true;
	}
}