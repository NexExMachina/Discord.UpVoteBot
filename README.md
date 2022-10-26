# Discord.UpVoteBot

A Simple Discord Bot to monitor a  specified channel for video URLs/attachments and add reactions to them

General idea is for a monthly media competition on a discord and allow the community to vote for the ones they like the best.

## Config

 - **token**
 `"token" | Your Discord Bot Token`
 - **upVoteChannel**
 `"123456789012345678" | Developer ID of the channel you want to monitor`
 - **reactionType**
 `1 or 2 | Setting to 1 will do a Heart Emoji, and 2 will do an Up/Down Arrow.`
 - **monitorURLs**
`true / false | Will watch a channel for URLs in the array below if true`
 - **validURLs**
 `["url1", "url2", "url3"] | Set which website URLs you wish to monitor (monitorURLs MUST be true)`
 - **monitorAttachments**
`true / false | Will watch a channel for attachements if true`
- **deleteNonContent**
`true / false | Delete anything not deemed content by the above content (URL in list or has Attachment)`

## Installation
### Windows

 - [ ] Ensure [Node.js](https://nodejs.org/en/) is installed on your
       machine.
 - [ ] Put the folder where ever you want to store it.
 - [ ] In the root of the folder type `cmd` in the address bar on Windows.
 - [ ] In the open command prompt run `npm i` to install the node modules.
 - [ ] Fill out your config.
 - [ ] In the open command prompt run `node index.js`to run the bot.