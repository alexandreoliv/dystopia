class Game {
	constructor() {
		this.backgroundImages;
	}

	setup() {
		this.player = new Player();
		this.background = new Background();
		this.obstacles = [];
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('../assets/background-far-buildings.png'), x: 0, speed: 0.5 },
			{ src: loadImage('../assets/background-back-buildings.png'), x: 0, speed: 1 },
			{ src: loadImage('../assets/background-foreground.png'), x: 0, speed: 1.5 }
		];
		this.playerImage = loadImage('../assets/player-idle.gif');
		this.obstacleImage = loadImage('../assets/obstacles-box-idle.png');
	}

	draw() {
		clear();
		this.background.draw();
		this.player.draw();
		if (frameCount % 60 === 0) { // draws a new obstacle every 60 frames
			this.obstacles.push(new Obstacle(this.obstacleImage));
		}
		
		// draws each obstacle on the canvas
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw();
		})
		
		// in case there's a collision, removes the obstacle from the screen
		this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 0)) {
				return false;
			} else {
				return true;
			}
		})

		if (keyIsDown(RIGHT_ARROW)) {
			// moves the player to the right
			this.player.image = loadImage('../assets/player-run.gif');
			this.player.runRight();
		}

		if (keyIsDown(LEFT_ARROW)) {
			// moves the player to the left
			this.player.image = loadImage('../assets/player-run.gif');
			this.player.runLeft();
		}
	}
}