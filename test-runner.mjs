import { runTests } from 'naive-tests'
import path from 'path'

runTests(path.join(process.cwd(), 'tests'), (err, results) => {
    if (err)
        throw new Error('test runner import fails')

    let errors = 0
    results.forEach(result => {
        if (result.errors.length > 0) {
            console.error(result.info)
            result.errors.forEach((error) => {
                console.log(error)
            })
            errors++
        } else { 
            console.log(result)
        }
    })

    if (errors > 0)
        throw new Error('tests')
})