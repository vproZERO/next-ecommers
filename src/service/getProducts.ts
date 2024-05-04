"use server"



export const getProducts = async () => {
    try {
        const res = await fetch("https://next-ecommers-backend-6m5t.vercel.app//all");
        const data = await res.json();

        return data
    } catch (error) {
        console.log(error);
        
    }
}