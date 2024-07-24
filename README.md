# Single-Page Timer Game

A dynamic single-page timer game built with React, designed to test your ability to stop the timer before it reaches a specified time. This project demonstrates the use of refs and React portals for creating dynamic and responsive web applications.

## Features

- **Dynamic Timer**: Test your reflexes by stopping the timer before it hits zero.
- **Player Name Input**: Enter your name to personalize the game experience.
- **React Refs**: Utilized to manage timer control and user input.
- **React Portals**: Used for rendering modals and overlays, enhancing dynamic UI capabilities.
- **Mobile Responsive**: Fully responsive design to ensure a seamless experience across different devices.

## Demo

[Include a screenshot or GIF of your game here]

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Origina-sudo/timer-game.git
    ```

2. Navigate to the project directory:
    ```bash
    cd timer-game
    ```

3. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Game

1. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and go to `http://localhost:3000` to play the game.

## Usage

1. Enter your name in the input field.
2. Press "Start" to begin the timer.
3. Try to stop the timer before it reaches zero by clicking the "Stop" button.

## Code Overview

### Components

- **App.js**: The main component that holds the game logic.
- **Timer.js**: A component responsible for the timer functionality.
- **PlayerInput.js**: A component for entering the player's name.
- **Modal.js**: A reusable modal component rendered using React portals.

### Key Concepts

- **React Refs**: Used to directly access and manipulate DOM elements, such as the timer.
- **React Portals**: Enable rendering of components outside the main DOM hierarchy, useful for modals and overlays.

### Example Code Snippet

```jsx
// Example usage of React refs and portals

import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Timer = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(10);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <p>Time left: {time}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

const App = () => {
  return (
    <div>
      <h1>Timer Game</h1>
      <PlayerInput />
      <Timer />
      <Modal>
        <p>This is a modal rendered using React portals!</p>
      </Modal>
    </div>
  );
};

export default App;