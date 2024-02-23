namespace ProductType {
    export interface IProduct {
        startDate: null | string;
        id: number;
        code: string;
        type: string;
        subtitle: string;
        description: string;
        installmentPrice: null | number;
        trialPeriod: null | string;
        rating: number;
        installmentPeriod: null | string;
        singleCollections: any[];
        title: string;
        viewType: null | string;
        createdAt: string;
        endDate: null | string;
        items: any[];
        taggings: any[];
        media: IMediaItem[];
        thumbnail: IMediaItem;
    }

    export interface IMediaItem {
        updatedAt: string;
        deletedAt: null | string;
        uuid: string;
        createdAt: string;
        mimeType: string;
        uri: string;
        fileName: string;
        objectKey: string;
        seq: number;
        deviceType: null | string;
        type: string;
        collectionId: number;
        itemKey: null | string;
    }


    export interface ISliderController {
        autoplay: boolean,
        slidesToShow: number,
        infinite: boolean,
        slidesToScroll: number,
        autoplaySpeed: number
    }

    export type IProductList = IProduct[];
}
