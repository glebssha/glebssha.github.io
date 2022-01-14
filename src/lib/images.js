var next = 0
export async function getNextImage(uuid) {
    let url = ""
    if (!uuid) {
        url = `${process.env.REACT_APP_BACKEND_HOST}/api/random/`
    } else{
        url = `${process.env.REACT_APP_BACKEND_HOST}/api/random/not/${uuid}`
    }
    console.log(url)
    const res = await fetch(url)
    return res.json()
}

