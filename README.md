
# Discord.UpVoteBot

A Simple Discord Bot to monitor a  specified channel for video URLs/attachments and add reactions to them

General idea is for a monthly media competition on a discord and allow the community to vote for the ones they like the best.


## Config

 - **token** - Your Discord Bot Token.
 - **upVoteChannel** - Developer ID of the channel you want to monitor.
 - **reactionType** - **1** or **2**.
 >Setting to 1 will do a Heart Emoji, and 2 will do an Up/Down Arrow.
 - **validURLs** - Array of URLs you wish to monitor for.


## Installation
### Windows

 - [ ] Ensure [Node.js](https://nodejs.org/en/) is installed on your
       machine.
 - [ ] Put the folder where ever you want to store it.
 - [ ] In the root of the folder type `cmd` in the address bar on windows
 - [ ] In the open command prompt run `npm i` to install the node modules
 - [ ] Fill out your config
 - [ ] In the open command prompt run `node index.js`to run the bot
