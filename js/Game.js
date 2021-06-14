class Game {
	constructor() {
		this.backgroundImages;
	}

	setup() {
		this.player = new Player();
		this.background = new Background();
		this.barrel = new Barrel(700);
		this.boxes = [];
		this.saws = [];
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
		this.boxImage = loadImage('assets/box.png');
		this.sawImage = loadImage('assets/saw.png');
		this.barrelImage = loadImage('assets/barrel.png');
	}

	draw() {
		if (this.player.x + this.player.width < 0 || this.health <= 0)
			this.gameOver();
		else
			this.gameOn();
	}

	gameOn() {
		//clear();
		this.background.draw();
		this.barrel.draw();
		this.player.draw();

		if (frameCount % 60 === 0) { // draws a new box every 60 frames
			this.boxes.push(new Box(this.boxImage));
		}

		if (frameCount % 120 === 0) { // draws a new saw every 120 frames
			this.saws.push(new Saw(this.sawImage));
		}
		
		// draws each obstacle on the canvas
		this.boxes.forEach(function (box) {
			box.draw();
		})
		
		// draws each trap on the canvas
		this.saws.forEach(function (saw) {
			saw.draw();
		})

		// in case there's a collision, removes the obstacle from the screen
		this.boxes = this.boxes.filter(box => {
			if (box.collision(this.player || (box.x + box.width) < 0)) { // there's a collision
				this.score += 10;
				this.scoreElement.textContent = this.score;
				return false;
			} else {
				return true;
			}
		})

		// in case there's a collision, removes the trap from the screen
		this.saws = this.saws.filter(saw => {
			if (saw.collision(this.player || (saw.x + saw.width) < 0)) { // there's a collision
				this.health -= 20;
				this.healthElement.textContent = this.health;
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

	gameOver() {
		document.getElementById('info').innerHTML = '<h2>GAME</h2><h2>OVER</h2>';		
	}

}