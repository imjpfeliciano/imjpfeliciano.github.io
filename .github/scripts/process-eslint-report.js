const fs = require('fs')

const INPUT_FILE = 'eslint-report.json'
const OUTPUT_FILE = 'eslint-slack-message.json'

// Define maximum bar length for visualization
const MAX_BAR_LENGTH = 20

// Function to generate a bar chart using emojis
const generateBar = (count, maxCount) => {
  const length = Math.round((count / maxCount) * MAX_BAR_LENGTH)
  return '🟥'.repeat(length) + '▫️'.repeat(MAX_BAR_LENGTH - length) // Red bars with placeholders
}

try {
  const report = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'))
  const { errorCounts } = report

  let blocks = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*ESLint Report* 📊',
      },
    },
  ]

  if (Object.keys(errorCounts).length > 0) {
    const maxErrorCount = Math.max(...Object.values(errorCounts))

    Object.entries(errorCounts).forEach(([rule, count]) => {
      blocks.push({
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `*${rule}* (${count})\n${generateBar(count, maxErrorCount)}`,
          },
        ],
      })
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

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ blocks }, null, 2))
  console.log('Processed ESLint report successfully.')
} catch (error) {
  console.error('Error processing ESLint report:', error)
  process.exit(1)
}
