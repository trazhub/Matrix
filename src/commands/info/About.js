import Command from "../../structures/Command.js"; 
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export default class About extends Command {
    constructor(client) {
        super(client, {
            name: 'about',
            description: {
                content: 'See information about this project.',
                usage: 'about',
                examples: ['about'],
            },
            aliases: ["abouts"],
            category: 'general',
            cooldown: 3,
            permissions: {
                dev: false,
                client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            slashCommand: true,
        });
    }

    async run(ctx, args) {

        const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
        .setLabel("Invite helix")
        .setStyle(ButtonStyle.Link)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=1069607832229515355&permissions=8&scope=applications.commands%20bot`),
        new ButtonBuilder()
        .setLabel("Support Helix")
        .setStyle(ButtonStyle.Link)
        .setURL("https://garvverma.me/dcjoin"))

        const embed = this.client.embed()
            .setAuthor({ name: 'Helix', iconURL: 'https://media.discordapp.net/attachments/1050828547129872480/1073854234258313226/ae608cf3b96e9f746d855f926cc82b96.jpg'})
            .setThumbnail('https://media.discordapp.net/attachments/1050828547129872480/1073854234258313226/ae608cf3b96e9f746d855f926cc82b96.jpg')
            .setColor(this.client.color.default)
            .addFields([
                { name: 'Creator', value: '[Trazhub](https://github.com/trazhub)', inline: true },
                { name: 'Repository', value: '[Here](https://github.com/trazhub/helixbot)', inline: true },
                { name: 'Support', value: '[Here](https://garvverma.me/dcjoin)', inline: true },
                { name: '\u200b', value: `He really wanted to make his first open source project ever for more coding experience. In this project, he was challenged to make a project with less bugs. Hope you enjoy using helix!`, inline: true },
            ]);
        return await ctx.sendMessage({ content: '', embeds: [embed], components: [row]})
    }
}
