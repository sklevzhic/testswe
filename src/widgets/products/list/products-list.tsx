'use client';

import { products } from '@/shared/consts/products';
import { Button } from '@/shared/ui';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Icon from '@/shared/ui/icon';
import { ProductCardMini } from '@/shared/ui/product-card-mini';
import { useCart } from '@/shared/cart/cart-store';
import { Product } from '@/shared/types/chats';

export const ProductsList = () => {
    const router = useRouter();
    const params = useSearchParams();
    const product_id = params.get('id');

    const product = products.find((product) => product.id === product_id);

    const { products: productsCart, addProduct, removeProduct } = useCart();

    return (
        <>
            <section className="w-full px-6 md:px-4 lg:px-0 min-h-[60dvh] max-w-7xl mx-auto">
                <div className="mx-auto max-w-screen-xl-4 sm:px-6 lg:px-8">
                    {product ? (
                        <ProductInfo product={product} />
                    ) : (
                        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 gap-8">
                            {products.map((item) => {
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
                    )}
                </div>
            </section>
        </>
    );
};

interface ProductInfoProps {
    product: Product;
}

export const ProductInfo = (props: ProductInfoProps) => {
    const { product } = props;
    const { products: productsCart, addProduct, changeQuantityById } = useCart();
    const productInCart = productsCart.find((productCart) => productCart.id === product.id);
    const router = useRouter();

    const [quantity, setQuantity] = useState(productInCart?.quantity || 1);

    const getProductFromCart = (id: string) => {
        return productsCart.find((product) => product.id === id);
    };

    return (
        <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
            <div className={'absolute left-0 top-0'}>
                <Icon
                    onClick={() => {
                        router.push('/shop');
                    }}
                    color={'#f97316'}
                    className={'border p-2 cursor-pointer border-gray-600 rounded-full'}
                    size={40}
                    name={'ArrowLeft'}
                />
            </div>
            <div className="img">
                <div className="img-box h-full max-lg:mx-auto ">
                    <img
                        src={'/images/items/' + product.image}
                        alt="Yellow Tropical Printed Shirt image"
                        className="max-lg:mx-auto lg:ml-auto h-full object-contain"
                    />
                </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                <div className="data w-full max-w-xl">
                    <h2 className="font-manrope font-bold text-white text-3xl leading-10 mb-2 capitalize">{product.title}</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                        <h6 className="font-manrope font-semibold text-2xl leading-9 text-orange-600 pr-5 mr-5">${product.price}</h6>
                    </div>
                    <p className="text-gray-500 text-base font-normal mb-5">{product.description}</p>
                    <div className="grid grid-cols-1  gap-3 py-8">
                        {productInCart ? (
                            <>
                                <div className="flex mb-2 bg-inherit justify-center">
                                    <Icon
                                        name={'Minus'}
                                        className={'bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer'}
                                        onClick={() => {
                                            if (quantity > 0) {
                                                changeQuantityById(product.id, 'decrease');
                                                setQuantity((prev) => prev - 1 || 1);
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
                            </>
                        ) : (
                            <></>
                        )}

                        {!getProductFromCart(product.id) ? (
                            <>
                                <Button
                                    variant={'primary'}
                                    onClick={() => {
                                        addProduct({
                                            price: product?.price,
                                            quantity: 1,
                                            id: product?.id,
                                            image: product?.image,
                                            title: product?.title,
                                        });
                                    }}
                                >
                                    Add to cart
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant={'primary'}
                                    onClick={() => {
                                        router.push('/cart');
                                    }}
                                >
                                    Cart
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
