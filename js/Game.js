class Game {
	constructor() {
		this.backgroundImages;
	}

	setup() {
		this.player = new Player();
		this.background = new Background();
		this.barrel = new Barrel(700);
		this.items = [];
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
		this.itemImages = [
			{ src: loadImage('assets/box.png'), name: 'box', width: 28*2, height: 24*2 },
			{ src: loadImage('assets/box.png'), name: 'box', width: 28*2, height: 24*2 },
			{ src: loadImage('assets/box.png'), name: 'box', width: 28*2, height: 24*2 },
			{ src: loadImage('assets/box.png'), name: 'box', width: 28*2, height: 24*2 },
			{ src: loadImage('assets/box.png'), name: 'box', width: 28*2, height: 24*2 },
			{ src: loadImage('assets/box.png'), name: 'box', width: 28*2, height: 24*2 },
			{ src: loadImage('assets/box.png'), name: 'box', width: 28*2, height: 24*2 },
			{ src: loadImage('assets/box.png'), name: 'box', width: 28*2, height: 24*2 },
			{ src: loadImage('assets/pizza.png'), name: 'pizza', width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/pizza.png'), name: 'pizza', width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/pizza.png'), name: 'pizza', width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/pizza.png'), name: 'pizza', width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/pizza.png'), name: 'pizza', width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/pizza.png'), name: 'pizza', width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', width: 15*4, height: 10*4 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', width: 15*4, height: 10*4 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', width: 15*4, height: 10*4 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', width: 15*4, height: 10*4 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', width: 15*4, height: 10*4 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', width: 15*4, height: 10*4 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', width: 15*4, height: 10*4 },
			{ src: loadImage('assets/heart.png'), name: 'heart', width: 416/10, height: 416/10 }
		];
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

		if (frameCount % 90 === 0) { // draws a new item every 60 frames
			this.items.push(new Item(random(this.itemImages)));
		}

		if (frameCount % 120 === 0) { // draws a new saw every 120 frames
			this.saws.push(new Saw(this.sawImage));
		}
		
		// draws each obstacle on the canvas
		this.items.forEach(function (item) {
			item.draw();
		})
		
		// draws each trap on the canvas
		this.saws.forEach(function (saw) {
			saw.draw();
		})

		// in case there's a collision, removes the obstacle from the screen
		this.items = this.items.filter(item => {
			if (item.collision(this.player || (item.x + item.width) < 0)) { // there's a collision
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