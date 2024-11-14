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
            <div onClick={onClick} className="relative w-full max-w-xs overflow-hidden rounded-lg bg-gray-900 shadow-md">
                <img className="h-60 rounded-t-lg object-contain bg-gray-900" src={image} alt="product image" />

                <div className="mt-4 px-5 pb-5 bg-gray-800">
                    <h5 className="text-xl font-semibold tracking-tight bg-gray-800 text-slate-100 truncate ">{title}</h5>

                    <div className="flex items-center bg-gray-800 justify-between">
                        <p>
                            <span className="text-3xl bg-gray-800 font-bold text-slate-100">{price}</span>
                        </p>
                        <CartCountHandler size={30} onClick={onClickAddToCart} isAddedToCart={isAddedToCart} />
                    </div>
                </div>
            </div>
        </>
    );
};
