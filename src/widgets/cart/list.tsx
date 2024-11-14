'use client';

import Icon from '@/shared/ui/icon';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProductWithQuantity, useCart } from '@/shared/cart/cart-store';

export const CartList = () => {
    const { products: productsCart } = useCart();
    return (
        <>
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                    {productsCart.map((product) => {
                        return <CartItem key={product.id} product={product} />;
                    })}
                </div>
            </div>
        </>
    );
};

export const CartItem = (props: { product: ProductWithQuantity }) => {
    const { product } = props;
    const router = useRouter();

    const [quantity, setQuantity] = useState(product.quantity || 0);
    const { changeQuantityById, removeProduct } = useCart();

    return (
        <>
            <div key={product.id} className="rounded-lg border border-gray-800 bg-gray-800 p-4 shadow-sm dark:bg-gray-800 md:p-6">
                <div className="space-y-4 bg-inherit md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a className="shrink-0 bg-inherit md:order-1">
                        <img className="h-20 w-20 bg-inherit dark:hidden" src={'/images/items/' + product.image} alt="imac image" />
                        <img className="hidden h-20 w-20 bg-inherit dark:block" src={'/images/items/' + product.image} alt="imac image" />
                    </a>
                    <label htmlFor="counter-input" className="sr-only">
                        Choose quantity:
                    </label>
                    <div className="flex items-center bg-inherit justify-between md:order-3 md:justify-end">
                        <div className="flex bg-inherit items-center">
                            <Icon
                                name={'Minus'}
                                className={'bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer'}
                                onClick={() => {
                                    if (quantity > 0) {
                                        changeQuantityById(product.id, 'decrease');
                                        setQuantity((prev) => prev - 1);
                                    }
                                }}
                            />
                            <input
                                type="text"
                                id="counter-input-2"
                                data-input-counter=""
                                className="w-10 rounded-full border shrink-0 ml-1 mr-1 bg-transparent text-center text-sm font-medium text-white focus:outline-none focus:ring-0"
                                placeholder=""
                                disabled={true}
                                required={true}
                                value={quantity}
                                onChange={() => {}}
                            />
                            <Icon
                                name={'Plus'}
                                className={'bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer'}
                                onClick={() => {
                                    changeQuantityById(product.id, 'increase');
                                    setQuantity((prev) => prev + 1);
                                }}
                            />
                        </div>
                        <div className="text-end bg-inherit md:order-4 md:w-32">
                            <p className="text-base bg-inherit font-bold text-white dark:text-white">${product.price}</p>
                        </div>
                    </div>
                    <div className="w-full min-w-0 flex-1 bg-inherit space-y-4 md:order-2 md:max-w-md">
                        <p
                            onClick={() => {
                                router.push(`/shop?id=${product.id}`);
                            }}
                            className="text-base cursor-pointer bg-inherit font-medium text-white hover:underline dark:text-white"
                        >
                            {product.title}
                        </p>
                        <div className="flex bg-inherit items-center gap-4">
                            <button
                                type="button"
                                onClick={() => {
                                    removeProduct(product.id);
                                }}
                                className="inline-flex bg-inherit items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                                <svg
                                    className="me-1.5 h-5 w-5 bg-inherit"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
