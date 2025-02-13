const fs = require('fs')
const path = require('path')
const { stringify } = require('querystring')

module.exports = function (results) {
  const MIN_THRESHOLD = 100 // NOTE: This is to avoid showing too many error types in the chart
  const errorCounts = {}
  const withLessThanThreshold = {}

  // Collect error types and their counts
  results.forEach((result) => {
    result.messages.forEach((message) => {
      const errorType = message.ruleId || 'unknown'
      if (errorCounts[errorType] === undefined) {
        errorCounts[errorType] = 0
      }

      errorCounts[errorType]++
    })
  })

  // Filter out error types with less than MIN_THRESHOLD errors
  Object.keys(errorCounts).forEach((errorType) => {
    if (errorCounts[errorType] < MIN_THRESHOLD) {
      withLessThanThreshold[errorType] = errorCounts[errorType]
      delete errorCounts[errorType]
    }
  })

  const labels = Object.keys(errorCounts).sort(
    (a, b) => errorCounts[b] - errorCounts[a]
  )
  const counts = labels.map((label) => errorCounts[label])
  const totalErrors = counts.reduce((sum, count) => sum + count, 0)
  const percentages = counts.map((count) =>
    ((count / totalErrors) * 100).toFixed(2)
  )

  const data = {
    errorCounts,
    withLessThanThreshold,
  }

  // Generate HTML content with Chart.js
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ESLint Report</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            canvas {
                // // width: 50vw !important;
                // height: 60vh !important;
            }

        </style>
    </head>
    <body class="p-8">
        <h1 class="text-2xl font-bold">ESLint Error Report</h1>
        <div class="flex flex-col max-w-screen-lg gap-8">

        <canvas id="errorChart" class="col-span-2"></canvas>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th class="px-6 py-3">Error Type</th>
                    <th class="px-6 py-3">Total Errors</th>
                    <th class="px-6 py-3">Percentage</th>
                </tr>
            </thead>
            <tbody>
                ${labels
                  .map(
                    (label, index) => `
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${label}</th>
                        <td class="px-6 py-4">${counts[index]}</td>
                        <td class="px-6 py-4">${percentages[index]}%</td>
                    </tr>
                `
                  )
                  .join('')}
            </tbody>
        </table>
        </div>
        <script>
            const ctx = document.getElementById('errorChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                options: {
                    aspectRatio: 2,
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                },
                data: {
                    labels: ${JSON.stringify(labels.map((label, _i) => label))},
                    datasets: [{
                        label: 'Error Count',
                        data: ${JSON.stringify(counts)},
                    }]
                },
            });
        </script>
    </body>
    </html>`

  // Ensure the reports directory exists
  //   const reportsDir = path.join(__dirname, './reports')
  //   if (!fs.existsSync(reportsDir)) {
  //     fs.mkdirSync(reportsDir)
  //   }

  const sanitizedData = JSON.stringify(data, null, 2)

  process.stdout.write(sanitizedData)

  //   // Write the data to a file
  //   fs.writeFileSync(
  //     path.join(__dirname, './reports/eslint-report-data.json'),
  //     sanitizedData
  //   )

  //   // Write the HTML content to a file
  //   fs.writeFileSync(path.join(reportsDir, 'eslint-report.html'), htmlContent)

  //   return sanitizedData
}
