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
            <section className="pt-24 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-manrope font-bold text-4xl text-white mb-8 max-xl:text-center">Trending now</h2>
                    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 gap-8">
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
                </div>
            </section>
        </>
    );
};
