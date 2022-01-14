var next = 0

export async function getNextImage() {
    let list = [
        {
            image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80",
            location: ["New York", "USA"]
        },
        {
            image: "https://images.unsplash.com/photo-1586431209321-797329eb2d3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
            location: ["Lhasa", "Tibet"]
        },
        {
            image: "https://images.unsplash.com/photo-1611216648465-f8f711da6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
            location: ["Amsterdam", "Netherlands"]
        },
        {
            image: "https://images.unsplash.com/flagged/photo-1556438758-e02fa974a98f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80",
            location: ["Moscow", "Russia"]
        },
    ]

    await new Promise(r => setTimeout(r, Math.random()*1000));
    return list[(next++)%list.length]
}