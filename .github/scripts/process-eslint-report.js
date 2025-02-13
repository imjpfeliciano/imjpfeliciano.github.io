const fs = require('fs')

const INPUT_FILE = 'eslint-report.json'
const OUTPUT_FILE = 'eslint-slack-message.json'

try {
  // Read and parse the ESLint report
  const report = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'))
  const { errorCounts } = report

  // Construct Slack message blocks
  let blocks = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*ESLint Report* :rotating_light:',
      },
    },
  ]

  if (Object.keys(errorCounts).length > 0) {
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: Object.entries(errorCounts)
          .map(([rule, count]) => `• *${rule}*: ${count} errors`)
          .join('\n'),
      },
    })
  } else {
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '✅ No significant ESLint errors found!',
      },
    })
  }

  // Save the Slack message to a file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ blocks }, null, 2))

  console.log('Processed ESLint report successfully.')
} catch (error) {
  console.error('Error processing ESLint report:', error)
  process.exit(1)
}
