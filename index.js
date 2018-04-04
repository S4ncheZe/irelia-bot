const Discord = require('discord.js');
const robot = new Discord.Client();
robot.login("NDMwNzkwMzY5ODQ0OTIwMzMw.DaVUaQ.svtc8maxYOOe7Wpgy2SFA00lrnc");

robot.on('guildMemberAdd', function(member) {

  member.guild.channels.find("name", "общение").sendMessage(member.toString() + ", привет. Сейчас твоя роль в игре не определена, свяжись с основателем канала, чтобы у тебя появилась роль)")

  member.addRole(member.guild.roles.find("name", "Ещё не определен"));

});

robot.on('message', message =>{
      
  if(message.content == "Денис"){
    message.reply("Люблю Дениса <3");
  }

})

robot.on('ready', () => {
    console.log('I am ready!');
  });
