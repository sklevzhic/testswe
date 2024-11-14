'use client';

import React, { useState } from 'react';
import { CartCountHandler } from '@/shared/ui';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '@/shared/cart/cart-store';

export const Header = () => {
    const router = useRouter();
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const { total } = useCart();
    const pathname = usePathname();

    return (
        <>
            <div className={'fixed w-full z-10 bg-[#202026]'}>
                <header className={'w-full max-w-7xl mx-auto'}>
                    <nav className="py-5 px-4 lg:px-6">
                        <div className="flex flex-wrap justify-between items-center">
                            <a
                                onClick={() => {
                                    router.push('/');
                                }}
                                className="flex items-center cursor-pointer"
                            >
                                <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
                                    <span className={'text-orange-600'}>CS</span>SKINS
                                </span>
                            </a>
                            <div className="flex items-center md:order-2">
                                <CartCountHandler
                                    count={total.items}
                                    onClick={() => {
                                        router.push('/cart');
                                    }}
                                />
                                <button
                                    data-collapse-toggle="mobile-menu-2"
                                    type="button"
                                    className="inline-flex ml-4 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-inherit focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded="false"
                                    onClick={() => {
                                        setIsPopUpOpen(!isPopUpOpen);
                                    }}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isPopUpOpen ? (
                                        <>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                            <div
                                className={classNames(!isPopUpOpen && 'hidden', 'justify-between items-center w-full md:flex md:w-auto md:order-1')}
                                id="mobile-menu-2"
                            >
                                <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                                    <li>
                                        <a
                                            onClick={() => {
                                                router.push('/');
                                            }}
                                            className={`block cursor-pointer py-2 pr-4 pl-3  border-b border-gray-100 
                                                hover:bg-orange-400 md:hover:bg-inherit  md:border-0 md:hover:text-primary-700 md:p-0
                                                ${pathname === '/' ? 'text-orange-600' : 'text-white'}`}
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                router.push('/shop');
                                            }}
                                            className={`block cursor-pointer py-2 pr-4 pl-3  border-b border-gray-100 
                                                hover:bg-orange-400 md:hover:bg-inherit  md:border-0 md:hover:text-primary-700 md:p-0
                                                ${pathname === '/shop' ? 'text-orange-600' : 'text-white'}`}
                                        >
                                            Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() => {
                                                router.push('/about-us');
                                            }}
                                            className={`block cursor-pointer py-2 pr-4 pl-3  border-b border-gray-100 
                                                hover:bg-orange-400 md:hover:bg-inherit  md:border-0 md:hover:text-primary-700 md:p-0
                                                ${pathname === '/about-us' ? 'text-orange-600' : 'text-white'}`}
                                        >
                                            About us
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            onClick={() => {
                                                router.push('/contacts');
                                            }}
                                            className={`block cursor-pointer py-2 pr-4 pl-3  border-b border-gray-100 
                                                hover:bg-orange-400 md:hover:bg-inherit  md:border-0 md:hover:text-primary-700 md:p-0
                                                ${pathname === '/contacts' ? 'text-orange-600' : 'text-white'}`}
                                        >
                                            Contacts
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
};
