import { IShortcutLists } from "@/types/shortcut.type";

export const fetchShortcuts = async (): Promise<IShortcutLists> => {
    try {
        const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: IShortcutLists = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching banners:", error);
        throw error;
    }
};