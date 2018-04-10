

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
    
  if(message.content == "!улар"){
    message.channel.sendMessage("СПАМЕР, ФИДЕР, ЛИВЕР! ");
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
    
var nikita = ["Гнар", "Люкс", "Поппи", "Сона", "Тристана", "Раммус", "Мастер Йи", "Вейгар", "Сорака", "Нуну", "Корки", "Джин", "Энни", "Рамбл", "Рэйкан", "Экко", "Ноктюрн", "Ривен", "Эш", "Гарен", "Ургот", "Алистар", "Моргана", "Акали", "Джакс", "Зилеан", "Камилла", "Варвик", "Сивир", "Ле Блан", "Амуму", "Кейл", "Райз", "Твистед Фэйт", "Фиддлстикс"];
var olya = ["Мисс Фортуна", "Шая", "Ари", "Эш", "Квинн", "Блицкранк", "Зиггс", "Насус", "Энни", "Варвик", "Дрейвен", "Люциан", "Поппи", "Сивир"];
var deniswords = ["Ка'Зигс", "Рек'Сай", "Атрокс", "Клед", "Орн", "Ургот", "Каин", "Ког'Мао", "Джакс", "Аурелион Сол", "Шая", "Вел'Коз", "Киндред", "Скарнер", "Варвик", "Ирелия", "Джин", "Гарен", "Брэнд", "Чо'Гат", "Энни", "Эш"];
    var words1 = ["Ясуо", "Шая", "Вел'Коз", "Зед", "Рэйкан", "Азир", "Акали", "Алистар", "Азир", "Акали", "Алистар", "Амуму", "Анивия", "Ари", "Атрокс", "Аурелион Сол", "Бард"];
       var monetr = ["Орёл", "Решка"];
       var protein = ["Амуму", "Гарен", "Джакс", "Жанна", "Зед", "Зиггс", "Кейл", "Корки", "Мастер Йи", "Нуну", "Поппи", "Райз", "Рэйкан", "Синджед", "Сона", "Сорака", "Триндамир", "Удир", "Физз", "Эш"];
       var denisran = Math.floor(Math.random() * deniswords.length);
       var proteinran = Math.floor(Math.random() * protein.length);
        var rand1 = Math.floor(Math.random() * words1.length);
        var phrase = words1[rand1];
        var nikitaran = Math.floor(Math.random() * nikita.length);
        var monet = Math.floor(Math.random() * monetr.length);
        var olyaran = Math.floor(Math.random() * olya.length);

       if(message.content == prefix + "hikari"){
         message.channel.sendMessage("Твой герой на эту игру: " + olya[olyaran]);
       }
       if(message.content == prefix + "nikita"){
         message.channel.sendMessage("Твой герой на эту игру: " + nikita[nikitaran]);
       }
       if(message.content == prefix + "denis"){
         message.channel.sendMessage("Твой герой на эту игру: " + deniswords[denisran]); 
       }       
       if(message.content == prefix + "protein"){
         message.channel.sendMessage("Твой герой на эту игру: " + protein[proteinran]);
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
