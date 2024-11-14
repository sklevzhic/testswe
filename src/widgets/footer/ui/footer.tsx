'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export const Footer = () => {
    const router = useRouter();
    return (
        <>
            <footer className="w-full max-w-7xl mx-auto py-20 px-4 lg:px-6 font-[sans-serif] tracking-wide">
                <div className="grid grid-cols-3 gap-8">
                    <div className="lg:flex flex-col">
                        <div className={'mb-5'}>
                            <a
                                onClick={() => {
                                    router.push('/');
                                }}
                                className="flex cursor-pointer"
                            >
                                <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
                                    <span className={'text-orange-600'}>CS</span>SKINS
                                </span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Information</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    className="cursor-pointer text-gray-300 hover:text-orange-500 text-sm"
                                    onClick={() => {
                                        router.push('/shop');
                                    }}
                                >
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-gray-300 hover:text-orange-500 text-sm"
                                    onClick={() => {
                                        router.push('/about-us');
                                    }}
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-gray-300 hover:text-orange-500 text-sm"
                                    onClick={() => {
                                        router.push('/contacts');
                                    }}
                                >
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-end space-x-10 items-center mt-[-12px]">
                            <img className={'w-12 h-12'} src="/images/payments/visa-logo.b70c437.svg" alt="" />
                            <img className={'w-15 h-5'} src="/images/payments/mastercard-logo.8c70c99.png" alt="" />
                        </div>
                    </div>
                </div>
                <p className="text-gray-300 text-sm mt-10">© 2024, All rights reserved.</p>
            </footer>
        </>
    );
};
