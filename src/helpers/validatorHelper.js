



export const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.length === 0) {
        return false
    }
    if (!emailRex.test(String(value).toLowerCase())) {
        return false
    }
    return true
};

export const verifyLength = (value, length) => {
    if (value.length < length) {
        return false
    }
    return true
};

export const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
        return true;
    }
    return false;
};

export const isVerifiedPassword = (value1, value2) => {
    if (value1 !== value2) {
        return { statePassowrdConf: false, messagePasswordConf: `You must put de same password` }
    }
    return { statePassowrdConf: true, messagePasswordConf: "" }
}

