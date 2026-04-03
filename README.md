Simon Says Game 🎮
A classic memory-testing game built with Vanilla JavaScript. This project was a great way to practice DOM manipulation, event handling, and managing game state through logic sequences.

🕹️ How to Play
Start: Press any key on your keyboard to begin the game.

Observe: The game will flash a random button (Red, Yellow, Green, or Blue).

Repeat: Click the buttons in the exact same order they were flashed.

Level Up: Every time you complete the sequence correctly, the game adds one more color to the pattern and increases the level.

Game Over: If you click the wrong button, the screen flashes red, displays your final score, and resets.

🚀 Technical Highlights
Sequence Tracking: Uses two arrays (gameSequence and userSequence) to store and compare patterns in real-time.

Asynchronous Logic: Implemented setTimeout to handle button flashes and transition delays, ensuring a smooth user experience.

Dynamic UI: The h2 header updates dynamically to show the current level or the final score upon losing.

Event Delegation: Efficiently manages click events across multiple button elements using a single loop.

🛠️ Tech Stack
HTML5: For the game structure and layout.

CSS3: For the button styling, flexbox alignment, and the "flash" animation effect.

JavaScript (ES6): For the core game engine and logic.

📂 How to Run Locally
Clone the repository:

Bash
git clone https://github.com/Osheen06/SimonGame.git
Open index.html in any modern web browser.

Start testing your memory!
