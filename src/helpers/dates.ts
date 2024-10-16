const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const offset = ["UTC-5", "UTC+1", "UTC+8"]

export function convertToDateObject(date: string, serverTime = false) {
    if (!serverTime) {
        return new Date(`${date} ${offset[0]}`)
    }
    else {
        return new Date(`${date} UTC+8`)
    }
}

export function convertToDateString(date: Date) {
    let arr = date.toLocaleString().split(",")

    let dateArr = arr[0].split("/")
    let month = months[Number(dateArr[0]) - 1]
    let day = parseInt(dateArr[1], 10).toString()
    let year = dateArr[2]
    let datestring = `${month} ${day}, ${year}`

    let timeArr = arr[1].split(" ")
    let timestamp = `${timeArr[1].split(":").splice(0, 2).join(":")} ${timeArr[2]}`

    return { date: datestring, time: timestamp }
}

export function isCurrentBanner(start: Date, end: Date) {
    let today = new Date()
    return today >= start && today < end
}