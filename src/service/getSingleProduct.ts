const getData = async () => {
    try {
        const res = await fetch(`https://next-ecommers-backend-6m5t.vercel.app//all`)
        const data = await res.json()

        return data
    } catch (error:any) {
        throw new Error(error.message)
    }
}


export const getSingleProduct = async (id:number) => {
    const item = await getData()
    const singleItem = await item.find((product:any) => product.id === id)
    return singleItem
}