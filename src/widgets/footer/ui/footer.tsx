'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export const Footer = () => {
    const router = useRouter();
    return (
        <>
            <footer className="w-full max-w-7xl mx-auto pt-20 px-4 lg:px-6 font-[sans-serif] tracking-wide">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="lg:flex flex-col">
                        <div className={'mb-8'}>
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

                        <div className="flex justify-start space-x-5 items-center mt-[-12px] md:hidden">
                            <img className={'w-12 h-5'} src="/images/payments/visa.png" alt="" />
                            <img className={'w-12 h-6 mt-[-6px]'} src="/images/payments/mc.png" alt="" />
                        </div>
                    </div>

                    <div className={'mb-6'}>
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
                    <div className="justify-end space-x-10 hidden  md:flex mt-[-12px]">
                        <img className={'w-20 h-8'} src="/images/payments/visa.png" alt="" />
                        <img className={'w-20 h-10 mt-[-8px]'} src="/images/payments/mc.png" alt="" />
                    </div>
                </div>
                <div className={'flex justify-center pb-2 items-center'}>
                    <p className="text-gray-300 text-sm">© 2024, All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};
