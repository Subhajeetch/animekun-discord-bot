const express = require('express');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();
const fs = require('fs');



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


const app = express();

app.get('/', async (req, res) => {
  return res.send('Bot Alive');
})







// you can change the values below

const TOKEN = process.env.TOKEN; //bot token
const serverID = process.env.SERVER_ID; // server id
const PORT = process.env.PORT; // random port (eg1000) (if you deploying on a server);


const icons = [
  'images/snow_animekun.gif',
  'images/picture_1.jpg',
  'images/picture_2.jpg',
  'images/picture_3.jpg',
  'images/picture_4.jpg',
  'images/picture_5.jpg',
  'images/picture_6.jpg',
  'images/picture_7.jpg',
  'images/picture_8.jpg',
  ]; //USE YOUR OWN PICTURES

const avatars = [
  'images/snow_animekun.gif',
  'images/picture_1.jpg',
  'images/picture_2.jpg',
  'images/picture_3.jpg',
  'images/picture_4.jpg',
  'images/picture_5.jpg',
  'images/picture_6.jpg',
  'images/picture_7.jpg',
  'images/picture_8.jpg',
  ]; //USE YOUR OWN PICTURES


const statuses = [
  { name: 'You Pooping', type: ActivityType.Watching },
  { name: 'your Nonsense', type: ActivityType.Listening },
  { name: 'with your Heart', type: ActivityType.Playing },
  { name: 'Animekun.lol', type: ActivityType.Watching },
  { name: 'your excuses', type: ActivityType.Listening },
  { name: 'you pretend to work', type: ActivityType.Watching },
  { name: 'nice... for now!', type: ActivityType.Playing },
  { name: 'you struggle', type: ActivityType.Watching },
  { name: 'dumb', type: ActivityType.Playing },
  { name: 'you panic', type: ActivityType.Watching },
  { name: 'it cool', type: ActivityType.Playing },
  { name: 'your mess', type: ActivityType.Watching },
  { name: 'along', type: ActivityType.Playing },
  { name: 'your every move', type: ActivityType.Watching },
  { name: 'hide and seek', type: ActivityType.Playing },
  { name: 'the world burn', type: ActivityType.Watching },
  { name: 'your problems', type: ActivityType.Listening },
  { name: 'your every mistake', type: ActivityType.Watching },
  { name: 'with your mind', type: ActivityType.Playing },
  { name: 'your problems', type: ActivityType.Listening },
  { name: 'nice with everyone', type: ActivityType.Playing },
  { name: 'you fail again', type: ActivityType.Watching },
  { name: 'endless drama', type: ActivityType.Listening },
  { name: 'with broken hearts', type: ActivityType.Playing },
  { name: 'you overthink everything', type: ActivityType.Watching },
  { name: 'endless excuses', type: ActivityType.Listening },
  { name: 'borrowed time', type: ActivityType.Playing },
  { name: 'you complain', type: ActivityType.Listening },
  { name: 'you lose control', type: ActivityType.Watching },
  { name: 'bad advice', type: ActivityType.Listening },
  { name: 'tricks on you', type: ActivityType.Playing },
  { name: 'your bold moves', type: ActivityType.Watching },
  { name: 'daily drama', type: ActivityType.Listening },
  { name: 'you act tough', type: ActivityType.Watching },
  { name: 'dumb today', type: ActivityType.Playing },
  { name: 'your cringe texts', type: ActivityType.Watching },
  { name: 'with fire', type: ActivityType.Playing },
]; //ADD ACORDING TO YOU


const serverIconChangeTime = 5; //number (in minutes)
const botIconChangeTime = 5; //number (in minutes)
const botStatusChangeTime = 1; //number (in minutes)

// don't change below this!



/*



let currentIndex = 0;

// Function to change server icon
async function changeIcon() {
    const guild = client.guilds.cache.get(serverID);
    if (!guild) return console.log('Server not found.');
    
    
    try {
        
        await guild.setIcon(fs.readFileSync(icons[currentIndex]));
        
        currentIndex = (currentIndex + 1) % icons.length;
    } catch (error) {
        console.error('Failed to change icon:', error);
    }
};

*/


let currentAvatarIndex = 0;

// function to change the bot pfp
async function changeBotAvatar() {

    try {
        await client.user.setAvatar(fs.readFileSync(avatars[currentAvatarIndex]));
        currentAvatarIndex = (currentAvatarIndex + 1) % avatars.length;
    } catch (error) {
        console.error('Failed to change bot avatar:', error);
    }
};



let currentStatusIndex = 0;

// function to change the bot status
function changeStatus() {
    const status = statuses[currentStatusIndex];
    client.user.setActivity(status.name, { type: status.type });
    currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
};




client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
    //setInterval(changeIcon, serverIconChangeTime * 60 * 1000);
    setInterval(changeBotAvatar, botIconChangeTime * 60 * 1000);
    setInterval(changeStatus, botStatusChangeTime * 60 * 1000);
});



client.on('messageCreate', async message => {
  if (message.author.bot) return;  // Ignore messages from bots

  // Ping command
  if (message.content === '!ping') {
    const ping = Date.now() - message.createdTimestamp;
    const apiPing = Math.round(client.ws.ping);
    await message.reply(`Pong! 🏓\nServer Latency: ${ping}ms\nAPI Latency: ${apiPing}ms`);
  }
});



// Log in to Discord
client.login(TOKEN);

// node server start
app.listen(PORT, () => console.log("Server Started!"));
 
