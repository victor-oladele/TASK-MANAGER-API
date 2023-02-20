

class customapierror extends Error {
    constructor(message , statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createcustomerror = (message , statusCode) => {
    return new customapierror(message , statusCode)
}

module.exports = {createcustomerror , customapierror}























