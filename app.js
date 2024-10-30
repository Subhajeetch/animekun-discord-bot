const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const TOKEN = process.env.TOKEN;
const serverID = process.env.SERVER_ID;


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Array of image file paths for icons
const icons = ['images/animekun_blue.gif', 'images/dewali_animekun.gif', 'images/snow_animekun.gif'];
let currentIndex = 0;

// Function to change server icon
async function changeIcon() {
    const guild = client.guilds.cache.get(serverID);
    if (!guild) return console.log('Server not found.');

    try {
        
        await guild.setIcon(fs.readFileSync(icons[currentIndex]));
        console.log(`Changed icon to ${icons[currentIndex]}`);
        currentIndex = (currentIndex + 1) % icons.length; // Cycle through images
    } catch (error) {
        console.error('Failed to change icon:', error);
    }
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    setInterval(changeIcon, 1 * 60 * 1000); // 1 minutes in milliseconds
});

// Log in to Discord
client.login(TOKEN);