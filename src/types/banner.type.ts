namespace BannerType {
  export interface IBanner {
    mainBannerId: number;
    title: string;
    sort: number;
    pcImageUrl: string;
    mobileImageUrl: string;
    linkUrl: string;
    startDate: string;
    endDate: string;
    creator: string | null;
    updater: string | null;
    deleter: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  }
  export type IBannerList = IBanner[];
}