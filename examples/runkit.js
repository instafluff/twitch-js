const TwitchJs = require('twitch-js').default;

// Provide your token, username and channel. You can generate a token here:
// https://twitchapps.com/tmi/
const token = process.env.TWITCH_TOKEN;
const username = process.env.TWITCH_USERNAME;

const channel = 'twitchapis';

// Instantiate clients.
const { api, chat, chatConstants } = new TwitchJs({ token, username });

// Get featured streams.
api.get('streams/featured').then(response => {
  console.log(response);
  // Do stuff ...
});

// Listen to all events.
const log = msg => console.log(msg);
chat.on(chatConstants.EVENTS.ALL, log);

// Connect ...
chat.connect().then(() => {
  // ... and then join the channel.
  chat.join(channel);
});
