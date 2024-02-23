import { IBannerList } from "@/types/banner.type";

export const fetchBanners = async (): Promise<IBannerList> => {
    try {
        const response = await fetch('https://api.testvalley.kr/main-banner/all');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IBannerList = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching banners:", error);
        throw error;
    }
};