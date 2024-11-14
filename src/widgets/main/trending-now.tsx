'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/shared/cart/cart-store';
import { ProductCardMini } from '@/shared/ui/product-card-mini';
import { products } from '@/shared/consts/products';

export const TrendingNow = () => {
    const router = useRouter();
    const { addProduct, removeProduct, products: productsCart } = useCart();

    return (
        <>
            <section className="w-full px-4 lg:px-6 max-w-7xl mx-auto my-24">
                <h2 className="text-orange-600 mb-4 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">Trending now</h2>
                <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4  gap-8">
                    {products
                        .filter((_, i) => i <= 3)
                        .map((item) => {
                            const productInCart = productsCart.find((productCart) => productCart.id === item.id);

                            return (
                                <ProductCardMini
                                    key={item.id}
                                    onClick={() => {
                                        router.push('/shop?id=' + item.id);
                                    }}
                                    image={'/images/items/' + item.image}
                                    title={item.title}
                                    price={item.price}
                                    onClickAddToCart={() => {
                                        if (!productInCart) {
                                            addProduct({
                                                price: item.price,
                                                id: item.id,
                                                image: item.image,
                                                title: item.title,
                                                quantity: 1,
                                            });
                                        } else {
                                            removeProduct(item.id);
                                        }
                                    }}
                                    isAddedToCart={productsCart.some((product) => product.id === item.id)}
                                />
                            );
                        })}
                </div>
            </section>
        </>
    );
};
