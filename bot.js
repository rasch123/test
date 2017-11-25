

var express = require('express');
var app     = express();




var Discord = require('discord.io');
var auth = require('./auth.json');

var bot = new Discord.Client({
   token: auth.token,
   autorun: true

});







bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});



bot.on("any",function(ev){
    bot.setPresence( {game: {name: "!commands" }});
});

//top
bot.on("message", function (user, userID, channelID, message, rawEvent)
{
    //http://www.w3schools.com/jsref/jsref_substring.asp
    if (message.substring(0, 5) == "!top ") // if message starts with "!"
    {
        var command = message.substring(5); // store the command for cleaner code/reading
       if(command == command)
        {
					
			var scraperjs = require('scraperjs');
scraperjs.StaticScraper.create('https://www.rucoyonline.com/highscores/' + command)
    .scrape(function($) {
        return $(".table-responsive a").map(function() {
            return $(this).text();
        }).get();
    })
    .then(function(news) {
        bot.sendMessage({
                to: channelID,
                message: (news)
				
				
            });
    }) }
	}
});

//kasutaja
bot.on("message", function (user, userID, channelID, message, rawEvent)
{
    //http://www.w3schools.com/jsref/jsref_substring.asp
	
    if (message.substring(0, 3) == "!c ") // if message starts with "!"
    {
        var command = message.substring(3); // store the command for cleaner code/reading
       if(command = command)
    

	{
const cheerioReq = require("cheerio-req");

cheerioReq("https://www.rucoyonline.com/characters?name=" + command, (err, $) => {
    bot.sendMessage({
                to: channelID,
               
				embed: {
			color: 0x642EFE,		
          description: ($("div.table-responsive tr").text()),
		  thumbnail:
    {
      url: 'https://www.upload.ee/thumb/7679514/knight.png'
    },
                  
     }
            });
    // => Ionic? Biz?u
	});}



	}
});


//commands
bot.on("message", function (user, userID, channelID, message, rawEvent)
{
    //http://www.w3schools.com/jsref/jsref_substring.asp
    if (message.substring(0, 1) == "!") // if message starts with "!"
    {
        var command = message.substring(1); // store the command for cleaner code/reading

        if(command == "commands")
        {
            //https://izy521.gitbooks.io/discord-io/content/Methods/Channels.html
               bot.sendMessage({
     to: channelID,
     embed: {
          title: "Commands",
          description: "!c 'character name'\n!online\n!top experience\n!top melee\n!top magic\n!top distance\n!top defense",
          color: 0x642EFE,
          
     }
});
        }
    }
});

//exodus members
bot.on("message", function (user, userID, channelID, message, rawEvent)
{
    //http://www.w3schools.com/jsref/jsref_substring.asp
    if (message.substring(0, 1) == "!") // if message starts with "!"
    {
        var command = message.substring(1); // store the command for cleaner code/reading

        if(command == "exodus")
        {
            //https://izy521.gitbooks.io/discord-io/content/Methods/Channels.html
               bot.sendMessage({
     to: channelID,
     embed: {
          title: "Exodus",
          description: "Exo Clorox\nExo Acerbic\nExo Leopead\nExo Thor\nExo Aenima\nExo Alchemy\nExo Ardivan\nExo Articorz\nExo Aw\nExo Beast\nExo Box\nExo Bully\nExo Butcher\nExo Death\nExo Deus\nExo Frieza\nExo Lady Jenn\nExo Mamba\nExo Materia\nExo Merrow\nExo Ninja\nExo Notorious\nExo Ray\nExo Saiyan\nExo Satan\nExo Serpico\nExo Sleet\nExo Size\nExo Ss Dwarf\nExo Tanner\nExo Vega\nExo Yoga Flames\nExo Yuri\nExo Godd\nExodus Eligius",
          color: 0x642EFE,
          
     }
});
        }
    }
});



//online
bot.on("message", function (user, userID, channelID, message, rawEvent)
{
    //http://www.w3schools.com/jsref/jsref_substring.asp
    if (message.substring(0, 1) == "!") // if message starts with "!"
    {
        var command = message.substring(1); // store the command for cleaner code/reading

        if(command == "online")
        {
  
  const cheerioReq = require("cheerio-req");

cheerioReq("https://www.rucoyonline.com", (err, $) => {
    bot.sendMessage({
                to: channelID,
               
				embed: {
			color: 0x642EFE,		
          description: ($("body > div > div > div > div:nth-child(4) > div > div.text-center > p:nth-child(3)").text())
                  
     }
            });
    // => Ionic? Biz?u
	});
  
  
        }
    }
});

//play
var fs = require('fs');
var voiceChannelID = "356496696282447883";
var izy = "66186356581208064";
const ytdl = require('ytdl-core');
bot.on("message", function (user, userID, channelID, message, rawEvent)
{
    //http://www.w3schools.com/jsref/jsref_substring.asp
    if (message.substring(0, 1) == "!") // if message starts with "!"
    {
        var command = message.substring(1); // store the command for cleaner code/reading

        if(command == "play")
        {
  
bot.joinVoiceChannel(voiceChannelID, function(error, events) {
  //Check to see if any errors happen while joining.
  if (error) return console.error(error);

  //Then get the audio context
  bot.getAudioContext(voiceChannelID, function(error, stream) {
    //Once again, check to see if any errors exist
    if (error) return console.error(error);

    //Create a stream to your file and pipe it to the stream
    //Without {end: false}, it would close up the stream, so make sure to include that.
   bot.voiceConnection.playRawStream(ytdl('https://www.youtube.com/watch?v=oTdr1iSqge8', {filter: 'audioonly'})); //Note: video is only a YouTube url

    //The stream fires `done` when it's got nothing else to send to Discord.
    stream.on('done', function() {
       //Handle
    });
  });
});
  
   
        }
    }
});

//leave
bot.on("message", function (user, userID, channelID, message, rawEvent)
{
    //http://www.w3schools.com/jsref/jsref_substring.asp
    if (message.substring(0, 1) == "!") // if message starts with "!"
    {
        var command = message.substring(1); // store the command for cleaner code/reading

        if(command == "stop")
        {
  
bot.leaveVoiceChannel(voiceChannelID);
  
   
        }
    }
});













