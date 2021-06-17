class Barrel {
	constructor(x) {
		this.x = x;
		this.width = 88.5;
		this.height = 119;
		this.y = height - this.height;
	}

	draw() {
		image(game.barrelImage, this.x, this.y, this.width, this.height);
		this.x -= 1.5;
		 // is the barrel is out of the screen (from the left), move it back to the 
		 // end of the screen (from the right)
		if (this.x + this.width < 0) this.x = width;
	}

	collision() {
		if ((this.x - (game.player.x + game.player.width) < 1.5) && // player is approaching barrel
			(this.x - (game.player.x + game.player.width) > 0) && // player is after barrel
			(game.player.y + game.player.height >= this.y)) // player is not completely above barrel
			return true;
		return false;
	}
}