import { IProductList } from "@/types/product.type";

export const fetchProducts = async (): Promise<IProductList> => {
    try {
        const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json() as any;
        if (Array.isArray(data.items)) {
            const items: IProductList = data.items;
            return items.filter(da => da.type === "SINGLE" && da.viewType === "TILE")
        } else {
            console.error('Data is not an array.');
            return [];
        }
    } catch (error) {
        console.error("Error fetching banners:", error);
        throw error;
    }
};