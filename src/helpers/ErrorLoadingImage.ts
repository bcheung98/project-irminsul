const ErrorLoadingImage = (event: any) => {
    event.target.src = `${process.env.REACT_APP_URL}/Unknown.png`
    event.onError = null
}

export default ErrorLoadingImage