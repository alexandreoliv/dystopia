class Game {
	constructor() {
		this.backgroundImages;
	}

	setup() {
		this.player = new Player();
		this.background = new Background();
		this.obstacles = [];
		this.traps = [];
		this.healthElement = document.getElementById('health');
		this.scoreElement = document.getElementById('score');
		this.health = 100;
		this.score = 0;
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background-far-buildings.png'), x: 0, speed: 0.5 },
			{ src: loadImage('assets/background-back-buildings.png'), x: 0, speed: 1 },
			{ src: loadImage('assets/background-foreground.png'), x: 0, speed: 1.5 }
		];
		this.playerImage = loadImage('assets/player-run.gif');
		this.obstacleImage = loadImage('assets/obstacles-box-idle.png');
		this.trapImage = loadImage('assets/trap.png');
	}

	draw() {
		clear();
		this.background.draw();
		this.player.draw();
		if (frameCount % 60 === 0) { // draws a new obstacle every 60 frames
			this.obstacles.push(new Obstacle(this.obstacleImage));
		}

		if (frameCount % 120 === 0) { // draws a new trap every 120 frames
			this.traps.push(new Trap(this.trapImage));
		}
		
		// draws each obstacle on the canvas
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw();
		})
		
		// draws each trap on the canvas
		this.traps.forEach(function (trap) {
			trap.draw();
		})

		// in case there's a collision, removes the obstacle from the screen
		this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 0)) { // there's a collision
				this.scoreElement.textContent = Number(this.scoreElement.textContent) + 10;
				return false;
			} else {
				return true;
			}
		})

		// in case there's a collision, removes the trap from the screen
		this.traps = this.traps.filter(trap => {
			if (trap.collision(this.player || (trap.x + trap.width) < 0)) { // there's a collision
				this.healthElement.textContent -= 20;
				return false;
			} else {
				return true;
			}
		})

		if (keyIsDown(RIGHT_ARROW)) {
			// moves the player to the right
			this.player.runRight();
		}

		if (keyIsDown(LEFT_ARROW)) {
			// moves the player to the left
			this.player.runLeft();
		}
	}
}