function checkYuGiOh (n) {
    if(typeof n == 'number') {
        let 
    }

    else if (typeof n == 'object') {
        if (Array.isArray(n)) {
            console.log('this is an array')
            return ('${n} is not a valid number but an array')
        }
        else {
            console.log('this is an object');
            output = ('${JSON.stringify(n)} is not a valid number but a ${typeof f}')
            return output
        }
    }

    else if (typeof f == 'string') {
        console.log('')
        return ('this is not a valid number but a string')  

        if(isNaN(f)) {
            console.log('this is not a number')
            return ('${n} is not a valid number but a ${typeof n}')
        }
    }

    else if (typeof f == 'boolean') {
        console.log('invalid parameter:${f}')
        return ('this is an invalid parameter:${f}')
    }

    else {
        console.log('failure')
    }
}