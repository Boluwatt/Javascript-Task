function checkYuGiOh (N) {
    if(typeof N == 'number') {
        const arr = Array.from({length: N}, (_, index) => index + 1);
        console.log(arr);
        return arr
    }

    else if (typeof N == 'object') {
        if (Array.isArray(N)) {
            console.log('invalid parameter:${N}')
            return ('this is an invalid parameter:${N}')
        }
        else {
            console.log('invalid parameter:${N}');
            output = ('${JSON.stringify(N)} this is an invalid parameter:${N}')
            return output
        }
    }

    else if (typeof N == 'string') {
        console.log('')
        return ('this is an invalid parameter:${N}')  

        if(isNaN(N)) {
            console.log('invalid parameter:${N}')
            return ('${N} this is an invalid parameter:${N}')
        }
    }

    else if (typeof N == 'boolean') {
        console.log('invalid parameter:${N}')
        return ('this is an invalid parameter:${N}')
    }

    else {
        console.log('failure')
    }
}