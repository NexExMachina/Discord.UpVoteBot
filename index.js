//-------------
//Begin Connect
//-------------
//Import Discord
const { Client, GatewayIntentBits, CommandInteraction} = require("discord.js");
global.config = require('./config/config.json');//Import Config
global.functions = require('./functions/functions.js');//Import Functions
    //Create Client and announce intents
    const client = new Client({
        fetchAllMembers: true,
        partials: ["CHANNEL", "MESSAGE"],
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
    });
    // login using the provided discord token and report ready
    client.login(config.token)
        .then(r => client.on("ready", () =>{
            console.log("I am ready!");
        }));
//-------------
//End Connect
//-------------

//-------------
//Begin Message Monitoring
//-------------
client.on("messageCreate", (message) => {
    //Run if channelID matches config
    if(message.channelId === config.upVoteChannel){
        //Delete if not Content
        if(validateMessage(message)){
            addReactions(message)
            console.log("Valid Content - Reacted")
        } else{
            message.delete();
            console.log("Deleted Non-Content");
        }
}
}
);
//-------------
//End Message Monitoring
//-------------



