    export interface IShortcut {
        updater: string;
        mainShortcutId: number;
        title: string;
        sort: number;
        imageUrl: string;
        deletedAt: string | null;
        creator: string;
        deleter: string | null;
        createdAt: string;
        linkUrl: string;
        updatedAt: string;
    }
    export type IShortcutLists = IShortcut[];