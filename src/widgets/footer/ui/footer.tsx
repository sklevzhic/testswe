'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <>
            <footer className="w-full py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className={'flex justify-center'}>
                            <span className="self-center text-center text-xl ml-2 text-white font-semibold whitespace-nowrap">
                                <span className={'text-indigo-600'}>CS</span>SKINS
                            </span>
                        </div>
                        <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                            <li>
                                <Link href={'/'} className=" text-white hover:text-indigo-600">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about-us'} className="text-white hover:text-indigo-600">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href={'/contacts'} className=" text-white hover:text-indigo-600">
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                        <div className="flex space-x-10 justify-center items-center mb-14">
                            <img src="/images/payments/visa-logo.b70c437.svg" alt="" />
                            <img src="/images/payments/mastercard-logo.8c70c99.png" alt="" />
                        </div>
                        <span className="text-lg text-gray-500 text-center block">
                            ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};
