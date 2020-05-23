import { runTests } from 'naive-tests'
import path from 'path'

runTests(path.resolve('tests'), (err, results) => {
    if (err) throw new Error()

    results.forEach(result => {
        if (result.errors.length > 0) {
            console.error(result.info)
            result.errors.forEach((error) => {
                console.error(error)
            })
        } else {
            console.log('pass')
        }
    })
})
