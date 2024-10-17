const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const offset = ["UTC-5", "UTC+1", "UTC+8"] // NA, EU, Asia

export function createDateObject(date: string) {

    let dateObj
    if (!date.endsWith("UTC+8")) {
        dateObj = new Date(`${date} ${offset[0]}`)
    }
    else {
        dateObj = new Date(`${date}`)
    }

    let arr = dateObj.toLocaleString().split(",")

    let dateArr = arr[0].split("/")
    let month = months[Number(dateArr[0]) - 1]
    let day = parseInt(dateArr[1], 10).toString()
    let year = dateArr[2]
    let dateString = `${month} ${day}, ${year}`

    let timeArr = arr[1].split(" ")
    let timestamp = `${timeArr[1].split(":").splice(0, 2).join(":")} ${timeArr[2]}`
    
    return { obj: dateObj, date: dateString, time: timestamp }

}

export function isCurrentBanner(start: Date, end: Date) {
    let today = new Date()
    return today >= start && today < end
}