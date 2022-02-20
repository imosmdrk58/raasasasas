const conf = require("../configs/sunucuayar.json")
module.exports = async (menu) => {

    await menu.clicker.fetch();
    menu.reply.think(true)

    if (menu.values[0] === "couple") {
        menu.clicker.member.roles.cache.has(conf.sevgilimyok) &&
        menu.clicker.member.roles.cache.has(conf.lgbt)

        menu.clicker.member.roles.add(conf.sevgilimvar)
        menu.clicker.member.roles.remove(conf.sevgilimyok)
        menu.clicker.member.roles.remove(conf.lgbt) 
        setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.sevgilimvar}> rolünü aldın!`)
    },3000)  
    }
    if(menu.values[0] === "alone") {
        menu.clicker.member.roles.cache.has(conf.sevgilimvar) &&
        menu.clicker.member.roles.cache.has(conf.lgbt)

        menu.clicker.member.roles.add(conf.sevgilimyok)
        menu.clicker.member.roles.remove(conf.sevgilimvar)
        menu.clicker.member.roles.remove(conf.lgbt)  
        setTimeout(() => {
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.sevgilimyok}> rolünü aldın!`)
        },3000)            

    }
    if(menu.values[0] === "lgbt") {
        menu.clicker.member.roles.cache.has(conf.sevgilimyok) &&
        menu.clicker.member.roles.cache.has(conf.sevgilimvar)

        menu.clicker.member.roles.add(conf.lgbt)
        menu.clicker.member.roles.remove(conf.sevgilimyok)
        menu.clicker.member.roles.remove(conf.sevgilimvar)       
        setTimeout(() => {
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.lgbt}> rolünü aldın!`)
        },3000)            
    }
    if(menu.values[0] === "rolsuz") {
        menu.clicker.member.roles.remove(conf.lgbt)
        menu.clicker.member.roles.remove(conf.sevgilimyok)
        menu.clicker.member.roles.remove(conf.sevgilimvar)       
        setTimeout(() => {
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
        },3000)            
    }
    if(menu.values[0] === "vk") {
        await menu.clicker.member.roles.add("909502305232093250") 
        setTimeout(() => {
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&909502305232093250> rolünü aldın!`)
        },3000)            
    }
    if(menu.values[0] === "dc") {
        await menu.clicker.member.roles.add("909502305232093246") 
        setTimeout(() => {
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&909502305232093246> rolünü aldın!`)
        },3000)    
    }
    if(menu.values[0] === "rolsuzz") {
        await menu.clicker.member.roles.remove(["909502305232093250", "909502305232093246"])
        setTimeout(() => {
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
        },3000)   
    }

}
module.exports.conf = {
    name: "clickMenu",
  };

