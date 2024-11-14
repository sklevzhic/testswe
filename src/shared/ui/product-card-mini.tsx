import { CartCountHandler } from '@/shared/ui/cart-count-handler';
import React from 'react';

interface ProductCardMiniProps {
    onClick?: () => void;
    image: string;
    title: string;
    price: string;
    onClickAddToCart: () => void;
    isAddedToCart: boolean;
}

export const ProductCardMini = (props: ProductCardMiniProps) => {
    const { onClick, image, title, price, onClickAddToCart, isAddedToCart } = props;
    return (
        <>
            <div onClick={onClick} className="rounded-lg border p-6 shadow-sm border-gray-900 bg-gray-800">
                <div className="h-56 w-full">
                    <a href="#">
                        <img className="mx-auto h-full hidden" src={image} alt="" />
                        <img className="mx-auto h-full block" src={image} alt="" />
                    </a>
                </div>
                <div className="pt-6">
                    <a className="text-lg font-semibold leading-tight hover:underline text-white truncate">{title}</a>
                    <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl font-extrabold leading-tight  text-orange-600">${price}</p>
                        <CartCountHandler size={30} onClick={onClickAddToCart} isAddedToCart={isAddedToCart} />
                    </div>
                </div>
            </div>
        </>
    );
};
