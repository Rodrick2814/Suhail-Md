const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="rodricksector2814@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || XXXAVIER " 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_22_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICA0NixcbiAgICAgICAgNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzLFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICA5NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNjJ3L0VXMFVoaW02MzZWVlZiU2NkWm9tOG1hQ3AvR1V4eXZyTUdvTWNtST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NzE1MjI0MjQxNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM5QTA5NTNDRUMzNzRCRkYyOUNGNzc0MEEwNkFEOUQyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjMwODU1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk3MTUyMjQyNDE3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzBBREEyN0I2Rjk1RTJFMjVGREVEQUVDRjhFNjZDRUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MzA4NTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZlbnBxT0RJU0tPWlZGdmJlVlJTSVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDBhNjExNzgtZmVhMi00OGI4LWEyZjYtZjZjYmI3MTc1ZDVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgOTQsXG4gICAgICAyLFxuICAgICAgMTY5LFxuICAgICAgMjA1LFxuICAgICAgNCxcbiAgICAgIDg3LFxuICAgICAgMTQzLFxuICAgICAgMTA1LFxuICAgICAgMjM3LFxuICAgICAgMjI5LFxuICAgICAgMjA1LFxuICAgICAgODMsXG4gICAgICAyNTAsXG4gICAgICAyNTAsXG4gICAgICAxMTcsXG4gICAgICAyNTUsXG4gICAgICAyOSxcbiAgICAgIDEwNixcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDIxMixcbiAgICAgIDQzLFxuICAgICAgMTk4LFxuICAgICAgMTcxLFxuICAgICAgMjM0LFxuICAgICAgMTMwLFxuICAgICAgMTEzLFxuICAgICAgMTkxLFxuICAgICAgMjI4LFxuICAgICAgMTEwLFxuICAgICAgMTk4LFxuICAgICAgOTEsXG4gICAgICAxNDEsXG4gICAgICAyMzksXG4gICAgICAxNjcsXG4gICAgICA2OCxcbiAgICAgIDE2OSxcbiAgICAgIDExNixcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBYWTZLUlFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NzE1MjI0MjQxNzE6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMDgwNzYzMzQ0MTAxMToyM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTYXNoYeKckyhGaW5pc2hlZCkg8J+Ht/Cfh7rwk4O1XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBnczlBR0VNU1VzN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwM0NWN2hEZStORHNCTk9oSnlSSkF1NW1kR2MybGpLZ21SZFVaMHl4cVdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpJY1pvc3psUnNpb2o4WE90V3lqcXZUK2xUd3B3SFRnMjNLbm5LRkJCSVFNM3RXRy82ejlrMk8xUHgzbWEyMWh0SVN3YmhDTHlzazMyMmpnbkdnVkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZoWi9JQzRpakk4cGwxUlRMT1NIeHBjTFJ0Y2Q3UUZ2Y0ZadExuY2xjaFlTemVmbU5mcmt3cGo1YnhHamoxVHBvWExZSGk4RmgzN3g2dWRCd2p5SGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk3MTUyMjQyNDE3MToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYzMDg1NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBWktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFaSy5qc29uIjogIntcImtleURhdGFcIjpcIlNtMXU3S0wzYmZISlpEdXlUT0dlZUhEcXhvMURZMDFZVE5RT1hhTzhURVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3OTIzMjgxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjI3NTI4ODkwOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 XXXAVIER 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
