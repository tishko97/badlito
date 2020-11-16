client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find(
  channel => channel.id ==  "734054843186020492"/////// id chanali welcom lera dani.ok dlm
  );
  if (!welcomer) return;
  if (welcomer) {
    moment.locale('en-ly');
    var h = member.user;
    let norelden = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(h.avatarURL)
      .setAuthor(h.username, h.avatarURL)
      .setTitle('welcome')
      .setDescription(':small_orange_diamond:بەخێریبێی بۆ سێرڤەرەکەم بەهیوای کاتێکی خۆش:small_orange_diamond:')
      .addField(" بەخێربێیت بۆ سێرڤەری", **${member.guild.name}**)
      .addField(" تۆ کەسی ژمارە :-", member.guild.memberCount + "ی")
      .setImage("https://media.discordapp.net/attachments/673233508545855518/718592518803161125/UTfeNPSeqH.gif%22)////lera rasmek ba dle xot dani

    welcomer.send({ embed: norelden });


  }
});
