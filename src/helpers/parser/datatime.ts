const parseIntToDate = (intDate: number) => {
    const date = new Date(intDate)
    return date.toDateString()
}

const parseIntToTime = (intDate: number) => {
    const date = new Date(intDate)
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

const formatDateTime = (intDate: number) => {
    let val = '--'
    if (intDate > 0) {
        val = `${parseIntToDate(intDate)} ${parseIntToTime(intDate)}`
    }
    return val

}

const convertDateTime = (decDateTime: number) => {
    if (!decDateTime) {
        return null;
    }

    var date = new Date(decDateTime)
    date = new Date(date.toUTCString())
    return new Date(date.getTime()).toISOString().split('T')[0]
}

export {
    formatDateTime,
    convertDateTime
}
