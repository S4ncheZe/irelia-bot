

var prefix = "!";
var x = 0;

const Discord = require('discord.js');
const robot = new Discord.Client();
robot.login("NDMwNzkwMzY5ODQ0OTIwMzMw.DaVUaQ.svtc8maxYOOe7Wpgy2SFA00lrnc");

robot.on('guildMemberAdd', function(member) {

  member.guild.channels.find("name", "общение").sendMessage(member.toString() + ", привет. Сейчас твоя роль в игре не определена, свяжись с основателем канала, чтобы у тебя появилась роль)")

  member.addRole(member.guild.roles.find("name", "Ещё не определен"));

  
         
  
})

robot.on('message', message =>{

  if(message.content == "!саня"){
    message.channel.sendMessage("Карась");
  }

  if(message.content == "!илья"){
    message.channel.sendMessage("Не видела ни разу");
  }
    
  if(message.content == "!оля"){
    message.channel.sendMessage("Оля + Шая = CENSORED");
  }

  if(message.content == "!денис"){
    message.channel.sendMessage("За Саню и двор, стреляю в упор");
  }
  if(message.content == "!протеин"){
    message.channel.sendMessage(" Протеин + Лулу = CENSORED");
  }


  
})

robot.on('ready', () => {
    console.log('I am ready!');
  });

  robot.on('message', message =>{
    


    var words1 = ["Ясуо", "Шая", "Вел'Коз", "Зед", "Рэйкан", "Азир", "Акали", "Алистар", "Азир", "Акали", "Алистар", "Амуму", "Анивия", "Ари", "Атрокс", "Аурелион Сол", "Бард"];
       var monetr = ["Орёл", "Решка"];
        var rand1 = Math.floor(Math.random() * words1.length);
        var phrase = words1[rand1];
        var monet = Math.floor(Math.random() * monetr.length);

       if(message.content == prefix + "герой"){
         message.channel.sendMessage("Твой герой на эту игру: " + phrase);

         
       }        

       var randroll = Math.floor(Math.random() * 100);
  
  if(message.content == prefix + "roll"){
    message.reply(" и твоё число...");
    message.channel.sendMessage(randroll);
  }


  if(message.content == prefix + "monet"){
    message.reply(" и выпадает...");
    message.channel.sendMessage(monetr[monet]);
  }
  })


  robot.on('talking', message =>{
     var dinner = ["Яишницу", "Курицу", "Брокколи", "Макароны", "Котлетки :)"];

var randdin = Math.floor(Math.random() * dinner.length);

     if(message.content == "Что ты предпочитаешь на обед?"){
       message.channel.sendMessage(randdin);
     }

  })


  robot.on('lolroles', message =>{
    if(message.content == "сап"){
      var user = message.author.username;
    console.log(user);
    roleChange();
    }

  })

robot.on('roleChange', function(message){
    
    message.addRole(message.guild.roles.find(lolroles(user), "Саппорт"));
})
