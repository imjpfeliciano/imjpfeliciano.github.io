const axios = require('axios')

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
const IMAGE_URL = process.env.IMAGE_URL

const slackMessage = {
  text: '🚀 ESLint Report Update!',
  blocks: [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '🚀 ESLint Report Update!',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: "🎉 *Hey <@frontend> team!* Big shoutout for your ongoing efforts in keeping our code clean! 🧹\n\nHere’s the latest ESLint report for our project. Let's keep improving! 💪",
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'image',
      title: {
        type: 'plain_text',
        text: 'ESLint Error Chart',
      },
      image_url: IMAGE_URL,
      alt_text: 'ESLint Error Chart',
    },
  ],
}

;(async () => {
  try {
    const response = await axios.post(
      SLACK_WEBHOOK_URL,
      JSON.stringify(slackMessage),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (response.status === 200) {
      console.log('✅ ESLint chart sent to Slack!')
    } else {
      console.error(
        '❌ Slack returned an error:',
        response.status,
        response.data
      )
    }
  } catch (error) {
    console.error(
      'Error sending Slack message:',
      error.response ? error.response.data : error.message
    )
  }
})()
