const { readFileSync, writeFileSync } = require('fs')
console.log('start')
console.log('done withe thise task')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
writeFileSync('./content/result-synch.txt', `here is result : ${first}, ${second}`)