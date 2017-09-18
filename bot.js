var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true

});

bot.on('ready', function (evt) {
	
    logger.info('Connected');
    logger.info('Logged in as: user');
    logger.info(bot.username + ' - (' + bot.id + ')');
});





bot.on("message", function (user, userID, channelID, message, rawEvent)

{
    //http://www.w3schools.com/jsref/jsref_substring.asp
    if (message.substring(0, 5) == "!set ") // if message starts with "!"
    {
        var command = message.substring(5); // store the command for cleaner code/reading
        
        if(command = command)
        {
          bot.on("ready", () => {
    command;
});
           
	
        }
    }
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
                message: ($("div.table-responsive").text())
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
                message: "!c 'character name'   !top experience !top melee !top magic !top distance !top defense"
            });
        }
    }
});
































