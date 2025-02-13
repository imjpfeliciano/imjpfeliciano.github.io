const axios = require('axios')

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY

const IMAGE_URL = `${GITHUB_REPOSITORY}/actions/artifacts/eslint-chart.png` // Update with your actual artifact URL

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
    const response = await axios.post(SLACK_WEBHOOK_URL, slackMessage, {
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.status === 200) {
      console.log('✅ ESLint chart sent to Slack!')
    } else {
      console.error('❌ Error sending message:', response.data)
    }
  } catch (error) {
    console.error('Error:', error)
  }
})()
