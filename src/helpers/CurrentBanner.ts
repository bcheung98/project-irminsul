export function CurrentBanner(startDate: string, endDate: string) {
    let today = new Date()
    if (today >= new Date(startDate) && today < new Date(endDate)) {
        return { backgroundColor: "rgb(0, 128, 225)" }
    }
}