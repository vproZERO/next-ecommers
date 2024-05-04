

export const getCatalog = async () => {
    try {
        const res = await fetch('https://next-ecommers-backend-6m5t.vercel.app//categories');
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error);
        
    }
}