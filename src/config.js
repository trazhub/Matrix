	import dotenv from "dotenv";
dotenv.config();
export const config = {
    token: process.env.TOKEN || "MTA2OTYwNzgzMjIyOTUxNTM1NQ.GJHRuC.kToHEZFgChOd3VRRr6ON0jtuBaL49R1qfUAmag",
    clientId: process.env.CLIENT_ID || "1069607832229515355",
    prefix: process.env.PREFIX || "!",
    ownerID: process.env.OWNER_ID || ["5927603368362812"],
    SpotifyID: process.env.SPOTIFY_ID || "8b4dbf4bb1f94290929939733f80eb55",
    SpotifySecret: process.env.SPOTIFY_SECRET || "585d5e3dc82b41aeb4f5fa26d8563de9",
    mongourl: process.env.MONGO_URL || "mongodb+srv://helix:Awsedrftgyhujikolp@cluster0.ykbs5gr.mongodb.net/?retryWrites=true&w=majority",

    color: {
        default: process.env.DEFAULT_COLOR || "#00FF00",
        error: process.env.ERROR_COLOR || "#FF0000",
        success: process.env.SUCCESS_COLOR || "#00FF00",
        info: process.env.INFO_COLOR || "#00FFFF",
        warn: process.env.WARN_COLOR || "#FFFF00",
    },
    production: process.env.PRODUCTION || false,
    guildId: process.env.GUILD_ID || "959703767333359630",
    emotes: {
        success: "✅",
        error: "❌",
        info: "ℹ️",
        warn: "⚠️",
        stop: "⏹️",
        skip: "⏭️",
        play: "▶️",
        pause: "⏸️",
        loop: "🔁",
        previous: "⏮️",
    },
    icons: {
        youtube: 'https://media.discordapp.net/attachments/963097935820750878/1054328059639111700/3670147.png',
        spotify: 'https://media.discordapp.net/attachments/963097935820750878/1054333449252655104/spotify.png',
        soundcloud: 'https://media.discordapp.net/attachments/963097935820750878/1054333449638526986/145809.png',
        applemusic: 'https://media.discordapp.net/attachments/963097935820750878/1054333450368340018/apple-music-icon.png',
        deezer: 'https://media.discordapp.net/attachments/963097935820750878/1054333450024394802/5968803.png'
    },
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/1050828547129872480/1073854234258313226/ae608cf3b96e9f746d855f926cc82b96.jpg',
        support: process.env.SUPPORT || 'https://garvverma/dcjoin',
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1069607832229515355&permissions=8&scope=bot%20applications.commands' //bot invite link
    },
    nodes: [
        {
            url: process.env.NODE_URL || "192.34.63.211",
            name: process.env.NODE_NAME || "Public Node By Trazhub",
            auth: process.env.NODE_AUTH || "trazhub",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        }
    ],
}
function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
