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
            <div onClick={onClick} className="relative w-full cursor-pointer max-w-xs overflow-hidden rounded-lg bg-gray-800 shadow-md">
                <img className="h-60 rounded-t-lg object-contain" src={image} alt="product image" />

                <div className="mt-4 px-5 pb-5 bg-gray-900 pt-2">
                    <h5 className="text-lg font-semibold tracking-tight text-slate-100 mb-2 truncate ">{title}</h5>

                    <div className="flex items-center justify-between">
                        <p className={''}>
                            <span className="text-xl font-bold text-orange-500">${price}</span>
                        </p>
                        <CartCountHandler size={30} onClick={onClickAddToCart} isAddedToCart={isAddedToCart} />
                    </div>
                </div>
            </div>
        </>
    );
};
