//-------------
//Begin Connect
//-------------
//Import Discord
const { Client, GatewayIntentBits, CommandInteraction} = require("discord.js");
global.config = require('./config/config.json');//Import Config
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
        checkContent(message);
        //Search Array for message url React if true in config
        if(config.monitorURLs){
            for (let i = 0; i < config.validURLs.length; i++) {
                //Found in array React
                if(message.content.includes(config.validURLs[i])){
                    addReactions(message)
                }
            }
        }
        //Video file true React
        if (config.monitorAttachments && message.attachments.size > 0){
            addReactions(message);
        }
        //Ignore Bots
        if (message.author.bot){
            return;
        }
    }
});
//-------------
//End Message Monitoring
//-------------

//-------------
//Begin Reactions
//-------------
//Change Reactions Depending on Config
function addReactions(message){
    switch (config.reactionType) {
        case 1:
            message.react("❤");
            break;
        case 2:
            message.react("⬆");
            message.react("⬇");
            break;
        default:
            return;
    }
}
//-------------
//End Reactions
//-------------

//-------------
//Start Content Cleanup
//-------------
function checkContent(message) {
    for (let i = 0; i < config.validURLs.length; i++) {
        if(message.content.includes(config.validURLs[i])){
            return;
        }
    }
    if(message.attachments.size > 0){
        return;
    }
    message.delete();
    console.log("Deleted Non-Content")
    return;
}

//-------------
//End Content Cleanup
//-------------