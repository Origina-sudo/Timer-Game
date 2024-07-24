# Single-Page Timer Game

A dynamic single-page timer game built with React, designed to test your ability to stop the timer before it reaches a specified time. This project demonstrates the use of refs and React portals for creating dynamic and responsive web applications.

## Features


- **Dynamic Timer**: Test your reflexes by stopping the timer before it hits zero.
- **Player Name Input**: Enter your name to personalize the game experience.
- **React Refs**: Utilized to manage timer control and user input.
- **React Portals**: Used for rendering modals and overlays, enhancing dynamic UI capabilities.
- **Mobile Responsive**: Fully responsive design to ensure a seamless experience across different devices.

## Demo

![Screenshot of my game](https://github.com/Origina-sudo/Timer-Game/blob/main/Screenshot%202024-07-24%20183007.png)


## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Origina-sudo/Timer-Game.git
    ```

2. Navigate to the project directory:
    ```bash
    cd 01-starting-project
    ```

3. Install the dependencies:
    ```bash
    npm install or npm run dev
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

- **App.jsx**: The main component that holds the game logic.
- **Player.jsx**: A component for entering the player's name.
- **ResultModal.jsx**: A reusable modal component rendered using React portals.

### Key Concepts

- **React Refs & forwardRefs**: Used to directly access and manipulate DOM elements, such as the timer.
- **React Portals**: Enable rendering of components outside the main DOM hierarchy, useful for modals and overlays.

### Example Code Snippet

```jsx
import { useState,useRef } from "react";
export default function Player() {
const playeName = useRef()
const [enteredPlayerName , setEnteredPlayerName] = useState(null)

 function handleClick (){
       setEnteredPlayerName(playeName.current.value);
       playeName.current.value = "";
 }
  return ( 
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input ref={playeName} 
        type="text"  />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );

}

export default App;
