var prefix = "!";
var x = 0;

const Discord = require('discord.js');
const robot = new Discord.Client();
robot.login("NDMwNzkwMzY5ODQ0OTIwMzMw.DaVUaQ.svtc8maxYOOe7Wpgy2SFA00lrnc");

robot.on('guildMemberAdd', function(member) {

  member.guild.channels.find("name", "общение").sendMessage(member.toString() + ", привет. Сейчас твоя роль в игре не определена, свяжись с основателем канала, чтобы у тебя появилась роль)")

  member.addRole(member.guild.roles.find("name", "Ещё не определен"));

});

robot.on('message', message =>{
      
  if(message.content == "Что скажешь о Денисе?"){
    message.channel.sendMessage("Люблю Дениса <3");
  }
  if(message.content == "Что скажешь о Протеине?"){
    message.channel.sendMessage(" Протеин + Лулу = CENSORED");
  }

})

robot.on('ready', () => {
    console.log('I am ready!');
  });

  robot.on('message', message =>{
    


    var words1 = ["Ясуо", "Шая", "Вел'Коз", "Зед", "Рэйкан", "Азир", "Акали", "Алистар", "Азир", "Акали", "Алистар", "Амуму", "Анивия", "Ари", "Атрокс", "Аурелион Сол", "Бард"];
       
        var rand1 = Math.floor(Math.random() * words1.length);
        var phrase = words1[rand1];
        var p1, p2, p3, p4, p5;

       if(message.content == prefix + "герой"){
         message.channel.sendMessage("Твой герой на эту игру: " + phrase);
       }

       while(x == 5){
         if(message.content == "лес" || message.content == "топ" || message.content == "сап", "саппорт" || message.content == "адк" || message.content == "мид"){
            p1 = message.author;
            console.log(p1);
         }
       }
     
               
  })
