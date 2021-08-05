const { readFile, writeFile, writeFileSync } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            './content/result-synch.txt', `here is result: ${second},${first}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done withe the task ')
            }
        )

    })
})
console.log('starting next task')