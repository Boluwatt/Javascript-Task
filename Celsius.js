function convertFahrToCelsius (f) {
    if(typeof f == 'number') {
        let celsius = ((f-32) * (5/9))
        return (celsius.toFixed(4))
    }

    else if (typeof f == 'object') {
        if (Array.isArray(f)) {
            console.log('this is an array')
            return ('${f} is not a valid number but an array')
        }
        else {
            console.log('this is an object');
            output = ('${JSON.stringify(f)} is not a valid number but a ${typeof f}')
            return output
        }
    }

    else if (typeof f == 'string') {
        console.log('')
        //let fNumber = Number(f); 
        return ('this is not a valid number but a string')  

        if(isNaN(f)) {
            console.log('this is not a number')
            return ('${f} is not a valid number but a ${typeof f}')
        }

        else {
            let celsius = ((f-32) * (5/9))
            return (celsiustoFixed(4)) 
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

