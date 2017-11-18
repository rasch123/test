

var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});



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
          description: ($("div.table-responsive tr").text())
                  
     }
            });
    // => Ionic? Biz?u
	});}



	}
});



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
          description: "!c 'character name'\n!top experience\n!top melee\n!top magic\n!top distance\n!top defense",
          color: 0x642EFE,
          
     }
});
        }
    }
});


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





//keep alive
var http = require("http");
setInterval(function() {
    http.get("http://obscure-oasis-76877.herokuapp.com");
}, 300000); // every 5 minutes (300000)













