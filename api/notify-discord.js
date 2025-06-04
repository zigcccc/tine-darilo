import { Client, TextChannel } from 'discord.js';

const client = new Client({
  intents: ['GuildMessages'],
});

/**
 * Handles POST requests to notify a Discord channel.
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} - A response indicating success or failure.
 */
export async function POST(request) {
  await client.login(process.env.DISCORD_BOT_TOKEN);

  const channel = await client.channels.fetch(process.env.DISCORD_CHANNEL_ID);
  const data = await request.json();

  if (channel?.isTextBased() && channel instanceof TextChannel) {
    try {
      const message =
        data.type === 'expandable_hint'
          ? `:scream: Anja in Horč sta pogledala namig "${data.hint}"!`
          : ':muscle: Anja in Horč sta pogledala video do konca!';
      await channel.send(message);
    } catch (error) {
      console.error('Error sending message:', error);
      return new Response('Failed to send message', { status: 500 });
    }
  }

  return new Response('Done');
}
