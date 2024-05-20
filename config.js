const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="rodrricksector2814@gmail.com"
global.location="That one"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "256709150527";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256782956464";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_57_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDc4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkxLFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHY3T21TWWxVV1dLdWVyV2ptNXJwUlVWQjVxbnc2czgzNFd3T0tJTDZVYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3ODI5NTY0NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdDNEM5NUY3RTVDQzM4QTBCODc0QTg1NTc0MzFDQkU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjE2NjY1MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc4Mjk1NjQ2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0IxRUNFMkNFMDU5MEM4MDIwMDIyMDE4M0Y4QTYxNEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MTY2NjUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZoeDBqR3puUWZ1NHUzSXV0OFlYSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmE0M2E3ZTMtNDI5ZC00MzU4LTk4NTgtMDVlYzhlNjZlNjVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDE2OCxcbiAgICAgIDg2LFxuICAgICAgMTc3LFxuICAgICAgMTk3LFxuICAgICAgMTM4LFxuICAgICAgMTM2LFxuICAgICAgMjQzLFxuICAgICAgMTk1LFxuICAgICAgMTE4LFxuICAgICAgMTg0LFxuICAgICAgMzMsXG4gICAgICAyMDAsXG4gICAgICAyMzksXG4gICAgICA1NyxcbiAgICAgIDIwLFxuICAgICAgMTIyLFxuICAgICAgMzcsXG4gICAgICAxNyxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMTgxLFxuICAgICAgMjMzLFxuICAgICAgMTQzLFxuICAgICAgMTk2LFxuICAgICAgMTM4LFxuICAgICAgMTY3LFxuICAgICAgODUsXG4gICAgICAxNDgsXG4gICAgICAyMjcsXG4gICAgICAyMTUsXG4gICAgICAyMzEsXG4gICAgICAxODMsXG4gICAgICAxMDUsXG4gICAgICAxNjIsXG4gICAgICAxMDQsXG4gICAgICAxMjYsXG4gICAgICAyNDIsXG4gICAgICAxMjQsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyUUtOQVJRNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzgyOTU2NDY0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5Njg1OTM0MDIyNjk2OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUklQIFZBTiBXSU5LTEVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbmdsOGdERVBHL3FySUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVFOHJzU2JqZW9DaHAxcE9iRzJUOW5vMjFabXYyeDQxZ1JUWmNpYkRWMTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUU0yMHRXUkl5Q2R4bTZMOWZYbzF3eVVlQ0RBNU44bWFyTjBlcmFTbXdFUDBwRG1kK1VxM3pwS0g1Z3B0NTFiTFp5cElaN1hhUDByb1g3aVNpNnhsQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicUFaMVFCUnZRMjNOY3dFSWNDQjZsakxtMHFVZXAzKzJSRlozTmhXQjNIdm9YZjhESU1vVFhGTDh2Zi8xYTQ3SDJpT0d3aEdYOU5NQ2tLQzhmUEg1Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzgyOTU2NDY0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYxNjY2NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLTGtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtMay5qc29uIjogIntcImtleURhdGFcIjpcIlF3M1B6QWo1Q2wvNjF4SkJkcTM2c3kwMStiM2EyQzJ0SDlzTTV1TlRwMmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTU2NjkwNDczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwOTE5MjE4ODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Sector",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "XXAVIER",
  ownername:process.env.OWNER_NAME|| "ROD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
