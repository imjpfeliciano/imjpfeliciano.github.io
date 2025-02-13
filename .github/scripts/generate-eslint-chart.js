const fs = require('fs')
const { createCanvas } = require('canvas')

const INPUT_FILE = 'eslint-report.json'
const OUTPUT_FILE = 'eslint-chart.png'

// Canvas settings
const WIDTH = 600
const HEIGHT = 500
const BAR_WIDTH = 40
const PADDING = 60
const CHART_HEIGHT = HEIGHT - 150 // Leave space for table

function getColorForIndex(index, totalBars) {
  const hue = (index / totalBars) * 360 // Hue from 0 to 360 degrees
  return `hsl(${hue}, 100%, 50%)` // HSL format
}

try {
  const report = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'))
  const { errorCounts } = report
  const keys = Object.keys(errorCounts)
  const values = Object.values(errorCounts)
  const maxCount = Math.max(...values)

  const longestRule = Object.keys(errorCounts).reduce(
    (a, b) => (a.length > b.length ? a : b),
    ''
  )

  // Create canvas
  const canvas = createCanvas(WIDTH, HEIGHT)
  const ctx = canvas.getContext('2d')

  // Background
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  // Draw bars
  keys.forEach((rule, i) => {
    const barHeight = (values[i] / maxCount) * (CHART_HEIGHT - 100)
    const x = PADDING + i * (BAR_WIDTH + 30)
    const y = CHART_HEIGHT - barHeight - 40

    ctx.fillStyle = getColorForIndex(i, keys.length)
    ctx.fillRect(x, y, BAR_WIDTH, barHeight)

    // Labels
    ctx.fillStyle = '#000'
    ctx.font = '14px Arial'
    ctx.fillText(rule, x, HEIGHT - 20)
    ctx.fillText(values[i], x + 10, y - 5)
  })

  const columnWidth = Math.max(longestRule.length, 10) + 2 // Ensure minimum width

  // Format heading dynamically
  const ruleHeader = 'Rule'.padEnd(columnWidth)
  const countHeader = 'Count'
  const separator = '-'.repeat(columnWidth) + '|------'

  // Draw error summary table below chart
  const tableStartY = height - 80
  ctx.font = '14px Arial'
  ctx.fillStyle = 'black'
  ctx.fillText(`${ruleHeader} | ${countHeader}`, 50, tableStartY)
  ctx.fillText(separator, 50, tableStartY + 15)

  Object.entries(errorCounts).forEach(([rule, count], i) => {
    const formattedRule = rule.padEnd(columnWidth)
    ctx.fillText(`${formattedRule} | ${count}`, 50, tableStartY + 30 + i * 20)
  })

  // Save the image
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(OUTPUT_FILE, buffer)
  console.log('✅ ESLint chart saved as', OUTPUT_FILE)
} catch (error) {
  console.error('Error generating ESLint chart:', error)
  process.exit(1)
}
