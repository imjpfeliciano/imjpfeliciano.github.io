const axios = require('axios')

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
const IMAGE_URL = process.env.IMAGE_URL // Pass from GitHub Actions

const slackMessage = {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*ESLint Report* 📊',
      },
    },
    {
      type: 'image',
      image_url: IMAGE_URL,
      alt_text: 'ESLint Chart',
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
      console.error('❌ Error sending message:', response.data)
    }
  } catch (error) {
    console.error('Error:', error)
  }
})()
