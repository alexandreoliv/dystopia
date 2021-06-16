class Boss {
	constructor() {
		this.width = 78;
		this.height = 140;
		this.x = width - this.width - 50;
		this.y = height - this.height;
		this.rifleWidth = 128;
		this.rifleHeight = 48;
		this.rifleX = this.x - this.rifleWidth + 15;
		this.rifleY = this.y + 30;
	}

	draw() {
		image(game.bossImage, this.x, this.y, this.width, this.height);
		image(game.bossRifleImage, this.rifleX, this.rifleY, this.rifleWidth, this.rifleHeight);
	}
}