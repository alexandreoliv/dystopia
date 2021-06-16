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
		this.health = 100;
	}

	draw() {
		if (this.health > 0) { // boss is alive
			image(game.currentBossImage, this.x, this.y, this.width, this.height);
			image(game.bossRifleImage, this.rifleX, this.rifleY, this.rifleWidth, this.rifleHeight);
		}
		else { // boss is dead
			game.currentBossImage = game.deadBossImage;
			this.width = 140;
			this.height = 78;
			this.x = width - this.width - 50;
			this.y = height - this.height;
			image(game.currentBossImage, this.x, this.y, this.width, this.height);
			//image(game.deadBossImage, this.x - 50, this.y, 63, 23);
			//game.gameOver();
		}
	}
}