import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ProductItems: React.FC<any> = ({ items }) => {

    const parsePrise = (price: any) => {
        const amount = parseFloat(price).toLocaleString()
        if (amount != 'NaN')
            return amount;
    }
    return (
        <div className='md:w-[850px] w-[300px]  px-4 md:px-0'>
            <Swiper
                slidesPerView={1}
                spaceBetween={2}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {items.map((item: any) => (
                    <SwiperSlide key={item.publication.id}>
                        <div className=''>
                            <div className="w-10/12 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-55">
                                <figure className="relative max-w-sm cursor-pointer">
                                    <a href="#">
                                        <img className="rounded-md" src={item.publication.media[0].uri} alt={`Slide ${item.publication.id}`} />
                                    </a>
                                    <figcaption className="absolute px-2 mx-2 text-xs text-white bottom-2 bg-secondary rounded">
                                        <p className='m-1 text-xs'>리턴 가능</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="mt-4 w-10/12">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={item.key}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {item.publication.title}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-red-600">
                                        <span>{item.publication.priceInfo.discountRate}<span>%</span></span>
                                        <span className="ml-1 text-gray-600 font-bold">{parsePrise(item.publication.priceInfo.discountPrice)}</span>
                                    </p>
                                </div>
                                <p>
                                    <span style={{ color: 'gray', fontSize: '12px' }} >
                                        &#9733; {item.publication.rating} {item.publication.preface}
                                    </span>
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductItems;