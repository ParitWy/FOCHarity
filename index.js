const discord = require('discord.js');
const fetch = require('node-fetch')
const client = new discord.Client();
const xp = require("./xp.json")
prefix = "q!"
xpRoles = ["nolife 1.1","nolife 1.2","nolife 1.3","nolife 1.4","nolife 1.5","nolife 1.6","nolife 1.7","nolife 1.8","nolife 1.9","nolife 2.0",]

client.on('ready', () => {
    console.log('prai');
})
client.on('message', msg => {
    if(msg.author.bot)return;
    
    var xpAdd = Math.floor(Math.random()*5)+1;
    if(!xp[msg.author.id]){
        xp[msg.author.id] = {
            xp: 0,
            role: 1
        };
    }
    let nxtLvl = xp[msg.author.id].role * 100
    xp[msg.author.id].xp = xp[msg.author.id].xp + xpAdd;
    
    if ((xp[msg.author.id].xp >= nxtLvl) && xp[msg.author.id].role <= 11 ){
        xp[msg.author.id].role = xp[msg.author.id].role + 1
    switch(xp[msg.author.id].role) {   
       case 2: 
            const NoLife1 = msg.guild.roles.cache.find(role => role.name === xpRoles[1]);
            msg.member.roles.add(NoLife1);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[1]}`);
            xp[msg.author.id].xp = 0;
            break;
        case 3:
            const NoLife2 = msg.guild.roles.cache.find(role => role.name === xpRoles[2]);
            msg.member.roles.add(NoLife2);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[2]}`);
            xp[msg.author.id].xp = 0;
            break;
       
        case 4:
            const NoLife3 = msg.guild.roles.cache.find(role => role.name === xpRoles[3]);
            msg.member.roles.add(NoLife3);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[3]}`);
            xp[msg.author.id].xp = 0;
            break;
        case 5:
            const NoLife4 = msg.guild.roles.cache.find(role => role.name === xpRoles[4]);
            msg.member.roles.add(NoLife4);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[4]}`);
            xp[msg.author.id].xp = 0;
            break;
                  
         case 6 :
            const NoLife5 = msg.guild.roles.cache.find(role => role.name === xpRoles[5]);
            msg.member.roles.add(NoLife5);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[5]}`);
            xp[msg.author.id].xp = 0;
            break;    
        case 7:
            const NoLife6 = msg.guild.roles.cache.find(role => role.name === xpRoles[6]);
            msg.member.roles.add(NoLife6);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[6]}`);
            xp[msg.author.id].xp = 0;
            break;    
        
        case 8:
            const NoLife7 = msg.guild.roles.cache.find(role => role.name === xpRoles[7]);
            msg.member.roles.add(NoLife7);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[6]}`);
            xp[msg.author.id].xp = 0;
            break;    
        case 9:
            const NoLife8 = msg.guild.roles.cache.find(role => role.name === xpRoles[8]);
            msg.member.roles.add(NoLife8);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[8]}`);
            xp[msg.author.id].xp = 0;
            break;    
        case 10:
            const NoLife9 = msg.guild.roles.cache.find(role => role.name === xpRoles[9]);
            msg.member.roles.add(NoLife9);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[9]}`);
            xp[msg.author.id].xp = 0;
            break;    
        case 11:
            const NoLife10 = msg.guild.roles.cache.find(role => role.name === "🧙 mage noir 🧙");
            msg.member.roles.add(NoLife10);
            msg.channel.send(`${msg.author.username} est maintenant ${xpRoles[10]}`);
            xp[msg.author.id].xp = 0;
            break;    


    }
    }
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const args_s = msg.content.slice(command.length + prefix.length);

   


    if(command == `server`){
        msg.channel.send(`Le nom de ce serveur est : ${msg.guild.name}\nLe nombre de membres est : ${msg.guild.memberCount}`)
    }
    else if(command == `un`){
        msg.channel.send(`Votre pseudo est ${msg.author.username}`)
    }
    else if (command === 'send') {
        if (!args.length) {
            return msg.channel.send(`Il faut mettre qqch, ${message.author}!`);
        }
    
        msg.channel.send(`${args_s}`);
    }
    else if(command == 'kick'){
        const member1 = msg.mentions.members.first();
      // If the member is in the guild
      const kicked = msg.guild.member(member1);
      if(kicked){
        if (msg.author.hasPermission('KICK_MEMBERS')) {
            
        
      if (member) {
        kicked
          .kick("quelqu'un t'a kick")
          .then(() => {
            msg.channel.send(`${kicked.username} a été kick comme une merde`);
            kicked.send("t'as été kick")
          })
          .catch(err => {
           
            msg.reply('Non');
           
            console.error(err);
          });
      } else {
        msg.reply("Il est pas là igo");
      }}else{
          msg.channel.send("t'as pas les perms alors tg");
      }}
    } 
    if(command == "ban"){
        const member2 = msg.mentions.users.first
        const banned = msg.guild.member(member2)
        if(banned){
            if(msg.member.hasPermission("BAN_MEMBERS")){
            banned.ban(
                {
                    reason :'jsp' 
                }
                .then(()=>{
                   msg.channel.send(`${member2.username} a été ban comme une merde`);
                   member2.send("banned comme une merde");
                })
                .catch(err => {
                    msg.channel.send("non");
                    console.error(err)
                })
            )
            }
        }else{
          msg.channel.send("t'as pas les perms igo")
        }
    }
    
    if(command == "roles"){
       msg.channel.send("balek d'ajouter cette fonction")
    }
    else if(command == "xp"){
        msg.channel.send(`Votre xp est : ${xp[msg.author.id].xp + ((xp[msg.author.id].role - 1) * 100)}\nVotre Niveau est ${xp[msg.author.id].role}`)
    }
    else if(command == "nxt-lvl"){
        msg.channel.send(`Il vous reste ${nxtLvl - xp[msg.author.id].xp} d'xp avant le prochain niveau`)
    }
    else if(command == "furry" || command == "fuck"){
        msg.channel.send(":middle_finger:")
    }
    if(command === "meme") {
    try{   
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(json => {
        let embed = new discord.MessageAttachment(json.url)
        msg.channel.send(embed);
        msg.edit(embed)
    });
}
catch(err){
    console.error(err)
}
    }
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '717375282188648933');
    if (!channel) return;
    channel.send(`Fais pas le con ${member}`);
    try{
    let NoLifeOne = guild.roles.cache.find(role => role.name === "nolife 1.1");
    if(!NoLifeOne)return;
    member.roles.cache.add(NoLifeOne.id);
    }
    catch(error){
    console.log('role de merde')
    }
  });
client.login(process.env.BOT_TOKEN);
