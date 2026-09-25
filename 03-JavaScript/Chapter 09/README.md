# Rock Paper Scissors Game

A browser-based Rock Paper Scissors game built with HTML, CSS, and JavaScript. This project is part of a front-end practice series and focuses on DOM manipulation, game logic, and local data persistence.

## Overview

The game lets a user play Rock, Paper, or Scissors against the computer. Each round is evaluated automatically, the result is displayed with a dedicated result card, and the scoreboard, quick stats, and game history update in real time. Progress is saved locally, so scores and history remain intact across page reloads.

## Features

- Play Rock, Paper, or Scissors against the computer
- Automatic win, loss, and draw detection
- Live scoreboard showing wins, losses, and draws
- Quick stats summary (total games, wins, losses, draws)
- Game history log for each round played
- Match results and history saved with localStorage, persisting across page reloads
- Option to clear game history and reset progress
- Responsive layout for different screen sizes

## Tech Stack

- HTML5
- CSS3 (custom properties for theming)
- JavaScript (ES6+, no frameworks or libraries for game logic)
- [Lucide Icons](https://lucide.dev/) for iconography

## Live Demo

[live demo](https://rock-paper-scissors-brown-two.vercel.app/)
## Project Structure

```
├── index.html
├── style.css
├── script.js
└── images/
    ├── logo.png
    ├── rock_icon.png
    ├── paper_icon.png
    ├── scissors_icon.png
    ├── background_top_left.png
    └── background_bottom_right.png
```

## Getting Started

No build steps or dependencies are required.

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Click Rock, Paper, or Scissors to play a round against the computer.

## How It Works

- The computer's move is chosen at random from the available options.
- The user's move and the computer's move are compared to determine a win, loss, or draw, based on standard Rock Paper Scissors rules.
- The result is rendered as a card with an icon, heading, and short description.
- The scoreboard, quick stats, and game history are updated after every round.
- Game data is stored in the browser's localStorage, so it is retained the next time the page is opened. Clearing history removes this saved data.

## Author

**Anees Ul Rehman**
GitHub: [Anees-ul-rehman-1](https://github.com/Anees-ul-rehman-1)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
