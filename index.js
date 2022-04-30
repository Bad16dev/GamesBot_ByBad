const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = process.env.PREFIX
client.on("ready", () =>{
console.log(`${client.user.username} Ready..`)
client.user.setActivity(`Stay Home | ${prefix}help`, {type:"LISTENING"})
})

client.on("message", async message =>{
 if(message.content === prefix + "help"){
 const embed = new Discord.MessageEmbed()
.setAuthor("الألـعـاب الـخـاصـة بـالـبـوت",message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setDescription(`**
:video_game: \`حاول كتابة الكلمة بسرعة\`
${prefix}fast,اسرع${prefix}

:video_game: \`حاول تفكيك الكلمة بسرعة\`
${prefix}fkk,فكك${prefix}

:video_game: \`حاول تخمين ضد الكلمة بسرعة\`
${prefix}opposite,مضاد${prefix}

:video_game: \`حاول كتابة الكلمة بشكل صحيح بسرعة\`
${prefix}reverse,عكس${prefix}

:video_game: \`حاول كاتبة جمع الكلمة بسرعة\`
${prefix}plural,جمع${prefix}

:video_game: \`حاول كاتبة مفرد الكلمة بسرعة\`
${prefix}single,مفرد${prefix}

:video_game: \`حاول حل المسألة بسرعة\`
${prefix}math,رياضيات${prefix}

:video_game: \`حاول كتابة الارقام بسرعة\`
${prefix}number,ارقام${prefix}

:video_game: \`حاول تخمين عدد الاحرف بسرعة\`
${prefix}letters,احرف${prefix}

:video_game: \`حاول تخمين البلد بسرعة\`
${prefix}flags,اعلام${prefix}

:video_game: \`حاول تخمين الشعار بسرعة\`
${prefix}brands,شعار${prefix}

:video_game: \`حاول ايجاد ترجمة الكلمة بسرعة\`
${prefix}tran,ترجمة${prefix}

:video_game: \`حاول تخمين عاصمة البلد بسرعة\`
${prefix}capitals,عواصم${prefix}

:video_game: \`حاول تخمين اسم المشهور بسرعة\`
${prefix}famous,مشاهير${prefix}

If You Want To Make One Click [Here](https://www.youtube.com/channel/UCKh6D-uY87Bb0y0w7XqUlzQ)
If You Want Help Click [Here](https://discord.gg/flou)
**`)
.setFooter(`By Flou Team.`,message.author.avatarURL())
 message.channel.send(embed)
 } 
    
///FAST
if(message.content === prefix + "fast" || message.content === prefix + "اسرع"){
  const fast = [ 'https://cdn.discordapp.com/attachments/969626492629827664/969627006037799002/75b09d8432c99cb9.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969627005794517042/33f025f10b9c9d6c.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969627005513523230/6666e006bbc7782d.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969627005291208765/099fe66fdf37b39f.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969627004997603398/59c6d7ff95685253.png',
         'https://cdn.discordapp.com/attachments/969626492629827664/969627004733390968/641b2f60a4f306a6.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969627004427198514/0c5d3f1b1d5285b7.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969627004171329556/6618125b026aa042.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969626604424802324/47d0d2b55b3a42d1.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969626604244467732/f839c6d40fe6c0f9.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969626604022161498/ecc992e203b1ed93.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969626603753730129/80eedb18bb39ff88.png',
                'https://cdn.discordapp.com/attachments/969626492629827664/969626603548188723/37386c080f086c27.png',
                "https://cdn.discordapp.com/attachments/969626492629827664/969638207513853992/73c3ebd5fbeae18a.png",
                "https://cutt.ly/EGTK3Kv",
                "https://cutt.ly/uGTK5s8",
                "https://cutt.ly/nGTLwyt"
  ]
  const fs = [
    "يوتيوب",
    "مواقف صعبة",
    "ملك",
    "ماين كرافت",
    "فوتوشوب",
    "عيد سعيد",
    "رمضان كريم",
    "ديسكورد",
    "خطر",
    "بطتنا بطت بطتكم",
    "بروبوت اسوء بوت",
    "باتل قراوند",
    "القمة",
    "سبحان الله وبحمده",
    "steam",
    "clouds",
    "bad"
  ]  
  let fas = Math.floor(Math.random() * fast.length)
  message.channel.send(fast[fas])
 const filter = m => m.content.includes(fs[fas]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}

///FKK
if(message.content === prefix + "fkk" || message.content === prefix + "فكك"){
  const f = [ "https://cdn.discordapp.com/attachments/969626492629827664/969628963985039450/discord.png",
             "https://cdn.discordapp.com/attachments/969626492629827664/969636174786342912/flou_codes.png",
             "https://cdn.discordapp.com/attachments/969626492629827664/969636175046377553/698785e22467f204.png",
             "https://cdn.discordapp.com/attachments/969626492629827664/969636175365148713/b2235387faa91b8d.png",
             "https://cdn.discordapp.com/attachments/969626492629827664/969636175625216020/221b1b1027b63fd9.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969636175868493864/5c313dff41dbdfef.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969636176065622037/ac7f41f3b2413325.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969636176283713666/7d1637f8841600d2.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969636176501805096/2c23798601b99fb9.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969636176749273108/f9a8f36607f2578e.png",


             
             
  ]
  const fk = [
    "d i s c o r d",
    "f l o u c o d e s",
    "ا ل ل غ ة ا ل ع ر ب ي ة",
    "ا ن ل م ت ن ف ع ل ا ت ض ر",
    "ب ر و ب و ت ا س و ء ب و ت",
    "ج ذ ع",
    "د خ ا ن",
    "ش ا ي ب",
    "ك ا ح ل",
    "ن ظ ا م",
    
    
    
  ]  
  let fkk = Math.floor(Math.random() * f.length)
  message.channel.send(f[fkk])
 const filter = m => m.content.includes(fk[fkk]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
//LETTERS
if(message.content === prefix + "letters" || message.content === prefix + "احرف"){
  const l = [ "https://cutt.ly/DGTKaRZ",
              "https://cutt.ly/bGTKo4U",
              "https://cutt.ly/MGTKudC",
              "https://cutt.ly/zGTKtWC",
              "https://cutt.ly/9GTKeTV",
              "https://cutt.ly/aGTKqCJ",
              "https://cutt.ly/nGTJ5sY",
              "https://cutt.ly/jGTJ8JJ",
              "https://cutt.ly/WGTKmSc"                
  ]
  const lt = [
    "11",
"9",
"8",
"7",
"6",
"5",
"4",
"3",
"2"    
  ]  
  let letters = Math.floor(Math.random() * l.length)
  message.channel.send(l[letters])
 const filter = m => m.content.includes(lt[letters]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
//CAPITALS
  if(message.content === prefix + "capitals" || message.content === prefix + "عواصم"){
  const c = [ "https://cdn.discordapp.com/attachments/969626492629827664/969644498923687966/1206cecff9f8b186.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969644498684620800/16008d4d7a888678.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969644498441367572/20e50dc82d3b3f36.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969644498185486446/a1347f46f6c5efd9.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969644497933860864/f16faeece99f097e.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969644497698951188/6447352e82635a79.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969644497296310292/0d585afd69ff0804.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969644497078210580/771bda08a8c78868.png",
  ]
  const cp = [
    "يريفان",
"هافانا",
"موسكو",
"موروني",
"بكين",
"برلين",
"باريس",
"اثينا"
  ]  
  let capitals = Math.floor(Math.random() * c.length)
  message.channel.send(c[capitals])
 const filter = m => m.content.includes(cp[capitals]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}

///Math
if(message.content === prefix + "math" || message.content === prefix + "رياضيات"){
  const m = [ "https://cutt.ly/HGTZKfD",
              "https://cutt.ly/dGTZCIl",
              "https://cutt.ly/oGTZNIG",
              "https://cutt.ly/GGTZ2FJ",
              "https://cutt.ly/dGTZ8dr",
              "https://cutt.ly/bGTZ5ES",
              "https://cutt.ly/6GTXtBF",
              "https://cutt.ly/0GTXiBs",
             "https://cutt.ly/CGTXsRA",
  ]
  const mt = [
    "113",
"78",
"72",
"52",
"49",
"35",
"27",
"21",
"12",
  ]  
  let math = Math.floor(Math.random() * m.length)
  message.channel.send(m[math])
 const filter = m => m.content.includes(mt[math]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
///Numbers
  
if(message.content === prefix + "numbers" || message.content === prefix + "ارقام"){
  const n = [ "https://cutt.ly/DGTVLK7",
              "https://cutt.ly/VGTVCyT",
              "https://cutt.ly/eGTVBFE",
              "https://cutt.ly/ZGTVM6L",
              "https://cutt.ly/3GTV0Da",
              "https://cutt.ly/8GTV9Nc",
              "https://cutt.ly/UGTV48V",
              "https://cutt.ly/lGTV6EU",
             "https://cutt.ly/PGTBw5v",
             "https://cutt.ly/FGTBtFR"
  ]
  const nm = [
    "97431",
"97413",
"54179",
"35542",
"26780",
"17540",
"15975",
"14747",
"12345",
    "01472"
  ]  
  let numbers = Math.floor(Math.random() * n.length)
  message.channel.send(n[numbers])
 const filter = m => m.content.includes(nm[numbers]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
//OPO
  
if(message.content === prefix + "opposite" || message.content === prefix + "مضاد"){
  const o = [ "https://cdn.discordapp.com/attachments/969626492629827664/969652054580682762/9b8978ccf14f15e5.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969652054354178108/2acf81992121ff47.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969652054152843334/fd65adf313e1bc73.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969652053917978704/42fdbf74ce201746.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969652053687279636/da49c8c1ac2feefc.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969652053381099520/17e0ada417d4acf2.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969652053079097395/baa5f6225d711a80.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969652053079097395/baa5f6225d711a80.png",
             "https://cdn.discordapp.com/attachments/969626492629827664/969652052810682428/e0f7707e958f44ad.png"
  ]
  const op = [
    "كاذب",
"ضوضاء",
"ضعيف",
"صعب",
"بخيل",
"النشاط",
"المساء",
"السعادة"
  ]  
  let opposite = Math.floor(Math.random() * o.length)
  message.channel.send(o[opposite])
 const filter = m => m.content.includes(op[opposite]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
///Plu

if(message.content === prefix + "plural" || message.content === prefix + "جمع"){
  const p = [ 
              "https://cdn.discordapp.com/attachments/969626492629827664/969653190188466236/aecad9c67f2b78f3.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969653189831979078/42f17263084135b9.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969653189542547476/44a87fd070692424.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969653189257351248/51a86ea026692b0c.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969653188972146718/d63cca466a84c390.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969653188615610378/2e4a95f268801afb.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969653185662816256/a43fa0e189fb6726.png",
             "https://cdn.discordapp.com/attachments/969626492629827664/969653185377624064/cd3c2fe34b6fadde.png"
  ]
  const pl = [
    "موائد",
"كراسي",
"كراريس",
"سيارات",
"دول",
"ايادي",
"العاب",
"اقدام"
  ]  
  let plural = Math.floor(Math.random() * p.length)
  message.channel.send(p[plural])
 const filter = m => m.content.includes(pl[plural]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
///Rew
  
if(message.content === prefix + "reverse" || message.content === prefix + "عكس"){
  const r = [ 
              "https://cdn.discordapp.com/attachments/969626492629827664/969654815862947890/122424ee6a1b2688.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969654815636488222/3c1607212a23cf99.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969654815435157636/89eecb903014db82.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969654815187689542/6540fbe5a6e2a65a.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969654814956994570/357baa7990f78c6e.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969654814659182663/612c0ec7dd467021.png",
  ]
  const re = [
    "واسعا",
"نرتهن",
"لتكون",
"سيدي",
"سلمان",
"العمل"
  ]  
  let reverse = Math.floor(Math.random() * r.length)
  message.channel.send(r[reverse])
 const filter = m => m.content.includes(re[reverse]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}



  ///Singl
  
if(message.content === prefix + "single" || message.content === prefix + "مفرد"){
  const s = [ 
              "https://cdn.discordapp.com/attachments/969626492629827664/969655823594844231/d58ceb5fe52172c6.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969655823389315092/f61da2bc17c3c38b.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969655823200583690/e6bf11f3228e18c3.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969655822999240844/5c1572bdb14fe464.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969655822659510272/4fe7f8734fc78080.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969655822307192913/08979d3eaad702ca.png",
    "https://cdn.discordapp.com/attachments/969626492629827664/969655821992611840/21b8b96fdb4b6dad.png",
    "https://cdn.discordapp.com/attachments/969626492629827664/969655821627686973/518f15ac2e97f76c.png"
  ]
  const si = [
    "يوم",
"وقت",
"موقع",
"كتاب",
"صحن",
"حساب",
    "جهاز",
    "جبل"
  ]  
  let single = Math.floor(Math.random() * s.length)
  message.channel.send(s[single])
 const filter = m => m.content.includes(si[single]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
////Trans
  
if(message.content === prefix + "tran" || message.content === prefix + "ترجمة"){
  const t = [ 
              "https://cdn.discordapp.com/attachments/969626492629827664/969656968392347698/0838e4c02e13a4f6.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969656968161669182/bf4a9fff2b039419.png",
              "https://cdn.discordapp.com/attachments/969626492629827664/969656967947776000/332d9c176c2f87ce.png",
"https://cutt.ly/QGT0ViD",              "https://cutt.ly/eGT0BMV",
              "https://cutt.ly/TGT01Wc",
  ]
  const tr = [
    "توت",
"تفاح",
"المريخ",
"sculptor",
"group",
"geologist"
  ]  
  let tran = Math.floor(Math.random() * t.length)
  message.channel.send(t[tran])
 const filter = m => m.content.includes(tr[tran]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 
.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
///Flags
  
if(message.content === prefix + "flags" || message.content === prefix + "اعلام"){
  const flg = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/560px-Flag_of_Iraq.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/560px-Flag_of_Algeria.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/560px-Flag_of_Syria.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/560px-Flag_of_Yemen.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/560px-Flag_of_Yemen.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/560px-Flag_of_Lebanon.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/560px-Flag_of_Egypt.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/560px-Flag_of_the_United_Arab_Emirates.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/560px-Flag_of_the_People%27s_Republic_of_China.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/560px-Flag_of_France.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/560px-Flag_of_Germany.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/560px-Flag_of_Russia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/280px-Flag_of_Cuba.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/280px-Flag_of_Bhutan.svg.png"
  
  ]
  const flgs = [
  "العراق", 
    "الجزائر", 
    "سوريا", 
    "اليمن", 
    "لبنان", 
    "تركيا", 
    "مصر", 
    "الإمارات", 
    "الصين", 
    "فرنسا", 
    "ألمانيا", 
    "روسيا",
    "كوبا",
    "بوتان"
  
  ]
  
  let flags = Math.floor(Math.random() * flg.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle("**ما هي هذه الدولة؟**")
.setImage(flg[flags])
  message.channel.send(embed)
 const filter = m => m.content.includes(flgs[flags]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
///Brands

if(message.content === prefix + "brands" || message.content === prefix + "شعار"){
  const lo = [
  "https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png", 
  "https://wiki-signup.com/wp-content/uploads/2019/06/viber-image.jpg", 
  "https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/600px-Facebook_Messenger_logo_2020.svg.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3Xaiak7URzqOClCAadZBrkDVgd05j-ea_ZAEP6SRvQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm45OyYmnlY-2_XmD9Ph2Lz3_AGWRncnxP1dJVfrw&usqp=CAE&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljKKTNSF6nBsB0kE7CGf04WC7Mx4b1SEPJQyWBDId&usqp=CAE&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/130px-Tesla_Motors.svg.png",
    "https://upload.wikimedia.org/wikipedia/ar/d/d2/Ea-logo.png"
  ]
  const log = [
  "ديسكورد", 
  "فيسبوك", 
  "واتساب", 
  "فايبر", 
  "ريدت", 
  "ماسنجر", 
  "انستاقرام",
    "سبوتيفاي",
    "epay",
    "ابل",
    "تيسلا",
    "ea"
  ]
  
  let logo = Math.floor(Math.random() * lo.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
  .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle("**خمن اسم الشعار او الماركة التالية**")
.setImage(lo[logo])
  message.channel.send(embed)
 const filter = m => m.content.includes(log[logo]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)
});
}
///Famous
if(message.content === prefix + "famous" || message.content === prefix + "مشاهير"){
  const fa = [
  "https://cdn.al-ain.com/lg/images/2022/1/18/173-231411-hassan-abu-falah-youtuber-influencer-3.jpeg", 
  "https://pbs.twimg.com/media/EsbE3uiXYAEiWVB.jpg", 
  "https://pbs.twimg.com/profile_images/1207230360507047936/PVEIcm8X_400x400.jpg", 
    "https://i.pinimg.com/736x/00/17/ca/0017ca6e0144d2df2b0fbd118b8d0002.jpg",
"https://pbs.twimg.com/media/EYwMsXVWoAEzitn.jpg",
 "https://pbs.twimg.com/profile_images/1459146538173804548/3KtUYGoF_400x400.jpg", "https://yt3.ggpht.com/AJdcjtHRho36DFdtVR_O5QR4GkMpPWW-TfsWGeOCm8HPPTJcwkiDIHmFYkUGllr30sZt9M1x2Fk=s176-c-k-c0x00ffffff-no-rj-mo",
    "https://pbs.twimg.com/profile_images/1279834991569121281/CVvEd0ew_400x400.jpg"
  
  ]
  const fam = [
  "ابو فلة", 
  "بندريتا", 
  "سيد", 
  "اوسمز", 
    "اوبلز",
    "ابو عابد",
    "دربحة",
  "شونق"
  ]
  
  let fams = Math.floor(Math.random() * fa.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
        .setTitle("**خمن من في الصورة**")

.setImage(fa[fams])
  message.channel.send(embed)
 const filter = m => m.content.includes(fam[fams]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
message.channel.send(`>  <@${collected.first().author.id}> **مـبـروك الـفـائـز هـو**`)
})
.catch(() => {
message.channel.send(`> **..انـتـهـى الـوقـت ؛ لـم يـفـز أحد**`)

});
}
})


client.login(process.env.TOKEN).catch(() =>{
    console.log("Watch The Video Please")
})
require("http").createServer((_, res) => res.end("Made By Odqin Hope.#3890\n\nTo Make The Bot Online 24h Join Discord Server Below..\n\n\nhttps://discord.gg/CkXfzjYVJw")).listen(8080)