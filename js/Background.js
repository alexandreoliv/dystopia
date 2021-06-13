class Background {
	draw() {
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed;
			// first image
			image(img.src, img.x, 0, width, height);
			// second image, which is added right after the first
			image(img.src, img.x + width, 0, width, height);
			// if the image "leaves" the screen completely (on the left side)
			// we need to bring it back to its original position
			if (img.x <= - width) {
				img.x = 0;
			}
		})
	}
}