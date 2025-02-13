const fs = require('fs')

const INPUT_FILE = 'eslint-report.json'
const OUTPUT_FILE = 'eslint-slack-message.json'

// Define max bar height for visualization
const MAX_BAR_HEIGHT = 10

// Function to generate a vertical bar chart
const generateVerticalBars = (errorCounts) => {
  const maxCount = Math.max(...Object.values(errorCounts))
  const rules = Object.keys(errorCounts)
  const scaledCounts = rules.map((rule) =>
    Math.round((errorCounts[rule] / maxCount) * MAX_BAR_HEIGHT)
  )

  let chart = []

  // Build each row from top to bottom
  for (let i = MAX_BAR_HEIGHT; i > 0; i--) {
    let row = rules
      .map((rule, index) => (scaledCounts[index] >= i ? '🟥' : '⬜'))
      .join(' ')
    chart.push({ type: 'context', elements: [{ type: 'mrkdwn', text: row }] })
  }

  // Add rule names below the bars
  chart.push({
    type: 'context',
    elements: [
      { type: 'mrkdwn', text: rules.map((rule) => `*${rule}*`).join('   ') },
    ],
  })

  return chart
}

try {
  const report = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'))
  const { errorCounts } = report

  let blocks = [
    {
      type: 'section',
      text: { type: 'mrkdwn', text: '*ESLint Report* 📊' },
    },
  ]

  if (Object.keys(errorCounts).length > 0) {
    blocks.push(...generateVerticalBars(errorCounts))
  } else {
    blocks.push({
      type: 'section',
      text: { type: 'mrkdwn', text: '✅ No significant ESLint errors found!' },
    })
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ blocks }, null, 2))
  console.log('Processed ESLint report successfully.')
} catch (error) {
  console.error('Error processing ESLint report:', error)
  process.exit(1)
}
