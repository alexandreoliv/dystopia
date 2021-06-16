class Game {
	constructor() {
		this.backgroundImages;
	}

	setup() {
		this.player = new Player();
		this.background = new Background();
		this.barrel = new Barrel(700);
		this.boss = new Boss;
		this.bulletsBoss = [];
		this.bulletsPlayer = [];
		this.items = [];
		this.saws = [];
		this.levelElement = document.getElementById('level');
		this.livesElement = document.getElementById('lives');
		this.healthElement = document.getElementById('health');
		this.scoreElement = document.getElementById('score');
		this.timeElement = document.getElementById('time');
		this.level = 1;
		this.lives = 3;
		this.health = 100;
		this.score = 0;
		this.time = 60;
		this.frames = 100;
		this.currentBossImage = this.bossImage;
		this.audio.loop = true;
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background-far-buildings.png'), x: 0, speed: 0.5 },
			{ src: loadImage('assets/background-back-buildings.png'), x: 0, speed: 1 },
			{ src: loadImage('assets/background-foreground.png'), x: 0, speed: 1.5 }
		];
		this.playerImage = loadImage('assets/player-run.gif');
		this.itemImages = [
			{ src: loadImage('assets/pizza.png'), name: 'pizza', health: 15, score: 0, life: 0, width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/pizza.png'), name: 'pizza', health: 15, score: 0, life: 0, width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/pizza.png'), name: 'pizza', health: 15, score: 0, life: 0, width: 3072/60, height: 3072/60 },
			{ src: loadImage('assets/chicken.png'), name: 'chicken', health: 10, score: 0, life: 0, width: 31*2, height: 32*2 },
			{ src: loadImage('assets/chicken.png'), name: 'chicken', health: 10, score: 0, life: 0, width: 31*2, height: 32*2 },
			{ src: loadImage('assets/chicken.png'), name: 'chicken', health: 10, score: 0, life: 0, width: 31*2, height: 32*2 },
			{ src: loadImage('assets/chicken.png'), name: 'chicken', health: 10, score: 0, life: 0, width: 31*2, height: 32*2 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', health: 5, score: 0, life: 0, width: 68, height: 47 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', health: 5, score: 0, life: 0, width: 68, height: 47 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', health: 5, score: 0, life: 0, width: 68, height: 47 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', health: 5, score: 0, life: 0, width: 68, height: 47 },
			{ src: loadImage('assets/coffee.png'), name: 'coffee', health: 5, score: 0, life: 0, width: 68, height: 47 },
			{ src: loadImage('assets/heart.png'), name: 'heart', health: 0, score: 0, life: 1, width: 416/10, height: 416/10 },
			{ src: loadImage('assets/ak47.png'), name: 'ak47', health: 0, score: 30, life: 0, width: 478/4, height: 206/4 },
			{ src: loadImage('assets/ak47.png'), name: 'ak47', health: 0, score: 30, life: 0, width: 478/4, height: 206/4 },
			{ src: loadImage('assets/pistol.png'), name: 'pistol', health: 0, score: 15, life: 0, width: 184/3, height: 146/3 },
			{ src: loadImage('assets/pistol.png'), name: 'pistol', health: 0, score: 15, life: 0, width: 184/3, height: 146/3 },
			{ src: loadImage('assets/pistol.png'), name: 'pistol', health: 0, score: 15, life: 0, width: 184/3, height: 146/3 },
			{ src: loadImage('assets/knife.png'), name: 'knife', health: 0, score: 5, life: 0, width: 110/6, height: 404/6 },
			{ src: loadImage('assets/knife.png'), name: 'knife', health: 0, score: 5, life: 0, width: 110/6, height: 404/6 },
			{ src: loadImage('assets/knife.png'), name: 'knife', health: 0, score: 5, life: 0, width: 110/6, height: 404/6 },
			{ src: loadImage('assets/knife.png'), name: 'knife', health: 0, score: 5, life: 0, width: 110/6, height: 404/6 },
		];
		this.sawImage = loadImage('assets/saw.png');
		this.barrelImage = loadImage('assets/barrel.png');
		this.bossImage = loadImage('assets/boss.gif');
		this.deadBossImage = loadImage('assets/boss-dead.png');
		this.bossRifleImage = loadImage('assets/boss-rifle.gif');
		this.bulletImage = loadImage('assets/boss-bullet.png');
		this.playerRifleImage = loadImage('assets/player-rifle.gif');

		this.music = createAudio('assets/music.wav');
		this.audio = new Audio('assets/music.wav');
	}

	draw() {
		//if (this.player.x + this.player.width < 0 || this.health <= 0)
		if (this.boss.health <= 0) { // boss is dead
			image(game.deadBossImage, this.x - 50, this.y, 63, 23);
			this.youWon();
		}
		if (this.lives === 0) // player has no more lives - end of the game
			this.gameOver();
		else if (this.level === 5)
			this.finalStage();
		else if (this.time === 0) { // a new level starts
				this.level++;
				this.levelElement.textContent = this.level;
				// console.log("frames before: " + this.frames)
				this.frames /= 2;
				// console.log("frames after: " + this.frames)
				this.time = 60;
		
				if (this.level === 5) { // player has reached final level
					this.player.x = 50; // brings player to the initial position
					this.player.rifleX = this.player.x + this.player.width + this.player.rifleDistX; // rifle needs to move together with the player
					//this.time = 100;
					//document.getElementById('info').removeChild(document.getElementById('h2-time')); // removes the time counter
					document.getElementById('h2-time').innerHTML = `Boss health: <span id="boss-health">${this.boss.health}</span>`;
					//document.getElementById('time').textContent = this.boss.health;
					this.playerImage = loadImage('assets/player-idle.gif');
				}
		}
		else this.gameOn(); // player is playing the current level
	}

	gameOn() {
		//clear();
		this.background.draw(this.level);
		this.barrel.draw();
		this.player.draw();

		//console.log(frameCount)
		if (frameCount % 200 === 0) { // draws a new item every x frames
			this.items.push(new Item(random(this.itemImages)));
			// console.log("New item" + " on y " + this.items[this.items.length - 1].y);
			// console.log(this.items)
		}

		if (frameCount % this.frames < 1 ) { // draws a new saw every x frames
			this.saws.push(new Saw(this.sawImage));
			// console.log("New saw" + " on frame " + frameCount);
			// console.log(this.saws)
		}
		
		if (frameCount % 100 === 0) { // time decreases ----------- show be frameCounter % 100 when the game is ready
			this.time -= 1;
			this.timeElement.textContent = this.time;
		}

		// draws each item on the canvas
		this.items.forEach(function (item) {
			item.draw();
		})
		
		// draws each saw on the canvas
		this.saws.forEach(function (saw) {
			saw.draw();
		})

		// in case there's a collision, removes the item from the screen
		this.items = this.items.filter(item => {
			// let isCollision = item.collision(this.player);
			// if (isCollision) console.log(`collision with ${item.name}`);
			if (item.collision(this.player)) { // there's a collision 
				this.score += item.score;
				this.lives += item.life;
				if (this.health + item.health > 100) this.health = 100;
				else this.health += item.health;
				this.scoreElement.textContent = this.score;
				this.healthElement.textContent = this.health;
				this.livesElement.textContent = this.lives;
				return false;
			} else {
				return true;
			}
		})

		// remove from the array the items that have already left the screen
		this.items = this.items.filter(item => {
			if (item.x + item.width < 0) return false; // item has left the screen
			else return true;
		})

		// in case there's a collision, removes the saw from the screen
		this.saws = this.saws.filter(saw => {
			// let isCollision = saw.collision(this.player);
			// if (isCollision) console.log(`collision with saw`);
			if (saw.collision(this.player)) { // there's a collision
				this.health -= 50;
				this.healthElement.textContent = this.health;
				return false;
			} else {
				return true;
			}
		})

		// remove from the array the saws that have already left the screen
		this.saws = this.saws.filter(saw => {
			if (saw.y > height) return false; // item has left the screen
			else return true;
		})

		if (this.player.x + this.player.width < 0 || this.health <= 0) { // player died either by lack of health or by exiting the screen on the left
			//console.log(game.barrel.x)
			if (game.barrel.x === 1) // player killed by the barrel
				this.player.x = game.barrel.width; // moves player after the barrel
			else
				this.player.x = 0; // moves player to its original position

			this.lives--; // one life is lost
			this.health = 100; // restores full health
			this.livesElement.textContent = this.lives; // updates lives
			this.healthElement.textContent = this.health; // updated health
		}

		// console.log("is the player atop a barrel? " + this.player.atopBarrel())
		this.player.atopBarrel();

		if (keyIsDown(RIGHT_ARROW)) {
			// moves the player to the right
			this.player.runRight();
		}

		if (keyIsDown(LEFT_ARROW)) {
			// moves the player to the left
			this.player.runLeft();
		}

		if (keyCode === 83) { // s
			//this.music.play();
			this.audio.play();
		}
	}

	gameOver() {
		document.getElementById('info').innerHTML = '<h2>GAME</h2><h2>OVER</h2>';
		noLoop();
	}

	youWon() {
		document.getElementById('info').innerHTML = '<h2>YOU</h2><h2>WON</h2>';
		this.boss.draw();
		noLoop();
	}

	finalStage() {
		document.getElementById('div-level').innerHTML = '<h2>FINAL STAGE</h2>';
		this.background.draw(this.level);
		this.player.draw();
		this.boss.draw();

		if (frameCount % 10 === 0) { // time decreases ----------- show be frameCounter % 100 when the game is ready
			this.time -= 1;
			this.timeElement.textContent = this.time;
		}

		if (this.health <= 0) { // player died by lack of health
			this.player.x = 50; // brings player to the initial position
			this.player.rifleX = this.player.x + this.player.width + this.player.rifleDistX; // rifle needs to move together with the player
			this.lives--; // one life is lost
			this.health = 100; // restores full health
			this.livesElement.textContent = this.lives; // updates lives
			this.healthElement.textContent = this.health; // updated health
		}

		if (frameCount % Math.floor(random(60,140)) === 0) { // draws a new bullet every x frames
			game.bulletsBoss.push(new Bullet(game.bulletImage, (game.boss.x - 128 + 15), (game.boss.y + 35), 45, 21, 'left'));
		}
		
		// draws each boss bullet on the canvas
		this.bulletsBoss.forEach(function (bullet) {
			bullet.draw();
		})
		// draws each player bullet on the canvas
		this.bulletsPlayer.forEach(function (bullet) {
			bullet.draw();
		})

		// in case there's a collision, removes the bullet from the screen
		this.bulletsBoss = this.bulletsBoss.filter(bullet => {
			// let isCollision = saw.collision(this.player);
			// if (isCollision) console.log(`collision with saw`);
			if (bullet.collision(this.player)) { // there's a collision
				this.health -= 50;
				this.healthElement.textContent = this.health;
				return false;
			} else {
				return true;
			}
		})

		// in case there's a collision, removes the bullet from the screen
		this.bulletsPlayer = this.bulletsPlayer.filter(bullet => {
			// let isCollision = saw.collision(this.player);
			// if (isCollision) console.log(`collision with saw`);
			if (bullet.collision(this.boss)) { // there's a collision
				console.log('Bullet has hit the boss');
				this.boss.health -= 1;
				document.getElementById('boss-health').textContent = this.boss.health;
				return false;
			} else {
				return true;
			}
		})

		// remove from the array the saws that have already left the screen
		this.bulletsBoss = this.bulletsBoss.filter(bullet => {
			if (bullet.x + bullet.width < 0) return false; // item has left the screen
			else return true;
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