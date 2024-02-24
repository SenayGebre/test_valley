"use client";

import { fetchProducts } from '@/services/product_service';
import ProductItems from './ProductItems';
import React, { useState, useEffect, useRef } from 'react';
import { IProduct, IProductList } from '@/types/product.type';


const ProductList = () => {
    const sliderRef = useRef<any>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [products, setProducts] = useState<IProductList>([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };

        loadProducts();

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        const isMobileView = window.innerWidth < 768; // You can adjust the breakpoint as needed
        setIsMobile(isMobileView);
    };
    const nextSlide = () => {
        sliderRef?.current?.slickNext();
    };
    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };


    return (<div className=' md:px-12 justify-between items-center'>
        {products?.map((product: IProduct) => (
            <div className="flex md:flex-row flex-col md:my-10" key={product.id}>
                <div className='w-[300px]'>
                    <div className="md:mb-20 my-4">
                        <h2 className='font-bold text-lg'>{product.title}</h2>
                        <p className='text-xs text-gray-500'>{product.subtitle}</p>
                    </div>

                    <div className="text-gray-400 md:pt-20 hidden md:flex">
                        <button className="mr-10" onClick={prevSlide}>
                            <img src="./chevron-left.svg" alt="prev icon" />
                        </button>
                        <button onClick={nextSlide} className='text-lg text-gray-300'>
                            <img src="./chevron-right.svg" alt="prev icon" />
                        </button>
                    </div>
                </div>
                <ProductItems items={product.items} />
            </div>
        ))}
    </div>);

};

export default ProductList;
