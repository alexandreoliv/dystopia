<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT NAME AND SCREENSHOT -->
<br />
<div align="center">
  <h3 align="center">DYSTOPIA</h3>
</div>

[![Product Name Screen Shot][product-screenshot]](https://alexandreoliv.github.io/dystopia/)

<!-- ABOUT THE PROJECT -->

## About the project

First project of my Full-Stack Web Development bootcamp at Ironhack. We needed to develop a game, any game, in a week's time. Dystopia was built in 5 days.

I really enjoyed playing video games when I was a child. Mostly side-scrolling beat 'em up or platform games. Dystopia was made so that I would have fun while programming and playing it. It's a nostalgic, quick and fun game, designed to last less than 3 minutes to complete.

The game is set in a dystopian, post-apocalypse society. The main character, Jack, needs to survive 4 levels of the game to reach the final boss - his enemy Lucy.

The code reflects my level of knowledge by the time it was built (during the third week of the 9-week bootcamp) and hasn't been updated since.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built with

-   [Node.js](https://nodejs.org/en/)
-   [p5.js](https://p5js.org/)
-   Various graphic assets and sound effects coming from multiple free sources

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION -->

## Installation

1. Clone the repo
    ```sh
    git clone https://github.com/alexandreoliv/dystopia.git
    ```
2. Make any changes if necessary and host the website in a local web server or somewhere on the internet (for instance 000webhost.com) because it won't load the assets locally in the browser (CORS policy)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GAME MECHANICS -->

## Game mechanics

### Levels 1-4

1. There are four initial levels, each lasting 30 seconds. The goal on each level is to survive until the time is over.

<p></p>

2. <b>Controls:</b>
    ```
    jump: space bar | move: ⬅/➡
    music on/off: s | reset: r | pause: p
    ```

<p></p>

3. On top of the screen the most important information is displayed: level | lives | health | score | time

<p></p>

4. <b>Level:</b> Goes from LEVEL 1 to LEVEL 4.

<p></p>

5. <b>Lives:</b> Starts with 3. Increases by 1 when Jack finds hearts ❤️ during the game. Decreases by 1 when Jack health decreases to 0 or when he gets smashed by a barrel 🛢️ in the left corner. If Jack loses his last life, the game is over.

<p></p>

6. <b>Health:</b> Starts with 100. Decreases by 50 when Jack is hit by the falling saws 🪚. The falling saws appear in random positions and the amount of saws increases at each new level. Health level increases when Jack gets pizzas 🍕 (+15), chicken legs 🍗 (+10) or coffees ☕ (+5), but never exceeding 100. These food items appear in random positions and the most valuable ones are also rarer.

<p></p>

7. <b>Score:</b> Starts with 0. Increases when Jack finds AK-47s 🔫 (+30), pistols 🔫 (+15) or knives 🔪 (+5). These items appear in random positions and the most valuable items are also rarer. It's important to collect as many weapons as possible to get better scores.

<p></p>

8. <b>Time:</b> Starts with 30 (seconds) and decreases until 0. By then, a level-up sound indicates that Jack has reached a new level, and time starts again with 30.

<p></p>
 
### Final Stage

1. If Jack survives all four levels, he reaches the Final Stage. No more falling saws, no more food items or weapons. No more time counting. It becomes a shooting game and only one person will survive.

<p></p>

2. <b>Controls:</b> The only difference is that Jack can shoot now.
    ```
    shoot: ctrl | jump: space bar | move: ⬅/➡
    music on/off: s | reset: r | pause: p
    ```

<p></p>

3. On top of the screen the most important information is displayed: lives | health | score | boss

<p></p>

4. <b>Level:</b> Shows FINAL STAGE.

<p></p>

5. <b>Lives:</b> Decreases by 1 when Jack health decreases to 0. If Jack loses his last life, the game is over.

<p></p>

6. <b>Health:</b> Decreases by 50 when Jack is hit by Lucy. Lucy shoots at random times.

<p></p>

7. <b>Score:</b> Increases by 5 every time Jack hits Lucy.

<p></p>

8. <b>Boss:</b> Decreases by 1 every time Lucy gets hit. She's quite strong and Jack needs to successfully hit her 100 times to kill her. Jack can shoot faster, though.

<p></p>

## Final screen

1. Either shows GAME OVER or YOU WIN.

<p></p>

2. In case of losing, the final score is <b>(points x levels)</b>, for instance 100 x 3 = 300 if the game was lost in the third level.

<p></p>

3. In case of winning, the final score is <b>(points x levels) + health + (lives x 100)</b>, "health" and "lives" meaning the remaining value of both by the end of the game. For instance, (100 x 5) + 50 + (3 x 100) = 500 + 50 + 300 = 850.

<p align="right">(<a href="#top">back to top</a>)</p>

## Easter eggs

1. Press <b>f</b> at any time to reach the Final Stage

<p></p>

2. Press <b>d</b> at any time to... die! 💀

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alexandre-oliv/
[product-screenshot]: images/screenshot.png
