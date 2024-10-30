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
    
    const logChannel = guild.channels.cache.get('1262339592393330708');
    if (!logChannel) return console.log('Log channel not found.');

    try {
        
        await guild.setIcon(fs.readFileSync(icons[currentIndex]));
        
        const message = `Changed icon to ${icons[currentIndex]}`;
        await logChannel.send(message);
        
        currentIndex = (currentIndex + 1) % icons.length;
    } catch (error) {
        console.error('Failed to change icon:', error);
    }
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    setInterval(changeIcon, 1 * 60 * 1000);
});

// Log in to Discord
client.login(TOKEN);