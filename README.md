# Discord Bot with Dynamic Features

This is a Discord bot that brings some fun and dynamic customization to your server! The bot can change the server profile picture, its own profile picture, and its status periodically, keeping things fresh and engaging.

## Features

- **Automatic Server Icon Changer**: The bot can periodically update the server's profile picture, giving your server a fresh look.
- **Dynamic Bot Profile Picture**: The bot can change its own profile picture at set intervals, making it visually interesting.
- **Rotating Status Updates**: Keep users engaged by setting the bot to cycle through different statuses (like playing, watching, or listening) periodically.

## Commands

*Add any commands you've set up for the bot here, or leave this section if commands are not applicable.*

## Setup

To get started with this bot:

1. Clone the repository:
   ```bash
    git clone https://github.com/yourusername/yourbotrepo.git
   ```
2. Install the required packages:
   ```bash
    npm install
   ```
3. Setup your .env file
    ```bash
    TOKEN=YOUR_DISCORD_BOT_TOKEN
    SERVER_ID=YOUR_SERVER_ID
    PORT=9999
    ```
4. Start the Bot
    ```bash
    npm start
    ```

## Usage
Once the bot is up and running, it will automatically start changing the server icon, bot profile picture, and status at the configured intervals.

You can change things according to you on 
``` app.js ```.

## Configuration
Adjust the intervals and settings for icon, profile picture, and status changes directly in the code. Make sure to update image paths and status messages as needed.

## Lisence
This project is licensed under the MIT License. See the [LISENCE](https://github.com/Subhajeetch/animekun-discord-bot/blob/main/LICENSE) file for details.
